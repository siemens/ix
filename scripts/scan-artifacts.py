#!/usr/bin/env python3
# Copyright (C) Siemens AG 2021
# SPDX-License-Identifier: SISL-1.2

import gitlab
import os
import sys

from datetime import date, datetime, timedelta
from distutils import util

gitlab_url = os.getenv("GITLAB_URL", "https://***REMOVED***")
gitlab_token = os.getenv("GITLAB_ACCESS_TOKEN") or sys.exit(
    "ERROR: missing GITLAB_ACCESS_TOKEN"
)
project_id = os.getenv("PROJECT_ID") or sys.exit("ERROR: missing PROJECT_ID")
older_than_str = os.getenv("OLDER_THAN", "60")
try:
    older_than = int(older_than_str)
except ValueError:
    older_than = 60
    print(
        "WARNING: invalid OLDER_THAN value, using default {}!".format(
            older_than_str, older_than
        )
    )
try:
    dry_mode = util.strtobool(os.getenv("DRY_MODE", "true"))
except ValueError:
    dry_mode = True
    print("WARNING: error decoding DRY_MODE, using default {}".format(dry_mode))
if not dry_mode:
    print(
        "WARNING: running SHARP, artifacts will be deleted without chance to recover them!"
    )
    try:
        delete_pipeline = util.strtobool(os.getenv("DELETE_PIPELINE", "false"))
    except ValueError:
        delete_pipeline = True
        print(
            "WARNING: error decoding DELETE_PIPELINE, using default {}".format(
                delete_pipeline
            )
        )
    if delete_pipeline:
        print(
            "WARNING: DELETE_PIPELINE is enabled, pipelines associated with these jobs will be deleted!"
        )

today = date.today()
deletion_date = today - timedelta(days=older_than)

if __name__ == "__main__":
    print("Connecting to Gitlab server {}...".format(gitlab_url))
    gl = gitlab.Gitlab(gitlab_url, gitlab_token, api_version=4, per_page=100)

    print("Getting project...")
    project = gl.projects.get(project_id)

    print("Getting finished jobs...")
    jobs = project.jobs.list(scope=["success"], all=True)
    jobs += project.jobs.list(scope=["failed"], all=True)
    jobs += project.jobs.list(scope=["canceled"], all=True)
    print("Found {} job(s).".format(len(jobs)))

    print("Filtering jobs which finished before {}...".format(deletion_date))
    to_erase = []
    jobs_with_artifacts = 0
    artifacts_count = 0
    artifacts_size = 0
    matching_jobs = 0
    matching_artifacts = 0
    matching_size = 0
    for job in jobs:
        job_artifacts = job.attributes.get("artifacts")
        if job_artifacts:
            jobs_with_artifacts += 1
            artifacts_count += len(job_artifacts)
            job_artifacts_size = sum(
                [job_artifact.get("size") for job_artifact in job_artifacts]
            )
            artifacts_size += job_artifacts_size
            if datetime.fromisoformat(job.finished_at).date() < deletion_date:
                matching_jobs += 1
                matching_artifacts += len(job_artifacts)
                matching_size += job_artifacts_size
                to_erase += [job]
    print(
        "Filtered {} job(s) with {} artifact(s) of total size {}.".format(
            jobs_with_artifacts, artifacts_count, artifacts_size
        )
    )
    print(
        "Selected {} job(s) with {} artifact(s) of total size {}.".format(
            matching_jobs, matching_artifacts, matching_size
        )
    )
    jobs = None

    if dry_mode:
        print(
            "Script was run in DRY_MODE. Set environment variable DRY_MODE to False to erase artifacts."
        )
        exit(0)

    print("Erasing jobs...")
    pipelines = []
    for job in to_erase:
        job_id = job.attributes.get("id")
        pipeline_id = job.attributes.get("pipeline")["id"]
        if pipeline_id not in pipelines:
            pipelines.append(pipeline_id)
        print("Erasing job {}".format(job_id))
        try:
            job.erase()
        except:  # noqa: E722
            print("ERROR: Failed to erase job {}!".format(job_id))

    if delete_pipeline:
        print("Deleting {} associated pipelines...".format(len(pipelines)))
        for pipeline_id in pipelines:
            print("Deleting pipeline {}".format(pipeline_id))
            try:
                pipeline = project.pipelines.get(pipeline_id)
                pipeline.delete()
            except:  # noqa: E722
                print("ERROR: Failed to delete pipeline {}!".format(pipeline_id))

    print("Finished.")

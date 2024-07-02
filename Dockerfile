FROM node:latest
FROM mcr.microsoft.com/playwright:latest
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app/

RUN ln -s ./packages/core /app/packages/core

# Get the needed libraries to run Playwright
RUN apt-get update

RUN pnpm install

RUN playwright install

RUN mv /ms-playwright /root/.cache/ms-playwright

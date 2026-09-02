import { D as DateTime } from "./datetime-D1WplX1z-grPSvmS5.js";
function parseTimeOnDay(value, format, baseDay) {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }
  const parsed = DateTime.fromFormat(trimmed, format);
  if (!parsed.isValid) {
    return null;
  }
  return baseDay.set({
    hour: parsed.hour,
    minute: parsed.minute,
    second: parsed.second,
    millisecond: parsed.millisecond
  });
}
function getTimePickerConstraintBounds(minTime, maxTime, format, baseDay) {
  let min = parseTimeOnDay(minTime, format, baseDay);
  let max = parseTimeOnDay(maxTime, format, baseDay);
  if (min && max && min > max) {
    min = null;
    max = null;
  }
  return { min, max };
}
function isWithinTimePickerConstraints(candidate, min, max) {
  if (!candidate.isValid) {
    return false;
  }
  if (min && candidate < min) {
    return false;
  }
  if (max && candidate > max) {
    return false;
  }
  return true;
}
function hasActiveTimePickerConstraints(min, max) {
  return !!(min || max);
}
function timeOfDayRangeIntersectsInclusiveBounds(rangeStart, rangeEnd, min, max) {
  if (!rangeStart.isValid || !rangeEnd.isValid) {
    return false;
  }
  if (!min && !max) {
    return true;
  }
  if (min && rangeEnd < min) {
    return false;
  }
  if (max && rangeStart > max) {
    return false;
  }
  return true;
}
export {
  getTimePickerConstraintBounds as g,
  hasActiveTimePickerConstraints as h,
  isWithinTimePickerConstraints as i,
  timeOfDayRangeIntersectsInclusiveBounds as t
};

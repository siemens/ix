import { D as DateTime } from "./date-time-locale-CgHCyd5r-CshVRSUN.js";
function parseTimeOnDay(value, format, baseDay, locale) {
  const trimmed = value?.trim();
  if (!trimmed) {
    return null;
  }
  const parsed = DateTime.fromFormat(trimmed, format, { locale });
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
function getTimePickerConstraintBounds(minTime, maxTime, format, baseDay, locale) {
  let min = parseTimeOnDay(minTime, format, baseDay, locale);
  let max = parseTimeOnDay(maxTime, format, baseDay, locale);
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
function isTimeWithinConstraints(time, minTime, maxTime, format, locale) {
  const { min, max } = getTimePickerConstraintBounds(minTime, maxTime, format, time.startOf("day"), locale);
  return isWithinTimePickerConstraints(time, min, max);
}
function getTimeConstraintsOnDay(constraints, day, minDate, maxDate) {
  if (!minDate?.isValid && !maxDate?.isValid) {
    return constraints;
  }
  if (!day?.isValid) {
    return {};
  }
  return {
    minTime: minDate?.isValid && day.hasSame(minDate, "day") ? constraints.minTime : void 0,
    maxTime: maxDate?.isValid && day.hasSame(maxDate, "day") ? constraints.maxTime : void 0
  };
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
  getTimePickerConstraintBounds as a,
  isWithinTimePickerConstraints as b,
  getTimeConstraintsOnDay as g,
  hasActiveTimePickerConstraints as h,
  isTimeWithinConstraints as i,
  timeOfDayRangeIntersectsInclusiveBounds as t
};

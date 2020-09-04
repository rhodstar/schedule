import Time from './time';

const sumTimes = (t1, t2) => {
  let h = t1.hours + t2.hours;
  let m = t1.minutes + t2.minutes;

  if (m >= 60) {
    m -= 60;
    h += 1;
  }
  if (h >= 24) h -= 24;

  return new Time(h, m);
};

const substractTimes = (t1, t2) => {
  let hours = t1.hours - t2.hours;
  let minutes = t1.minutes - t2.minutes;

  if (hours > 24) {
    hours -= 24;
  }

  if (minutes < 0) {
    minutes = 60 + minutes;
    hours -= 1;
  }

  return new Time(hours, minutes);
};

const oneLessThan = (t1, t2) => {
  if (t1.hours < t2.hours) {
    return true;
  }
  if (t1.hours === t2.hours) {
    if (t1.minutes < t2.minutes) {
      return true;
    }
  }
  return false;
};

const minutesToTime = (min) => {
  if (min < 60) {
    return new Time(0, min);
  }
  const hours = Math.trunc(min / 60);
  const minutes = Math.trunc(min % 60);

  return new Time(hours, minutes);
};

const numToTime = (num, itInMinutes = 15) => {
  const minutes = num * itInMinutes;
  return minutesToTime(minutes);
};

const timeToMinutes = (time) => time.hours * 60 + time.minutes;

const timeTonum = (time, itInMinutes = 15) => Math.trunc(timeToMinutes(time) / itInMinutes);

export {
  sumTimes,
  substractTimes,
  minutesToTime,
  numToTime,
  timeTonum,
  oneLessThan,
};

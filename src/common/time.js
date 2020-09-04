export default class Time {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  print() {
    return `${this.hoursp()} : ${this.minutesp()}`;
  }

  hoursp() {
    return this.hours < 10 ? `0${this.hours}` : this.hours;
  }

  minutesp() {
    return this.minutes < 10 ? `0${this.minutes}` : this.minutes;
  }
}

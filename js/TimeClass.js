class MyTime{

    constructor(hours,minutes) {
        this.hours = hours;
        this.minutes = minutes;
    }

    sum15minutes() {
        let newMinutes = this.minutes + 15 ;
        if( newMinutes >= 60){
            newMinutes -= 60;
            this.hours++;
            if (this.hours >= 24)
                this.hours = 0;
        }
        this.minutes = newMinutes;
    }
}
﻿import moment from 'Moment';

export class CalendarBuilder {

    GetYear(yearNumber) {
        let monthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

        let results = monthNumbers.map(x => this.GetMonth(x, yearNumber))

        let year = { YearName: yearNumber, Months: results }

        return year;
    }

    GetMonth(monthNumber, year) {
        let weekList = []
        this.dateNumber = 1

        while (this.IsValidDate(year, monthNumber, this.dateNumber)) {
            weekList.push(this.GetWeek(monthNumber, year))
        }

        let monthName = new Date(year, monthNumber - 1, 1).toLocaleString('default', { month: 'long' });

        let month = {
            MonthNumber: monthNumber,
            MonthName: monthName,
            Weeks: weekList,
            Year: year
        }

        return month;
    }

    GetWeek(monthNumber, year) {

        let days = [0,0,0,0,0,0,0]
        let indexPositionOfDate = 0;

        for (let dayDateNumber = this.dateNumber; (this.IsValidDate(year, monthNumber, this.dateNumber)) && (indexPositionOfDate < 6); dayDateNumber++) {

            let date = new Date(year, monthNumber - 1, this.dateNumber);

            indexPositionOfDate = (date.getDay() == 0) ? 6 : (date.getDay() - 1);

            days[indexPositionOfDate] = dayDateNumber;

            this.dateNumber++;
        }

        return { Days: days }
    }

    IsValidDate(year, month, day) {
        var m = moment(`${year}-${month}-${day}`, 'YYYY-MM-DD');
        return m.isValid();
    }

}

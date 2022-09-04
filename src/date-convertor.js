class LyDate {

    #Year;
    #Month;
    #Day;
    
    constructor(Date) {
        if(typeof Date !== 'undefined'){
            if(typeof Date === 'string'){
        let ExportDate = Date.split(Date[Date.search(/(?!\d)/)]);
            this.#Year = ExportDate[0];
            this.#Month = ExportDate[1];
            this.#Day = ExportDate[2];

            
            } else if(typeof Date === 'object') {
                if(Array.isArray(Date)){
                    this.#Year = Date[0];
                    this.#Month =Date[1];
                    this.#Day =Date[2];
                } else {
                    this.#Year =Date.Year;
                    this.#Month =Date.Month;
                    this.#Day =Date.Day;
                }
            }
            let date = new Date;
            let today = {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate()
            }
            this.today = this.gregorianToJalali(today);
        } else {
            console.error('Constuctor has no parameter as date')
        }
    }

    jalaliToGregorian(date, option = false) {
        let y, m, d, yearDays, monthDays, year, month = 1,
            day, separator = "/"
        const gregorianMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const jalaliMonthDays = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
        if (typeof (option) !== "boolean") {
            separator = option;
            option = false;
        }
        if (typeof (date) === "object") {
            if (Array.isArray(date)) {
                y = parseInt(date[0]);
                m = parseInt(date[1]);
                d = parseInt(date[2]);
            } else {
                y = parseInt(date.year);
                m = parseInt(date.month);
                d = parseInt(date.day);
            }
        } else {
            let data = date.split(date.charAt(4), 3)
            y = parseInt(data[0]);
            m = parseInt(data[1]);
            d = parseInt(data[2]);
        }

        monthDays = jalaliMonthDays.reduce(function (total, currentValue, i, arr) {
            if (i >= m - 1) {
                arr.splice(1);
                return total
            }
            return total + currentValue

        }, 0)
        yearDays = ((y - 1) * 365) + monthDays + d + 226744;
        day = yearDays % 365
        year = ((yearDays - day) / 365) + 1;


        if ((!(year % 400) && !(year % 100)) || ((year % 100) !== 0 && !(year % 4))) {
            gregorianMonthDays[1] = 29;
        }
        day = gregorianMonthDays.reduce(function (total, currentValue, i, arr) {
            if (currentValue >= total) {
                arr.splice(1);
                return total;
            } else {
                month++
            }
            return total - currentValue
        }, day)

        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        return option ? [parseInt(year), parseInt(month), parseInt(day)] : year + separator + month + separator + day
    }

    gregorianToJalali(date, option = false) {
        let y, m, d, yearDays, monthDays, year, month = 1,
            day, separator = "/"
        const gregorianMonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const jalaliMonthDays = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
        if (typeof (option) !== "boolean") {
            separator = option;
            option = false;
        }
        if (typeof (date) === "object") {
            if (Array.isArray(date)) {
                y = parseInt(date[0]);
                m = parseInt(date[1]);
                d = parseInt(date[2]);
            } else {
                y = parseInt(date.year);
                m = parseInt(date.month);
                d = parseInt(date.day);
            }
        } else {
            let data = date.split(date.charAt(4), 3)
            y = parseInt(data[0]);
            m = parseInt(data[1]);
            d = parseInt(data[2]);
        }

        monthDays = gregorianMonthDays.reduce(function (total, currentValue, i, arr) {
            if (i >= m - 1) {
                arr.splice(1);
                return total
            }
            return total + currentValue

        }, 0)
        yearDays = ((y - 1) * 365) + monthDays + d - 226744;
        day = yearDays % 365
        year = ((yearDays - day) / 365) + 1;


        if ((!(year % 400) && !(year % 100)) || ((year % 100) !== 0 && !(year % 4))) {
            gregorianMonthDays[11] = 30;
        }
        day = jalaliMonthDays.reduce(function (total, currentValue, i, arr) {
            if (currentValue >= total) {
                arr.splice(1);
                return total;
            } else {
                month++
            }
            return total - currentValue
        }, day)

        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        return option ? [parseInt(year), parseInt(month), parseInt(day)] : year + separator + month + separator + day
    }


}
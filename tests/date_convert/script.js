let convert = new dateConvert;
let date;

console.log(convert.today) //output today with jalali conversion


date ="[1400,3,12]: " + convert.jalaliToGregorian([1400,3,12],"-"); //output 2021-06-02
console.log(date)

date ="[1400,3,12]: " + convert.jalaliToGregorian([1400,3,12],"D"); //output 2021D06D02
console.log(date)

date ="[1400,3,12]: " + convert.jalaliToGregorian([1400,3,12]); //output 2021/06/02
console.log(date)

date ="1400/3/12: " + convert.jalaliToGregorian("1400/3/12"); //output 2021/06/02
console.log(date)

date ="1400-03-12: " + convert.jalaliToGregorian("1400-03-12"); //output 2021/06/02
console.log(date)

date ="1400-03-12: " + convert.jalaliToGregorian("1400-03-12",true); //output [2021,6,2]
console.log(date)
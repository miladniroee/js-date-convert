> Version 2.0 is completely incompatible with version 1.0

<br>

--------------
<br><br>

# Date Convert
You can easily convert dates to each other.

## Installation

```html
<script src="src/date-convertor.js"></script>
```

## Usage
make an object:
```javascript
const convert = new dateConvert();
```
methods to use:
- gregorianToJalali()
- jalaliToGregorian()
```javascript
convert.today; //output today date to jalali
convert.gregorianToJalali("2021-06-02"); //output 1400/03/12
convert.gregorianToJalali("1400-03-12"); //output 2021/06/02
```
#### First argument accepts:
- __string__ (you can use whatever as separator e.g. ```"2021,06,02"``` or ```"2021-06-02"``` or ```"2021g06g02"``` or... )
- __array__ e.g.  ```[2021, 6, 2]``` 
- __object__ e.g.  ```{year: 2021, month: 6 , day:2}``` 
```javascript
convert.gregorianToJalali("2021s06s02"); //output 1400/03/12
convert.gregorianToJalali("2021.06.02"); //output 1400/03/12
convert.gregorianToJalali("2021_06_02"); //output 1400/03/12

convert.jalaliToGregorian([2021,6,2]); //output 1400/03/12

const dateObj = {
    year: 1400,
    month: 6,
    day: 2
}
convert.jalaliToGregorian(dateObj); //output 1400/03/12

```


#### [optional] Second argument accepts:
- boolean
- string

if you set second argument to ```true```, it will return array.

if you set second argument to a string, it will use that to separate output date with given string

>default value for second argument is ```"/"```; so it returns string.

```javascript
convert.gregorianToJalali("2021_06_02"); //output 1400/03/12
convert.gregorianToJalali("2021_06_02","-"); //output 1400-03-12
convert.gregorianToJalali("2021_06_02","."); //output 1400.03.12
convert.gregorianToJalali("2021_06_02",true); //output [1400,03,12]
convert.gregorianToJalali("2021_06_02",false); //output 1400/03/12
```

## Minified Version
### Installation
```html
<script src="src/date-convertor.min.js"></script>
```

### usage
function arguments are year, month and day. It will return array of date.
```javascript
// jalaliToGregorianMin(YYYY,MM,DD);
// gregorianToJalaliMin(YYYY,MM,DD);

jalaliToGregorianMin(1400,3,12); //output [2021,6,2]
gregorianToJalaliMin(2021,6,2); //output [1400,3,12]


```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
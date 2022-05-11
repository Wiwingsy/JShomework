// Написать функцию, которая в качестве первого параметра будет принимать
// численное значение, а в качестве второго параметра будет принимать степень, в
// которую надо возвести первый аргумент. По умолчанию, второй аргумент
// единица.

function showPower ( number, power = 1){
    number = number || 0;
    let result = number ** power;
    return result;
}
console.log (showPower(4,));

// Написать функцию, которая будет принимать в качестве входного параметра
// массив любых, целых чисел, и будет возвращать среднее арифметическое
// значение данного массива*.

let array = [1,2,3,4,5,6,7,8,9,10];
function showArithmeticMean (array) {
    let sum = 0;
    for(var i = 0; i < array.length; i++){
        sum += array[i]; }
        return sum / array.length;
    }
console.log (showArithmeticMean(array));

// Напишите стрелочную функцию которая будет выводить переданную строку
// в консоль n раз.

let showString = (string, n) => string.repeat(n);
console.log (showString("строка " , 5));

//или

// let showString = (string, n) => {
//     for (let a = 0; a < n; a++) {
//         console.log (string);
//     }
// }
// console.log(showString("строка ", 6)); //не пойму что не так ?

// Напишите стрелочную функцию, которая будет принимать в качестве параметра
// букву и если она гласная, функция будет возвращать true, в противном случае
// false .

let vowel = ['а', 'о', 'э', 'е', 'и','ы','у','ё','ю','я'];
let showValue = (vowel ,x) => {
    for (let b=0; b < vowel.length; b++ ) {
        if ( vowel[b] === x) {
            return true;
        }
    }
    return false;
}
console.log(showValue(vowel, 'о'));

// Напишите стрелочную функцию, которая будет возвращать true если строка
// является палиндромом и false в противном случае.

let showValue1 = str => {
    for (let c = 0, j = str.length - 1; c < j; c++, j--) {
        if(str[c] != str[j]) {
        return false;
    }
    return true;
}
}
console.log(showValue1('ппааппвв'));

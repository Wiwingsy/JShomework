//1. Написать функцию, которая будет принимать массив чисел, и будет убирать
// повторяющиеся значения из переданного массива, в качестве результата
// возвращать новый массив с уникальными значениями из исходного.


let arr = [ 1,2,3,1,4,5,2,6,7,3,8,9,4];
let filterArr = arr.filter((item, index) => {
    return arr.indexOf(item) === index
});
console.log(filterArr);

//2. Написать функцию которая будет принимать два массива, и будет сравнивать
// их, если они идентичны (элементы совпадают по значению и по индексу) то
// функция возвращает true, в противном случае false.
function arrs(a,b) {
    if( a.length != b.length) {
    console.log('false');
    }
    for(let i = 0; i <= a.length; i++) {
        if (a[i] !== b[i]) {
    console.log('false');
        }
        else {
    console.log('true');
        }
    }
}
arrs( [1,2,3,4],[1,2,3,4,5,7]);
// ответ не в таком виде должен быть,но никак не соображу как его сделать компактнее.

//3. Написать функцию которая будет принимать два массива, и в качестве
// результата будет возвращать только те значения которые есть и в первом и во
// втором массиве.
function showElem (c,d) {
    let res ='';
    for(let j in c) {
        for(let k in d) {
            if( c[j]===d[k]) {
                res += c[j] + ';' ;
            }
        }
    }
    console.log(res);
}
showElem ([1,2,8,3,5,6], [0,9,6,3,6,2]);




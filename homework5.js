// Используя замыкания, написать счётчик, который 
// можно как инкрементировать, так и декрементировать 
// (за направление счётчика будет отвечать второй (необязательный) параметр).

// За приращение счётчика будет отвечать первый параметр.

// За сброс будет отвечать третий (необязательный параметр).

function counter() {
    let closure = 100;
    return function (b, forward = true, reset = true) {
        if (reset) {
            if (forward) {
                closure += b;
            }
            else {
                closure -= b;
            }
        }
        else {
            closure = 0;
        }
        return closure;
    }
}
const closureCounter = counter();

console.log(closureCounter(100,true,true));
console.log(closureCounter(100,true,true));
console.log(closureCounter(100,true,true));
console.log(closureCounter(100,false,true));
console.log(closureCounter(100,false,true));
console.log(closureCounter(100,false,true));
console.log(closureCounter(100,false,false));
// Реализовать функцию которая заменяет в строке str, все вхождения подстроки
// find, на подстроку replace.


let str = "How do I find it? I can't find it in any way.";
let newStr = str.replace(/find/g, "replace");
console.log(newStr);

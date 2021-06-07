//Функция, создающая массив по первому и последнему числу.
let range = function (first, last) {
    let array = [];
    let current = first;
    for (i = 0; i < last; i++) {
        array.push(current);
        current++; 
    }
    return array;
};

//Функция, сворачивающая массив.
let sum = function(array) {
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
};

console.log(sum(range(1, 10)));

//С использованием методов массива и усложнений. 
//Функция, создающая массив в диапазоне между двумя числами.
let rangeNew = (first, last) => {
    let array = [];
    let current = first;
    if (first < last) { 
        for (i = first; i <= last; i++) {
            array.push(current);
            current++; 
        }
    }
    else {
        for (i = last; i <= first; i++) {
            array.push(current);
            current++; 
        }
    }
    return array;
};

console.log(rangeNew(1,3));

//Попытки заставить массив свернуться по методу reduce.
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(rangeNew(1,3).reduce(reducer));

let sumNew = rangeNew(1,3).reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sumNew);

// Не рабочие попытки написать функцию, сворачивающую массив.

let sumNew1 = (array1) => {
    array1.reduce(reducer);
};

console.log(sumNew1(rangeNew(1,3)));
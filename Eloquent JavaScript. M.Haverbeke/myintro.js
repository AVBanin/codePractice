//Функция, создающая массив в диапазоне между двумя числами.
let range = (first, last) => {
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

//Функция, сворачивающая массив.
let sum = function(array) {
    let total = 0;
    for (i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
};

console.log(sum(range(1, 10)));
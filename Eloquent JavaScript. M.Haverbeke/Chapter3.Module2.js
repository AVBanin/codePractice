/*Рекурсия
0 = чётный, 1 = нечётная, чётность любого другого числа N совпадает с N - 2.
Определить рекурсивную функцию isEven, принимающую один параметр (положительное целое число) и возвращающую логическое значение.
Если возможно, модифицировать функцию до работы со всеми целыми числами. */

// * Если не поставить ключевое слово return в рекурсивном случае, функция выдаёт undefined.

function isEven(number) {
  switch (true) {
    case (number === 0):
      return true;
    case (number === 1):
      return false;
    default:
      return isEven(number - 2);
      break;
  }
}

// Через if else
function isEven1(number) {
  if (number === 0) {
    return true;
  } else if (number === 1) {
    return false;
  } else {
    return isEven(number - 2);
  }
}

//test
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(0));
console.log(isEven(1));

console.log('\t');

console.log(isEven1(50));
console.log(isEven1(75));
console.log(isEven1(0));
console.log(isEven1(1));

console.log('\t');

function isEven2(number) {
  if (number < 0) {
    number = -number;
  }
  switch (true) {
    case (number === 0):
      return true;
    case (number === 1):
      return false;
    default:
      return isEven(number - 2);
      break;
  }
}

//test
console.log(isEven2(-50));
console.log(isEven2(-75));
console.log(isEven2(-0));
console.log(isEven2(-1));

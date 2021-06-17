/*Подсчёт букв
Функция countBs, которая принимает строку в качестве единственного аргумента и возвращает число - количество больших букв B.
Функция countChar, которая как countBs, но принимает в качестве второго аргумента ту букву, количество которой в первом аргументе надо подсчитать.
*/
function countBs(string) {
  let counter = 0;
  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] === 'B') {
      counter++;
    }
  }
  return counter;
}

// test
console.log(countBs(''));
console.log(countBs('a'));
console.log(countBs('B'));
console.log(countBs('aBBa'));
console.log(countBs('Basdf jkl;B'));

console.log('\t')

function countChar(string, symbol) {
  let counter = 0;
  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] === symbol) {
      counter++;
    }
  }
  return counter;
}

// test
console.log(countChar(''));
console.log(countChar('a', 'B'));
console.log(countChar('B'));
console.log(countChar('aBBa', 'a'));
console.log(countChar('Basdf jkl;B', 'f'));

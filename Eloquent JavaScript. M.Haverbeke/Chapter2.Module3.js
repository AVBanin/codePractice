// Шахматное поле из символов " " и "#", 8*8 клеток. Затем произвольной ширины. С единичным выводом результата в консоль.
let string = '';
let size = 8;
for (let i = 1; i < (size + 1) * size; i++) {
    if (i % (size + 1) === 0) {
      string += '\n';
    } else if (i % 2 === 0) {
      string += '#';
    } else {
      string += ' ';
    }
  }

console.log(string);

console.log('\t');

//Произвольное поле с возможностью задать первый символ, реализация через switch.
let firstSymbol = '#';
size = 11;
string = firstSymbol;
let oddRowLastSymbol = '';
if (size % 2 === 0) {
  oddRowLastSymbol = ' ';
} else {
  oddRowLastSymbol = '#';
}

for (let i = 2; i < size * (size + 1); i++) {
  switch (true) {
    case (i % (size + 1) === 0):
      string += '\n';
      break;
    case (string[string.length - 1] === '#' || string[(string.length - 2)] + string[(string.length - 1)] === oddRowLastSymbol + '\n'):
      string += ' ';
      break;
    default:
      string += '#';
      break;
  }
}

console.log(string);

//Чтобы легче создавать такие алгоритмы, можно представлять поле набором клеточек с порядковыми номерами ячеек и символов переноса строки, равными индексу. В этом случае становится понятно, почему первый алгоритм не подходит для поля с нечётным количеством клеточек: ячейки с нечётным индексом будут располагаться одна под другой.

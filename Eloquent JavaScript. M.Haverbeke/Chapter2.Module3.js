// Шахматное поле из символов " " и "#", 8*8 клеток. Затем произвольной ширины. С единичным выводом результата в консоль.
let string = '';
let size = 8;
for (let i = 1; i < (size + 1) * size; i++) {
    if (i !== 0 && i % (size + 1) === 0) {
      string += '\n';
    } else if (i % 2 === 0) {
      string += '#';
    } else {
      string += ' ';
    }
}

console.log(string);

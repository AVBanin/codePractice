// цикл, 7 вызовов console.log, вывод прямоугольного треугольника со стороной 7.
let print = '#';
for (i = 0; i < 7; i++) {
  console.log(print);
  print += '#';
}

console.log("\t");

print = '#';
do {
  console.log(print);
  print += '#';
} while (print.length !== 8);

console.log("\t");

print = '#';
while (print.length <= 7) {
  console.log(print);
  print += '#';
}

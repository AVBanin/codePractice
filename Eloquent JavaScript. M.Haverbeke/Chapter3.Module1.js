/*Минимум
Функция min, которая принимает два аргумента и возвращает их минимум.*/
let min = (num1, num2) => {
  if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
}

//test
console.log(min(-1, 1));
console.log(min(101, 1));
console.log(min(1, 1));

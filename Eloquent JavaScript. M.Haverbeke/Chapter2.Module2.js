// вывод в консоль числа от 1 до 100, если число кратно 3, то "Fizz", если кратно 5 (но не 3) "Buzz";
// дальше - изменить программу так, чтобы для кратных 3 и 5 - "FizzBuzz".
let i = 1;
while (i <= 100) {
  if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
  i++;
}

console.log("\t\t");

i = 1;
while (i <= 100) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
  i++;
}

console.log("\t\t");

//с помощью switch
i = 1;
while (i <= 100) {
  switch (true) {
    case (i % 15 === 0):
      console.log('FizzBuzz');
      break;
    case (i % 5 === 0):
      console.log('Buzz');
      break;
    case (i % 3 === 0):
      console.log('Fizz');
      break;
    default:
      console.log(i);
      break;
  }

  i++;
}

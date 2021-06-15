// вывод в консоль числа от 1 до 100, если число кратно 3, то "Fizz", если кратно 5 (но не 3) "Buzz";
// дальше - изменить программу так, чтобы для кратных 3 и 5 - "FizzBuzz".
let i = 1;
let array1 = [];
while (i <= 100) {
  if (i % 3 === 0) {
    console.log('Fizz');
    array1.push('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
    array1.push('Buzz');
  } else {
    console.log(i);
    array1.push(i);
  }
  i++;
}

console.log("\t");

i = 1;
let array2 = [];
while (i <= 100) {
  if (i % 15 === 0) {
    console.log('FizzBuzz');
    array2.push('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
    array2.push('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
    array2.push('Buzz');
  } else {
    console.log(i);
    array2.push(i);
  }
  i++;
}

console.log("\t");

//с помощью switch
let array3 = [];
i = 1;
while (i <= 100) {
  switch (true) {
    case (i % 15 === 0):
      console.log('FizzBuzz');
      array3.push('FizzBuzz');
      break;
    case (i % 5 === 0):
      console.log('Buzz');
      array3.push('Buzz');
      break;
    case (i % 3 === 0):
      console.log('Fizz');
      array3.push('Fizz');
      break;
    default:
      console.log(i);
      array3.push(i);
      break;
  }

  i++;
}

console.log("\t");

//kind of test
let j = 0;
while (j <= 99) {
  console.log(`${array1[j]}; ${array2[j]} ${array3[j]} ${(array3[j] == array2[j])}`);
  j++;
}

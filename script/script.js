//Task 1

/*
function min(a, b) {
  return Math.min(a, b);
}

console.log(min(5, 10)); // 5
console.log(min(10, 5)); // 5
*/

//Task 2

/*
function printEvenNumbers(a, b) {
  if (a > b) {
    for (let i = a; i >= b; i--) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  } else {
    for (let i = b; i >= a; i--) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
}

printEvenNumbers(10, 5); // 10, 8, 6
printEvenNumbers(5, 10); // 10, 8, 6
*/

//Task 3

/*
function power(base, exponent = 2) {
  return base ** exponent;
}

console.log(power(2, 3));
console.log(power(5));
*/

//Task 4

/*
function sumNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumNumbers(5));
console.log(sumNumbers(10));
*/

//Task 5

/*
function sumEvenOddNumbers(n, m) {
  let sumEven = 0;
  let sumOdd = 0;
  for (let i = n; i <= m; i++) {
    if (i % 2 === 0) {
      sumEven += i;
    } else {
      sumOdd += i;
    }
  }
  console.log(`Сумма четных: ${sumEven}`);
  console.log(`Сумма нечетных: ${sumOdd}`);
}

sumEvenOddNumbers(1, 5);
sumEvenOddNumbers(5, 10);
*/

//Task 6

/*
function findLongestString(strings) {
  if (!strings.length) return null;
  let longestString = strings[0];
  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > longestString.length) {
      longestString = strings[i];
    }
  }
  return longestString;
}

const strings = ["one", "two", "three", "very long string"];
console.log(findLongestString(strings));

const emptyStrings = [];
console.log(findLongestString(emptyStrings)); 
*/
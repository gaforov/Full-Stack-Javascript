// Print till given number
function printTillNumber(number) {
    for (let i = 1; i <= number; i++) {
        console.log(i);  
    }
}

printTillNumber(5)

// identify if given number is even
function numberIsEven(number) {
    if (number % 2 == 0) {
        console.log(number + ' is even');
    } else {
        console.log(number + ' is not even');
    }
}

numberIsEven(10)

// Print all even numbers till given number:
function printAllEvenNumbers(number) {
        for (let i = 0; i <= number; i+=2) {
            if (i % 2 == 0){
                console.log(i);
            }
        }
}

printAllEvenNumbers(15)

/* Problem 1: Multiples of 3 and 5
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. 
Find the sum of all the multiples of 3 or 5 below 1000. */
function multiplesOf3and5(number) {
    let sum = 0;
    for(let i=0; i<number; i++) {
      if(i % 3 == 0 || i % 5 == 0){
        sum += i;
      }
    }
    return sum;
  }
  
  console.log(multiplesOf3and5(1000));



  console.log('---Fibonacci Sum of Even Numbers-----');
  /* Problem 2: Even Fibonacci Numbers
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed n, find the sum of the even-valued terms. */
function fiboEvenNum(n) {
    let a = 1;
    let b = 2;
    let sum = b; // why not zero? b/c counting starts from 3 (a+b == 1+2). '2' which is even should be included. we can assign 'b' or '2' as lowest fibo even number. 

    while (b <= n) {
        let temp = a;
        a = b;
        b = temp + b;
        console.log(b); // if we want to see all fibo numbers

        if (b % 2 === 0) {
            sum += b;
        }
    }

    return sum;
}

console.log('sum of even numbers = ' + fiboEvenNum(40));
// 1. Fibonacci sequence, 2. Not exceed n (but included), 3. Return sum of even numbers only

console.log('---Fibonacci Sum of Odd Numbers-----');
function fiboOddNum(n) {
    let a = 1;
    let b = 2;
    let sum = a; // why not zero? b/c counting starts from 3 (a+b == 1+2). '1' which is odd should be included. we can assign 'a' or '1' as lowest fibo odd number. 

    while (b <= n) {
        let temp = a;
        a = b;
        b = temp + b;
        console.log(b); // if we want to see all fibo numbers

        if (b % 2 != 0) {
            sum += b;
        }
    }

    return sum;
}

console.log('sum of odd numbers = ' + fiboOddNum(40));
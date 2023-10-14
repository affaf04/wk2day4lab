// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time
/*function grading(grade) {
    if (grade >= 80){
        console.log ('You did a good job')
    } else if (grade>=70){
         console.log ('Keep trying')
    } else if (grade>= 60){
        console.log ("ehhhh")
    } else if (grade >= 55){
        console.log ('Not to good')
    } else {
        console.log ("Bad grade you'll Get Em Next Time")
    }
}*/


// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

/*function multiplesOfTen(){
    for (let i=10; i<=100; i += 10 )
    console.log(i)
}*/


// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

/*function changeInQuarters(billAmount, price){
    let change = billAmount- price;
    let quarters = change / 0.25
    console.log(quarters)

}
changeInQuarters(10,4)*/



//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  Return in as large denominations as possible. Parameters should be amount paind and amount cost

function change(amountPaid, amountCost) {
    let denominations = [100, 50, 10, 20, 5, 2, 1];
    let change = amountPaid - amountCost;
    console.log(change);
    denominations.forEach(function (denomination) {  
        let bills = 0;
        if (change >= denomination) {
            while (change >= denomination) {
                change -= denomination;
                bills++;
            }
            console.log(denomination, bills);
        }
    });
}

change(75, 15);







// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

/*let x = 1;
while (x <= 100) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("FizzBuzz");
    } else if (x % 3 === 0) {
        console.log("Fizz");
    } else if (x % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(x);
    }
    x++;
}*/
   

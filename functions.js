function myfunc()
{ 
    console.log("my new function");
}
myfunc();

function Sum(x,y){ return x+y;}
console.log(Sum(3,4));
let numbers = [1, 2, 3, 4, 5];

// Using forEach to log each element
numbers.forEach(function(number) {
    console.log(number);
});

// Using arrow function syntax (ES6+)
numbers.forEach(number => console.log(number));


let arr= [1,2,3,4,5,6,7,8,9];

arr.forEach((val,idx,arr)=>{console.log(idx);})

let users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

users.forEach((val,idx,users) => {
    // console.log(`${val.name} is ${val.age} years old`);
    // console.log(val);
    // console.log(idx);
    console.log(idx);
});

let nums = [44,45,46];
let newarra1= nums.map((val)=>{return val});//map is used to create a new array.
console.log(newarra1);

nums.forEach((nums)=>{console.log(nums*nums);});// using arrow functions with foreach statement.

function calcsquarefunction (nums) { console.log (nums*nums);}

nums.forEach(calcsquarefunction);

let arr2= [100,300,200,400,25];// filter is also used for array only it reduces the if condition and filters it.
let evenarray = arr2.filter((arr2)=>{
    return arr2 % 2 === 0 ;} )

console.log(evenarray);

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

let nameCount = names.reduce((accumulator, currentValue) => {
    if (currentValue in accumulator) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {});

console.log(nameCount); // { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1 }

let numbers1 = [1, 2, 3, 4, 5];

let sum = numbers1.reduce((a, b) => {
    return a+b;
}, 0);

console.log(sum); // 15


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

nums.forEach((nums)=>{console.log(nums*nums);});// using arrow functions with foreach statement

function calcsquarefunction (nums) { console.log (nums*nums);}

nums.forEach(calcsquarefunction);

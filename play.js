// const { Console } = require("console");

const { TIMEOUT } = require("dns");

// let name = ' wajeeh';
// let  age = 21;
// let hobbiees=  true;
// age = 32;
// const summarizeUser = (username,userage,userhobbiees) =>
// {
//     return ('Name is ' + username +  ' age is ' +  userage  + ' and the user has hobbiess:' +  userhobbiees); 
// }

// console.log(summarizeUser(name,age,hobbiees));


// let mult = (a,b) => {
//     prod = a*b;
//     return ('the product of two numbers is ' + prod) ;
// };

// mult = (a,b) => a *b
// mult(1,5)
// console.log(mult(2,4));
// console.log(mult(1,5));

// const addrandom=() => 1+2;

// console.log(addrandom());

const person = {
name : 'Wajeeh',
age: 25,
greet(){
    console.log('Hi,I am ' + this.name );

}

};
// hobbiees.push('Programming');
const hobbiees = ['Sports','Cooking'] 
// hobbiees.push('Programming');
person.greet();
// console.log(hobbiees);
// console.log(hobbiees.map( hobby=> 'hobby:'+hobby) );

// const CoppiedArray  = hobbiees.slice();// for using the first half of the items at index
// console.log(CoppiedArray);
const CoppiedArray1= [...hobbiees];

// hobbiees.push('Programming');

console.log(CoppiedArray1);

const CoppiedPerson = {...person}//Spread Operator is used to copy the elemensts in new array

console.log(CoppiedPerson);

const toArray = (arr1,arr2,arr3) =>{return [arr1,arr2,arr3];};

console.log(toArray('wajeeh','farhan','aimon'));//rest operator is used to pass in the arguments the reqired elements
// // const name1 = 'Farhan Hammidi';
// const printName =   ({name}) > { console.log(name);}

// printName(name1;

setTimeout(()=>{console.log('Timer is Done');},8000);// function that will execute after  8 seconds

const fetchdata = callback => {setTimeout(()=>{callback('Done');},1500)}; 

setTimeout(()=>{console.log('Timer is Done');fetchdata(text=>{console.log(text);})},2000);// function that will execute after  8 seconds

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Done!');
      }, 1500);
    });
    return promise;
  };
  
  setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
      .then(text => {
        console.log(text);
        return fetchData();
      })
      .then(text2 => {
        console.log(text2);
      });
  }, 2000);
  
  console.log('Hello!');
  console.log('Hi!');
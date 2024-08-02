{
    let a = 10;
    console.log(a);
}
{
    let a = 11 ;
    console.log(a);
}

let Marks = [300,225,275,335,555];
let discount = 0;
let final = 0;
let i = 0;
for (val of Marks){
    console.log("value="+val);
    final=val/10;
    Marks[i] = Marks[i] - final;
    console.log("final amount is"+Marks[i]);
    i++;

}

// let Students = [100,150,200,250,300];

// for (let val of Students){console.log('the students numbers are = ${val}'   );}

let avg= 300/20;
console.log('marks of the class are = ${avg}');
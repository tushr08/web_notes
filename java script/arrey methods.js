// methods of Array

// push - push the element at the last
// let arr1 = [1,2,3,4,5,6]
// arr1.push(100)
// console.log(arr1);

// pop - remove the element form the last
// let arr2 = [1,2,3,4,5,6]
// let removeEle = arr2.pop();
// console.log(arr2);
// console.log(removeEle);

// shift - remove the element from the first.
// let arr3 = [1,2,3,4,5,6]
// console.log(arr.shift());

// unshift - add the element at the begning 
// let arr4 = [1,2,3,4,5,6]
// arr4.unshift(0,1000,2000)
// console.log(arr4);

// index of - it will return the index if the element
// let arr5 = [1,2,3,4,5,6]
// console.log(arr5.indexof(1,1));

// include - it check the boolean = true / false
// let arr6 = [ 'java','mern','python','harsh']
// let check1 = arr6.include("harsh")
// console.log(check1);

// splice - we can delete the element and in space of deleting element and changing adding
// splice - (start index , deletcount, item1, item2, item3)
// let arr8 = [1,2,1,4,5,10,6,7,8,9]
// let splice = arr8.splice(2,4,1000,2000,3000)
// console.log(splice);
// console.log(arr8);

// slice - we can extract an subarray from the array
// syntax - (start index, end index) - start end [include]
// find
// findindex
// some
// every


// iteration method

// forEach - iterate on each element , executes a call function (value,index,array)
// for of methods :- it will return only values => array, string,maps
// for in methods :- it will return only keys/index => array and object

// let arr9 = [1,2,1,4]
// for of
// for in
// map
// filter
// reduce

// Methods of iterations 
// forEach :- iterate on each element , executes a call function (values, index , array)
// for of methods :- it will return only values. -> array , String , maps
// for in methods :- it will return only key/index.-> array and object 


let arr9 = [1,2,1,4,5,10,6,7,8,9]
arr9.forEach((values,index,array)=>{
   console.log(values);
   console.log(index);
   console.log(array);
})


// for of in array 
let arr10 = [1,2,1,4,5,10,6,7,8,9]
for(let values of arr10){
    console.log(values);
}

// for of in String 
let string1  = 'TUSHAR';
for(let value of string1){
    console.log(value);
}

// for of methods in maps
let map1 = new Map([["name","harsh"],["id",1],["address","musakhedi"]])
for(let val of map1){
    console.log(val);
}



// for in in array
let arr11 = [1,2,1,4,5,10,6,7,8,9]
for(let index in arr11){
    console.log(index + " "+ arr11[index]);
}


// for in in object
let person = {
    name:"harshita",
    id:1,
    address:"indore"
}
for(let key in person){
    console.log(key);
    console.log(person[key]);
}


// filter 
let arr13 = [1,2,1,4,5,10,6,7,8,9]
let arr_13 = arr13.filter((value)=>{
    return value%2==0
})
console.log(arr_13);

// reduce - it will return

let arr14 = [1,2,1,4,5,10,6,7,8,9]
let temp = arr14.reduce((total,value)=>{
    return total+value;
},0)
console.log(temp);

// find :- based on the condition given the result
// findindex :- based on the condition given result , result index
// some
// every

let arr15 = [1,2,1,4,5,10,6,7,8,9]
let returnElement = arr15.find((value)=>{
    return value>4;
})
console.log(returnElement);

// findindex

let arr16 = [1,2,1,4,5,10,6,7,8,9]
let returnElement1 = arr16.findIndex((value)=>{
    return value>7;
})
console.log(returnElement1);

//some

let arr17 = [1,2,1,4,5,10,6,7,8,9]
let returnElement2 = arr17.some((value)=>{
    return value%2==0;
})
console.log(returnElement2);

// every

let arr18 = [1,2,1,4,5,10,6,7,8,9]
let returnElement3 = arr18.every((value)=>{
    return value%2==0;
})
console.log(returnElement3);


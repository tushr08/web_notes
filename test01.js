
// filter 
let arr1 = [5,12,7,20,9,14]
let arr2 = arr1.filter((value)=>{
    return value%2==0
})
console.log(arr2);

// reduce

let arr3 = [10,20,30,40]
let arr4 = arr3.reduce((total,value)=>{
    return total+value;
},0)
console.log(arr4);

// pattern

let num = 1;
let rows = 5;
for(let i=1;i<=rows;i++){
    let line= ''
    for(let j=1;j<=i;j++){
        line = line+num + " "
        num++;
    }
    console.log(line);
}
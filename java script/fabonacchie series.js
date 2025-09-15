fabonacchie series

let num1 = 10;
let a = 0, b = 1;

for(let i=1;i<=num1;i++){
    console.log(a);
    let temp = a+b;
    a = b;
    b = temp;
}
// ==========================================================================

let num = 12345;
let strN = num.toString();

let sum = 0;
for(let i = 0;i<strN.length;i++){
    sum = sum + parseInt(strN[i])
}console.log(sum);

// =============================================================================

let star = 0;
for(let i=0;i<5;i++){
    star++;
    let line=''
    for(let j=0;j<star;j++){
        line = line+"*"
    }
    console.log(line);
}

// ====================================================================================

let star = 5;
for(let i=5;i>5;i--){
    star--;
    let line=''
    for(let j=5;j>star;j--){
        line = line-"*"
    }
    console.log(line);
}

// =======================================================================================

let star = 6;
let space = -1;

for (let i=0;i<5;i++){
    star--;
    space++;
    let line = ''
    for(let k=0;k<space;k++){
        line = line+""
    }
    for(let j=0;j<star;j++){
        line = line + "*"
    }
    console.log(line);
}


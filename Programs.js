// Print even numbers from 20 to 1
for (let c=20;c>=1;c-=2)
console.log(c) 

let data = [10,20,30,40,50,60,70]

for(let i=0;i<data.length;i++){
    console.log(data[i]);
}

let username = "sudhakar"
console.log(username.length);
for(let i=0;i<username.length;i++){
    console.log(username[i]);
}

let den = [2000,500,200,100,50,20,10,5,2,1];
let amount = 9999
//let r = parseInt (amount / den[0]);
//console.log(amount % den[0]);
//amount = amount % den[0];
//console.log(amount);

for(let d = 0;d<den.length;d++){
    let res = parseInt (amount/den[d]);
    console.log(res+"*"+den[d]);
    amount = amount % den[d];
}

// let numberof2k = parseInt(amount/den[0])
// console.log(numberof2k+"*"+den[0])
// amount = amount % den[0];

// let numberof5h = parseInt(amount/den[1])
// console.log(numberof5h+"*"+den[1])
// amount = amount % den[1];

// let numberof2h = parseInt(amount/den[2])
// console.log(numberof2h+"*"+den[2])
// amount = amount % den[2];
// let numberof1h = parseInt(amount/den[3])
// console.log(numberof1h+"*"+den[3])
// amount = amount % den[3];
// let numberof50 = parseInt(amount/den[4])
// console.log(numberof50+"*"+den[4])
// amount = amount % den[4];
// let numberof20 = parseInt(amount/den[5])
// console.log(numberof20+"*"+den[5])
// amount = amount % den[5];
// let numberof10 = parseInt(amount/den[6])
// console.log(numberof10+"*"+den[6])
// amount = amount % den[6];
// let numberof5 = parseInt(amount/den[7])
// console.log(numberof5+"*"+den[7])
// amount = amount % den[7];
// let numberof2 = parseInt(amount/den[8])
// console.log(numberof2+"*"+den[8])
// amount = amount % den[8];
// let numberof1 = parseInt(amount/den[9])
// console.log(numberof1+"*"+den[9])
// amount = amount % den[9];




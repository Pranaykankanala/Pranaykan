//Write a function to return odd numbers between a range


function getOddNumberRange(rStart, rEnd){
    
    let oddNumbers=[];
    for(let r = rStart;r<=rEnd;r++){
        if (r%2==1){
            oddNumbers.push(r);
            //console.log(r);
        }
    }
    return oddNumbers;
}
let res = getOddNumberRange(10,50);
console.log(res);
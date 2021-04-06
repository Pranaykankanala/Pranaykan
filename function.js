function findodd(n){
    if (n%2==1){
        console.log(n+" is an odd number");
    }else{
        console.log(n+" is even number");
    }
}

findodd(5)
findodd(15)
findodd(30)

//find factorial functions
findFactorial(5)
findFactorial(20)
function findFactorial(n){
    let res =1;
    for(let i=1;i<=n;i++){
        res= res*i
    }
    console.log(res);
}
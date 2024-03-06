let n =10;
let a=0,b=1;
console.log(a + ' ' +b+' ');
for (let i = 0; i < (n - 2); i++){
    let sum = a+b;
    console.log(sum + ' ');
    a=b;
    b=sum;
}
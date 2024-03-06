let  num = 12345;

while (num !== 0) {
    let x = num % 10;
    console.log(x);
    num = Math.floor(num / 10);
}
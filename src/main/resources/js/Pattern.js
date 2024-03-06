let n = 6;

for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
        process.stdout.write("+");
    }
    for (let k = n; k >= i; k--) {
        process.stdout.write("-");
    }
    console.log();
}
let a = [1, 5, 2, 6, 3];
let b = new Array(a.length);
let j = 0;

for (let i = a.length; i > 0; i--) {
    b[j++] = a[i - 1];
}

for (let i = 0; i < b.length; i++) {
    process.stdout.write(b[i] + " ");
}
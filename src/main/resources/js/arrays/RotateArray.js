let a = [1, 2, 3, 4, 5, 6, 7];
let x = 2;
let j = 0;
let n = a.length - x;
let b = new Array(a.length);

for (let i = 0; i < a.length; i++) {
    if (i < x) {
        b[n++] = a[i];
    }
    if (i >= x) {
        b[j++] = a[i];
    }
}

for (let i = 0; i < b.length; i++) {
    process.stdout.write(b[i] + " ");
}
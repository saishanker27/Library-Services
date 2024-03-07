let a = [1, 0, 2, 3, 5, 0, 6];
let n = a.length;
let cnt = 0;
let b = new Array(n);

// For non-zero elements
for (let i = 0; i < n; i++) {
    if (a[i] !== 0) {
        b[cnt++] = a[i];
    }
}

// For zeros
while (cnt < n) {
    b[cnt++] = 1;
}

// Print the modified array
for (let i = 0; i < b.length; i++) {
    console.log(b[i] + " ");
}
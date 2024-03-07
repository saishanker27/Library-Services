let a = [1, 5, 2, 6, 3];
let l = a[0], s = a[0];

for (let i = 0; i < a.length; i++) {
    if (l <= a[i]) {
        l = a[i];
    }
    if (s >= a[i]) {
        s = a[i];
    }
}

console.log("Largest: " + l);
console.log("Smallest: " + s);
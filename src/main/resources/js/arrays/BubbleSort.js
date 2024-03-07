let a = [2, 45, 88, 11, 15];
let temp;

for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] > a[j]) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}
for (let i = 0; i < a.length; i++) {
    process.stdout.write(a[i] + " ");
}
function linearSearch(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}
let a = [1, 3, 6, 8, 10, 50];
let element = 10;

console.log(`${element} is found at index: ${linearSearch(a, element)}`);
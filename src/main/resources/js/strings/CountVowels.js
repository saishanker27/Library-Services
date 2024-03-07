function countVowels(str) {
    let count = 0;
    const st = str.toLowerCase();

    for (let i = 0; i < st.length; i++) {
        if (st[i] === 'a' || st[i] === 'e' || st[i] === 'i' || st[i] === 'o' || st[i] === 'u') {
            count++;
        }
    }
    return count;
}
// Example usage
const inputString = "Hello World";
console.log(countVowels(inputString)); // Output: 3
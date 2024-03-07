function reverseWords(sentence) {
    const words = sentence.split(" ");

    const reversedSentence = words.map(word => {
        const reversedWord = word.split('').reverse().join('');
        return reversedWord;
    });

    return reversedSentence.join(" ");
}

// Example usage
const inputSentence = "Hello World";
console.log(reverseWords(inputSentence)); // Output: olleH dlroW
function isRotation(str1, str2) {
    if (!str1 || !str2 || str1.length !== str2.length || str1.length === 0) {
        return false;
    }

    const concatenated = str1 + str1;
    return concatenated.includes(str2);
}

// Example usage
const string1 = "waterbottle";
const string2 = "erbottlewat";

console.log(isRotation(string1, string2)); // Output: true
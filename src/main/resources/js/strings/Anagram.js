function areAnagrams(s1, s2) {
    if (!s1 || !s2) {
        return false;
    }

    // Remove spaces and convert to lowercase for case-insensitive comparison
    s1 = s1.replace(/\s/g, "").toLowerCase();
    s2 = s2.replace(/\s/g, "").toLowerCase();

    // Check if the lengths are the same
    if (s1.length !== s2.length) {
        return false;
    }

    // Convert strings to arrays, sort them, and join them back
    const sortedString1 = s1.split('').sort().join('');
    const sortedString2 = s2.split('').sort().join('');

    // Compare sorted strings
    return sortedString1 === sortedString2;
}

// Example usage
const string1 = "Listen";
const string2 = "Silent";

console.log(areAnagrams(string1, string2)); // Output: true
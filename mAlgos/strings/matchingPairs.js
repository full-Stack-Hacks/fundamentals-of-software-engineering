
// Matching Pairs
// Given two strings s and t of length N, find the maximum number of possible matching pairs in strings s and t after swapping exactly two characters within s.
// A swap is switching s[i] and s[j], where s[i] and s[j] denotes the character that is present at the ith and jth index of s, respectively. The matching pairs of the two strings are defined as the number of indices for which s[i] and t[i] are equal.
// Note: This means you must swap two characters at different indices.
// Signature
// int matchingPairs(String s, String t)
// Input
// s and t are strings of length N
// N is between 2 and 1,000,000
// Output
// Return an integer denoting the maximum number of matching pairs

function matchingPairs(s, t) {
    // Initialize the count of matching pairs
    let matches = 0;

    // Initialize arrays to store the indices where s and t do not match
    let sMismatches = [];
    let tMismatches = [];

    // Iterate over each character in the strings
    for (let i = 0; i < s.length; i++) {
        // If the characters at index i in s and t are the same, increment the count of matching pairs
        if (s[i] === t[i]) {
            matches++;
        } else {
            // If the characters are not the same, store the indices where they do not match
            sMismatches.push(s[i]);
            tMismatches.push(t[i]);
        }
    }

    // If there are no mismatches, return the count of matching pairs minus 2 (because we have to swap two characters)
    if (sMismatches.length === 0) {
        return matches - 2;
    }

    // Iterate over the mismatches
    for (let i = 0; i < sMismatches.length; i++) {
        // If a character in s that doesn't match t can be swapped with another character in s to match t, return the count of matching pairs plus 2
        if (sMismatches.includes(tMismatches[i]) && tMismatches.includes(sMismatches[i])) {
            return matches + 2;
        }
    }

    // If no such swap is possible, return the count of matching pairs plus 1 (because we can still swap two characters in s to match one character in t)
    return matches + 1;
}

console.log(matchingPairs("abcd", "adcb")); // Output: 4

function longestSubstring(s) {
    let start = 0, maxLength = 0;
    let set = new Set();

    for(let i = 0; i < s.length; i++) {
        // If the set already has the character
        if(set.has(s[i])) {
            // Delete the character from the set and move the start position
            while(set.has(s[i])) {
                set.delete(s[start]);
                start++;
            }
        }
        // Add the character to the set
        set.add(s[i]);
        // Update the maxLength
        maxLength = Math.max(maxLength, i - start + 1);
    }

    return maxLength;
}

const str = 'abcabcd';
const result = longestSubstring(str);
console.log(result); // Output: 4
// Sure, here's a prompt for this question as if it were asked in an interview:

// Problem Statement:

// Given a string s, find the length of the longest substring without repeating characters.

// Write a function longestSubstring(s) that takes a string s as input and returns the length of the longest substring that contains no repeating characters.

// For example, given the string s = "abcabcd", your function should return 4, because the longest substring without repeating characters is "abcd".


function longestSubstring(str) {
    let max = 0
    let start = 0
    let current
    const set = new Set()

    for(let i = 0; i < str.length; i++) {
        current = str[i]
        if(!set.has(current)) {
            set.add(current)
            max = Math.max(set.size, max)
        } else {
            while(set.has(current)) {
                set.delete(str[start])
                start++
            }
            set.add(current)
        }
    }
    return max
}



// function longestSubstring(s) {
//     let start = 0, maxLength = 0;
//     let set = new Set();

//     for(let i = 0; i < s.length; i++) {
//         // If the set already has the character
//         if(set.has(s[i])) {
//             // Delete the character from the set and move the start position
//             while(set.has(s[i])) {
//                 set.delete(s[start]);
//                 start++;
//             }
//         }
//         // Add the character to the set
//         set.add(s[i]);
//         // Update the maxLength
//         maxLength = Math.max(maxLength, set.size);
//     }

//     return maxLength;
// }

const str = 'abcabcd';
const result = longestSubstring(str);
console.log(result); // Output: 4
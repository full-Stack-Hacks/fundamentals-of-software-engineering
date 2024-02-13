// You are given two strings s and t. You can select any substring of string s and rearrange the characters of the selected substring. Determine the minimum length of the substring of s such that string t is a substring of the selected substring.
// Signature
// int minLengthSubstring(String s, String t)
// Input
// s and t are non-empty strings that contain less than 1,000,000 characters each
// Output
// Return the minimum length of the substring of s. If it is not possible, return -1
// Example
// s = "dcbefebce"
// t = "fd"
// output = 5
// Explanation:
// Substring "dcbef" can be rearranged to "cfdeb", "cefdb", and so on. String t is a substring of "cfdeb". Thus, the minimum length required is 5.

const str = 'abcdef'
const target = 'fb'

function minimumSubstring(str, target) {
    const obj = {}
    let left = 0, right = 0

    for(let i = 0; i < target.length; i++) {
        const current = target[i]
        obj[current] ? obj[current]++ : obj[current] = 1
    }

    while(right < str.length) {
        console.log(str[right])
        right++
    }

}
minimumSubstring(str, target)

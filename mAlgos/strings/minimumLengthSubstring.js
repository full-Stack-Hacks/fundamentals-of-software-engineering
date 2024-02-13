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
    // Create a frequency map for characters in target
    let targetMap = {};
    for (let char of target) {
        if (targetMap[char]) {
            targetMap[char]++;
        } else {
            targetMap[char] = 1;
        }
    }

    // Initialize pointers and variables to track the minimum window
    let left = 0, right = 0, minLen = Infinity, counter = target.length;

    while (right < str.length) {
        // If the current character is in target, decrease the counter
        if (targetMap[str[right]] > 0) {
            counter--;
        }
        // Always decrease the character count in the map
        if (targetMap[str[right]] !== undefined) {
            targetMap[str[right]]--;
        }
        right++;

        // When all characters in target are within the window
        while (counter === 0) {
            // Update the minimum window size
            if (right - left < minLen) {
                minLen = right - left;
            }
            // Try to minimize the window by moving the left pointer
            // If the current character is in target, increase the counter
            if (targetMap[str[left]] === 0) {
                counter++;
            }
            // Always increase the character count in the map
            if (targetMap[str[left]] !== undefined) {
                targetMap[str[left]]++;
            }
            left++;
        }
    }

    // If no window was found, return -1
    if (minLen === Infinity) {
        return -1;
    }

    // Return the minimum window size
    return minLen;
}
minimumSubstring(str, target)

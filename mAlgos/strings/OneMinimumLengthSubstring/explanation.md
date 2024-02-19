# Minimum Substring Algorithm

## Problem Statement

Given a string and a set of characters, find the smallest substring that contains all the characters in the set. For example, given the string "abcbefecea" and the set of characters "abc", the smallest substring that contains all the characters in the set is "abc", which has a length of 3.

## Techniques Used

1. **Sliding Window**: This technique involves maintaining a range of elements (a 'window') from the array/string and sliding it based on certain conditions. In this case, the window is defined by the `left` and `right` pointers.

2. **Hashing**: This technique involves storing data in a way that allows it to be retrieved very quickly. In this case, a hash map (`obj`) is used to store the count of each character in the target string.

## Algorithm Explanation

1. The `makeObj` function creates a hash map (`obj`) where the keys are the characters in the target string and the values are their counts.

2. The `minSub` function then initializes two pointers (`left` and `right`) at the start of the string, a `min` variable to keep track of the minimum length of the substring, and a `count` variable set to the length of the target string.

3. The function enters a loop that continues until the `right` pointer reaches the end of the string. In each iteration of the loop:

   - If the character at the `right` pointer is in the target string and its count in `obj` is more than 0, `count` is decremented and the count of the character in `obj` is decremented.

   - The `right` pointer is then moved one step to the right.

   - If `count` is 0 (meaning a valid substring has been found), the function enters a second loop that continues until `count` is more than 0. In each iteration of this loop:

     - If the length of the current substring (from `left` to `right`) is less than `min`, `min` is updated to this length.

     - If the character at the `left` pointer is in the target string and its count in `obj` is 0, `count` is incremented.

     - The count of the character at the `left` pointer in `obj` is incremented and the `left` pointer is moved one step to the right.

4. If `min` is still Infinity at the end of the function (meaning no valid substring was found), the function returns -1. Otherwise, it returns `min`, which is the length of the shortest substring that contains all the characters in the target string.


# Minimum Substring Problem

## Problem Statement

You're a detective with a coded message (a string) and a clue (a set of characters). Your task is to find the shortest segment of the message that contains all the letters in the clue.

## Solution Explanation

1. **Creating a Map (Hashing)**: Make a checklist of the clue letters. Each letter is a key in the map, and its value is how many times it appears in the clue.

2. **Sliding Window**: Start with a window that only includes the first letter of the message. This window is defined by two pointers, `left` and `right`.

3. **Expanding the Window**: Move the `right` pointer to the right, expanding the window. Each time you move the `right` pointer, check if the current letter is in your checklist. If it is, mark it off and decrease your overall count of letters you need to find.

4. **Contracting the Window**: Once you've found all the letters (your count is 0), start moving the `left` pointer to the right, contracting the window. Each time you move the `left` pointer, check if the current letter is in your checklist. If it is, add it back to your checklist and increase your overall count of letters you need to find.

5. **Finding the Minimum Window**: While contracting the window, keep track of the size of the window. If the current window is smaller than the smallest window you've found so far, update your smallest window.

6. **Repeating the Process**: Repeat the process of expanding and contracting the window until the `right` pointer has gone through the entire message. The size of the smallest window you've found is the length of the smallest substring that contains all the characters in the clue.
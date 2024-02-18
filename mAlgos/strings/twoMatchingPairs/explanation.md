# Maximum Matching Pairs

## Problem Statement

Imagine you're a matchmaker setting up pairs for a dance. You have two groups of people, group `s` and group `t`, each with `N` people. Each person in group `s` is paired with a person in group `t` at the same position. A pair is considered a match if the two people have the same name.

However, there's a twist. You're allowed to swap two people within group `s` to try and create more matches. The catch is, you can only do this swap once.

Your task is to find the maximum number of possible matching pairs after making a swap within group `s`. A swap involves switching the positions of two people in group `s`.

In more technical terms, given two strings `s` and `t` of length `N`, find the maximum number of possible matching pairs in strings `s` and `t` after swapping exactly two characters within `s`. A swap is switching `s[i]` and `s[j]`, where `s[i]` and `s[j]` denote the character that is present at the `ith` and `jth` index of `s`, respectively. The matching pairs of the two strings are defined as the number of indices for which `s[i]` and `t[i]` are equal.

Note: You must swap two characters at different indices.

## Examples

### Example 1

`s = "abcd"`
`t = "adcb"`

The output should be `4`.

Explanation: Using 0-based indexing, and with `i = 1` and `j = 3`, `s[1]` and `s[3]` can be swapped, making it  "adcb". Therefore, the number of matching pairs of `s` and `t` will be `4`.

### Example 2

`s = "mno"`
`t = "mno"`

The output should be `1`.

Explanation: Two indices have to be swapped, regardless of which two it is, only one letter will remain the same. If `i = 0` and `j=1`, `s[0]` and `s[1]` are swapped, making `s = "nmo"`, which shares only "o" with `t`.
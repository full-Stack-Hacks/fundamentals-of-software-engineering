// Given an unsorted array A of size N that contains only non negative integers, find a continuous sub-array that adds to a given number S and return the left and right index(1-based indexing) of that subarray.

// In case of multiple subarrays, return the subarray indexes which come first on moving from left to right.

// Note:- You have to return an ArrayList consisting of two elements left and right. In case no such subarray exists return an array consisting of element -1.

function subArrayWithGivenSum(arr, sum) {
    let left = 0 
    let right = 1
    let count = arr[left] + arr[right]

    while(right < arr.length) {
        if(count === sum) {
            return [left + 1, right + 1]
        } else if(count < sum) {
            right++
            count += arr[right]
        } else {
            while(count > sum) {
                count -= arr[left]
                left++
            }
        }
    }
    return -1
}

const arr = [1,2,3,7,5]
const sum = 12
const result = subArrayWithGivenSum(arr, sum)
console.log(result)
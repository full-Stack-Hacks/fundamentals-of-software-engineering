// Problem Statement:

// You are given two sorted arrays, arr1 and arr2, each of which contains integers in ascending order. Your task is to write a function mergeSortedArrays(arr1, arr2) that merges these two arrays into a single sorted array.

function mergeSortedArrays(arr1, arr2) {
    const output = []
    let left = 0
    let right = 0

    const totalLength = arr1.length + arr2.length


    while(output.length !== totalLength) {
        
        if(arr1[left] < arr2[right]) {
            output.push(arr1[left])
            left++
        } else if(arr2[right] < arr1[left]) {
            output.push(arr2[right])
            right++
        } else if(left > arr1.length - 1) {
            output.push(arr2[right]) 
            right++
        } else {
            output.push(arr1[left])
            left++
        }
    } 
    return output
}

const merged = mergeSortedArrays([1, 2,3], [4,5])
console.log(merged)

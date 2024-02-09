// write a function that finds common elements betwee two sorted and unique arrays.

function sortedAndUnique(arr1, arr2) {
    let left = 0
    let right = 0
    let count = 0

    const returnArr = []

    while(left < arr1.length && right < arr2.length) {
        count++
        if(arr1[left] < arr2[right]) {
            left++
        } else if(arr1[left] > arr2[right]) {
            right++
        } else {
            returnArr.push(arr1[left])
            left++
        }
    }
    console.log(arr1.length + arr2.length)
    return returnArr
}

const arr1 = [1,3,5,7,9,11,13,15,16,17]
const arr2 = [5,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

const result = sortedAndUnique(arr1, arr2)
console.log(result)
// function areTheyEqual(arr1, arr2) {
//     let i = 0, j = 0; // Initialize two pointers, i for arr1 and j for arr2

//     // Loop while both pointers are within their respective arrays
//     while (i < arr1.length && j < arr2.length) {
//         // If the current elements in arr1 and arr2 are different
//         if (arr1[i] !== arr2[j]) {
//             let k = j;
//             // Move the pointer in arr2 until we find the same element as in arr1 or we have checked all elements
//             while (k < arr2.length && arr2[k] !== arr1[i]) {
//                 k++;
//             }
//             // If we have checked all elements in arr2 and didn't find the same element as in arr1, return false
//             if (k === arr2.length) {
//                 return false;
//             }
//             let l = i, m = k;
//             // Check if the subarray in arr2 is the reverse of the subarray in arr1
//             while (l < arr1.length && m >= j && arr1[l] === arr2[m]) {
//                 l++;
//                 m--;
//             }
//             // If the subarray in arr2 is not the reverse of the subarray in arr1, return false
//             if (arr1[l - 1] !== arr2[j]) {
//                 return false;
//             }
//             // Move the pointer in arr2 to the next element after the subarray
//             j = k + 1;
//         }
//         // Move both pointers to the next elements
//         i++;
//         j++;
//     }
//     // If we have checked all elements and all subarrays in arr2 are the reverse of the corresponding subarrays in arr1, return true
//     return i === arr1.length && j === arr2.length;
// }

// const arr1 = [2,4,1,3];
// const arr2 = [1,2,3,4];

// const result = areTheyEqual(arr1, arr2);
// console.log(result); // true

// const arr1 = [2,4,1,3];
// const arr2 = [1,2,3,4];

// const result = areTheyEqual(arr1, arr2);
// console.log(result); // true




function areTheyEqual(arr1, arr2) {
    const obj1 = createObj(arr1)
    const obj2 = createObj(arr2)

    if(Object.keys(obj1).length !== Object.keys(obj2).length) return false

    for(let key in obj2) {
        if(!obj1[key] || obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
}

function createObj(arr) {
    const obj = {}

    arr.forEach((elem) => {
        if(!obj[elem]) {
            obj[elem] = 1
        } else {
            obj[elem]++
        }
    })

    return obj
}

const arr1 = [1, 2, 3, 4];
const arr2 = [4, 3, 2, 1];

const result = areTheyEqual(arr1, arr2)
console.log(result)


// find length of the longest substring without repeating character

// const str = 'abcabcabcd'

function longestSubstring(str) {
    let max = 0
    let left = 0
    let right = 0
    const set = new Set()

    while(right < str.length) {
        if(!set.has(str[right])) {
            set.add(str[right])
            max = Math.max(set.size, max)
            right++
        } else {
            while(set.has(str[left])) {
                set.delete(str[left])
                left++
            }
        }
    }
    
    return max
}




// ===========================================
// ===========================================
// ===========================================
// ===========================================
// ===========================================
// ===========================================
// ===========================================
// Merge sorted

// const arr1 = [999999999]
// const arr2 = [4,8,9,10,11,12,13,14,15]

function mergeSorted(arr1, arr2) {
    const returnArr = []
    const totalLength = arr1.length + arr2.length
    let left = 0 
    let right = 0

    while(returnArr.length !== totalLength) {
        if(arr1[left] < arr2[right]) {
            returnArr.push(arr1[left])
            left++
        } else if(arr2[right] < arr1[left]) {
            returnArr.push(arr2[right])
            right++
        } else if(left === arr1.length) {
            returnArr.push(arr2[right]) 
            right++
        } else {
            returnArr.push(arr1[left])
            left++
        }
    }
    return returnArr
}

// Better put

function mergeSorted(arr1, arr2) {
    const returnArr = []
    let left = 0 
    let right = 0

    while(left < arr1.length || right < arr2.length) {
        // combine all conditions to where you don't have to use a bunch of else ifs
        if(right >= arr2.length || (left < arr1.length && arr1[left] < arr2[right])) {
            returnArr.push(arr1[left])
            left++
        } else {
            returnArr.push(arr2[right])
            right++
        }
    }
    return returnArr
}



// ===========================================
// ===========================================
// ===========================================
// ===========================================
// ===========================================
// ===========================================

// Find the commone elements in two sorted and distinct arrays.

function commonElements(arr1, arr2) {
    let left = 0
    let right = 0
    const common = []

    while(left < arr1.length && right < arr2.length) {
        console.log(`left: ${left}`)
        console.log(right)
        if(arr1[left] < arr2[right]) {
            left++
        } else if(arr2[right] < arr1[left]) {
            right++
        } else {
            common.push(arr1[left]) 
            left++
        }
    }
    return common
}

function commonElements2(arr1, arr2) {
    const obj = createObj(arr1)

    return arr2.filter(elem => {
        if(obj[elem]) {
            return elem
        }
    })
}

function createObj(arr) {
    const obj = {}
    
    arr.forEach(elem => {
        obj[elem] ? obj[elem]++ : obj[elem] = 1
    })

    return obj
}

const arr1 = [1,3,5,7,9]
const arr2 = [2,3,4,5,6,7,8,9]

console.log(commonElements2(arr1, arr2))        



// write a function that finds the commone elements in two sorted and distinct arrays

function makeObj(arr) {
    const obj = {}

    arr.forEach(elem => {
        obj[elem] ? obj[elem]++ : obj[elem] = 1
    })

    return obj
}



function sortedAndDistinct(arr1, arr2) {
    const obj = makeObj(arr1)

    return arr2.filter((elem) => {
        if(obj[elem]) {
            return elem
        }
    })  
}



const result = sortedAndDistinct(arr1, arr2)
console.log(result)
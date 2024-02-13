

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

const arr2 = [43,55,66,77,3]
const arr1 = [1,2,3,4,5,6,11,12,13,14]

const result = sortedAndDistinct(arr1, arr2)
console.log(result)
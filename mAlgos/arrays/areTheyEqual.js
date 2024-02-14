
function reverseToMakeEqual(arr1, arr2) {

    if(arr1.length !== arr2.length) {
        return false
    }

    const obj1 = createObj(arr1)
    const obj2 = createObj(arr2)

    for(let key in obj1) {
        if(obj1[key] !== obj2[key]) {
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

const arr1 = [1, 2, 4, 4];
const arr2 = [4, 3, 2, 1];

const result = reverseToMakeEqual(arr1, arr2)
console.log(result)




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

const arr1 = [1,2,3,4,5,6,7,8]
const arr2 = [2,3,1,4,5,8,7,12]

const result = areTheyEqual(arr1, arr2)
console.log(result)


// given [1,2,3,1,2,3,4,4,4,5], k = 2
// should return 4,3

// function kMostOccuring(arr, k) {
//     const map = createMap(arr)

// }

// function createMap(arr) {
//     const obj = {}

//     arr.forEach((elem) => {
//         if(!obj[elem]) {
//             obj[elem] = 1
//         } else {
//             obj[elem]++
//         }
//     })
//     return obj
// }

// const arr = [1,1,1,2,2,2,3,4,5]
// console.log(kMostOccuring(arr))










const arr = [1,3,2]


function test(arr) {
    console.log('hit')
    for(let i = 0; i < arr.length; i++) {
        let current = i - 1
        
        console.log(arr[current])
    }
}   

test(arr)
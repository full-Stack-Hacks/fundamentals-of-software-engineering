// function minSub(str, target) {
//     const obj = makeObj(target)

//     let right = 0, left = 0, min = Infinity, count = target.length

//     while(right < str.length) {
//         if(obj[str[right]] > 0) {
//             count--
//         }

//         if(obj[str[right]]) {
//             obj[str[right]]--
//         }

//         right++

//         while(count === 0) {
//             if(right - left < min) {
//                 min = right - left
//             }


//             if(obj[str[left]] === 0) {
//                 count++
//             }

//             if(obj[str[left]] !== undefined) {
//                 obj[str[left]]++
//             }
//             left++
//         }
//     }
//     if(min === Infinity) {
//         return -1
//     }

//     return min

// }

function makeObj(str) {
    const obj = {}
    let current
    for(let i = 0; i < str.length; i++) {
        current = str[i]
        if(!obj[current]) {
            obj[current] = 1
        } else {
            obj[current]++
        }
    }
    return obj
}

function minSub(str, target) {
    const obj = makeObj(target)

    let right = 0, left = 0, min = Infinity, count = target.length

    while(right < str.length) {
        if(obj[str[right]] > 0) {
            count--
        }

        if(obj[str[right]]) {
            obj[str[right]]--
        }

        right++

        while(count == 0) {
            if(right - left < min) {
                min = right - left
            }


            if(obj[str[left]] === 0) {
                count++
            }

            if(obj[str[left]]) {
                obj[str[left]]++
            }
            left++
        }
    }
    if(min === Infinity) {
        return -1
    }

    return min
}


const str = "abcbefecea"
const target = "abc"
console.log(minSub(str, target)) // 3   













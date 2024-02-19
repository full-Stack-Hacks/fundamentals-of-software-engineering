// s = 
// t = 



function minSub(str, target) {
    const obj = makeObj(target)

    let left = 0
    let right = 0
    let min = Infinity
    let count = target.length
    

    while(right < str.length) {
        if(obj[str[right]] > 0) {
            count--
        }

        if(obj[str[right]] !== undefined) {
            obj[str[right]]--
        }
        right++

        while(count === 0) {
            if(right - left < min) {
                min = right - left
            }

            if(obj[str[left]] === 0) {
                count++
            }
            left++
        }
    }

    if(min === Infinity) {
        return -1
    }
    return min
}

function makeObj(str) {
    const obj = {}
    for(let i = 0; i < str.length; i++) {
        let current = str[i]
        if(!obj[current]) {
            obj[current] = 1
        } else {
            obj[current]++
        }
    }
    return obj
}

const str = "adcbefecea"
const target = "abc"

console.log(minSub(str, target))
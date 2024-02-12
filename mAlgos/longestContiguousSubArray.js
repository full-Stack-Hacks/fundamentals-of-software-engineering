const arr = [3,4,1,6,2]

function testing(arr) {
    const output = []

    for(let i = 0; i < arr.length; i++) {
        let left = i - 1
        let right = i + 1
        let count = 1
        // trace left
        while(arr[i] > arr[right] && right < arr.length) {
            count++
            right++
        }

        while(arr[i] > arr[left] && left >= 0) {
            count++ 
            left--
        }
        output.push(count)
    }
    return output
} 

const result = testing(arr)
console.log(result)
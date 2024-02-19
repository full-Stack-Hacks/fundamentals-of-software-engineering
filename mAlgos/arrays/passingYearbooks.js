function passingYearBooks(arr) {
    const sigCounts = new Array(arr.length).fill(1)

    for(let i = 0; i < arr.length; i++) {
        let current = arr[i] - 1
        console.log(`current: ${current}`)
        

        while(current !== i) {
            
            sigCounts[current]++

            current = arr[current] - 1
            console.log(`While loop current: ${current}`)
        }
    }

    // return sigCounts
}


const arr = [3,2,1]
console.log(passingYearBooks(arr))
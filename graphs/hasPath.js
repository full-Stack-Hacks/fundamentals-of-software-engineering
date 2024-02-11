// Take in adjecency list, see if given node has path to other node. 
// The graph is directed and asyclic (no cycles)

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

function hasPath(start, end) {
 // your code here. 
    const stack = [start]
    const path = []
    while(stack.length > 0) {
        const current = stack.pop()
        if(graph[current].length === 0 && current !== end) {
            path.splice(0, path.length)
        } else if(graph[current].length > 0 && current !== end) {
            path.push(current)
            graph[current].forEach(elem => {
                stack.push(elem)
            })
        } else {
            path.push(current)
            return path
        }
    }
    return false
}

function clearPath(arr) {
    arr.splice(0, arr.length)
    return arr
} 
// const arr = [1,2,3,4,5]
// const newArr = clearPath(arr)
// console.log(newArr)




const start = 'f'
const end = 'j'
console.log(hasPath(start, end))

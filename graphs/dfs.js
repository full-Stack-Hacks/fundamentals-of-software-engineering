// Just implement a DFS algorithm

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

function depthFirstPrintIterative(graph, node) {
    const stack = [node]
    
    while(stack.length > 0) {
        const current = stack.pop()
        console.log(current)

        graph[current].forEach(elem => {
            stack.push(elem)
        })
    }
}

function depthFirstRecursive(graph, node) {
    console.log(node)
    graph[node].forEach(elem => {
        depthFirstRecursive(graph, elem)
    })
}



// Calling the function
depthFirstPrintIterative(graph, 'a')
depthFirstRecursive(graph, 'a')

// Just implement a DFS algorithm

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

function depthFirstPrint(graph, node) {
    const stack = [node]
    
    while(stack.length > 0) {
        const current = stack.pop()
        console.log(current)

        graph[current].forEach(elem => {
            stack.push(elem)
        })
    }
}

depthFirstPrint(graph, 'a')

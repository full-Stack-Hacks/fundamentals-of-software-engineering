// // Implement BFS using a queue

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

function bfs(graph, node) {
    const queue = [node]

    while(queue.length > 0) {
        const current = queue.pop()
        console.log(current)
        graph[current].forEach(elem => {
            queue.unshift(elem)
        })
    }
}

bfs(graph, 'a')


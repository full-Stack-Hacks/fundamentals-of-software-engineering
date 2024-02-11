// Implement BFS using a queue

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
        const current = queue.shift()
        console.log(current)
        graph[current].forEach(elem => {
            queue.push(elem)
        })
    }
}

bfs(graph, 'a')
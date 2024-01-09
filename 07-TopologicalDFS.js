//Question
// You are given a directed Acyclic graph.
//You have to print the topological order of the graph using DFS



//Solution

const createadjlist = (edges, node) => {
    let list = new Array(node+1)

    for(let i=0;i<list.length;i++){
        list[i] = []
    }

    for(let i=0;i<edges.length;i++){
        list[edges[i][0]].push(edges[i][1])
    }
    return list
}

const topologicaldfs = (adjlist, visited, stack, node) => {
    visited[node] = 1

    let cur = adjlist[node]
    for(let i=0;i<cur.length;i++){
        if(!visited[cur[i]]){
            topologicaldfs(adjlist, visited, stack, cur[i])
        }
    }
    stack.push(node)
}


//Inputs

//
//  1 -> 2 -> 7 -> 8 -> 9   10 -> 11
//  |    |                        |
//  3 -> 4 -> 6                   12
//  |
//  5

let nodes = 12
let edges = [
    [1,2],
    [1,3],
    [3,4],
    [2,4],
    [4,6],
    [2,7],
    [7,8],
    [8,9],
    [10,11],
    [11,12],
    [3,5]
]

let adjlist = createadjlist(edges, nodes)

let res = []
let visited = new Array(nodes+1).fill(0)

for(let i=1;i<=nodes;i++){
    if(!visited[i]){
        topologicaldfs(adjlist, visited, res, i)
    }
}

console.log(res)
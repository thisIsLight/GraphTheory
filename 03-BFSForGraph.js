//Question
//We are given a graph and we need to print the BFS of that graph


//Solution

const adjlst = (edges, nodes) => {
    let adj = new Array(nodes+1)
    for(let i=0;i<adj.length;i++){
        adj[i] = []
    }
    for(let i=0;i<edges.length;i++){
        adj[edges[i][0]].push(edges[i][1])
    }
    return adj
}

const BFS = (adjlist, node, visited, bfsarr) => {
    let q = []

    bfsarr.push(node)
    visited[node] = 1
    q.push(adjlist[node])
    while(q.length > 0){
        let cur = q.shift()
        for(let i=0;i<cur.length;i++){
            if(!visited[cur[i]]){
                bfsarr.push(cur[i])
                q.push(adjlist[cur[i]])
                visited[cur[i]] = 1
            }
        }
    }
}


//Inputs : 

//
//  1 -> 2 -> 7 -> 8 -> 9   10 -> 11
//  |    |                        |
//  3 -> 4 -> 6 -> 5              12
//  |
//  13

let nodes = 13
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
    [6,5],
    [3,13]
]

let adjlist = adjlst(edges, nodes)
let visited = new Array(nodes+1).fill(0)
let bfsarr = []
for(let i=1;i<=nodes;i++){
    if(!visited[i]){
        BFS(adjlist, i, visited, bfsarr)
    }
}

console.log(bfsarr)
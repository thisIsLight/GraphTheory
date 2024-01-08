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

const DFS = (adjlist, node, visited, dfsarr) => {
    
    if(visited[node]){
        return
    }
    else{
        dfsarr.push(node)
        visited[node] = 1
        let cur = adjlist[node]
        for(let i=0;i<cur.length;i++){
            DFS(adjlist, cur[i], visited, dfsarr)
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
let dfsarr = []
for(let i=1;i<=nodes;i++){
    if(!visited[i]){
        DFS(adjlist, i, visited, dfsarr)
    }
}

console.log(dfsarr)
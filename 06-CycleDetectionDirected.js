//Question
//We are given a directed graph and we want to find if there are any cycled in 
//that directed graph or not


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


const DFSDetectCycleInDirectedGraph = (node, visited, dfsvisited, adjlist) => {
    visited[node] = 1
    dfsvisited[node] = 1

    let cur = adjlist[node]
    for(let i=0;i<cur.length;i++){
        if(!visited[cur[i]]){
            var res = DFSDetectCycleInDirectedGraph(cur[i], visited, dfsvisited, adjlist)
            if(res){
                return true
            }
        }
        else if(dfsvisited[cur[i]]){
            return true
        }
    }
    dfsvisited[node] = 0
    return false
}


//Inputs

//Inputs : 

//
//  1 -> 2 -> 7 -> 8 -> 9   10 -> 11
//  | \  |                        |
//  3 -> 4 -> 6                   12
//  |
//  5

let nodes = 12
let edges = [
    [1,2],
    [1,3],
    [3,4],
    [2,4],
    [4,1],
    [4,6],
    [2,7],
    [7,8],
    [8,9],
    [10,11],
    [11,12],
    [3,5]
]

let adjlist = adjlst(edges, nodes)

let visited = new Array(nodes+1).fill(0)
let dfsvisited = new Array(nodes+1).fill(0)

let cycledetected = false

for(let i=1;i<=nodes;i++){
    if(!visited[i]){
        let res = DFSDetectCycleInDirectedGraph(i, visited, dfsvisited, adjlist)
        if(res){
            cycledetected = true
            break
        }
    }
}

console.log(cycledetected)
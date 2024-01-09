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

const DFSCycleDetectionUndirected = (adjlist, node, visited, parent) => {
    if(adjlist[node].length == 0){
        return
    }
    else{
        visited[node] = 1
        let cur = adjlist[node]
        for(let i=0;i<cur.length;i++){
            if(!visited[cur[i]]){
                let res = DFSCycleDetectionUndirected(adjlist, cur[i], visited, node)
                if(res)
                    return true
            }
            else if(parent != cur[i]){
                return true
            }
        }
        return false
    }
}

const BFSCycleDetectionUndirected = (adjlist, node, visited) => {
    
    let q = []
    let parent = new Map()

    //insert visited
    visited[node] = 1
    q.push(node)
    parent.set(node, -1)

    while(q.length > 0){
        let par = q.shift()
        let cur = adjlist[par]
        for(let i=0;i<cur.length;i++){
            if(!visited[cur[i]]){
                visited[cur[i]] = 1
                q.push(cur[i])
            }
            else if(visited[cur[i]] && parent.get(cur[i]) != node){
                return true
            }
        }
    }
    return false
}


//Inputs : 

//
// 6 -- 5 -- 1 -- 2
//           |    |
//           3 -- 4
//           |
//           7
//

let nodes = 7
let edges = [
    [6,5],
    [5,6],
    [1,5],
    [5,1],
    [1,2],
    [2,1],
    [1,3],
    [3,1],
    [2,4],
    [4,2],
    [3,4],
    [4,3],
    [3,7],
    [7,3],
]

let adjlist = adjlst(edges, nodes)
let visited = new Array(nodes+1).fill(0)
let dfs = false
let bfs = false

for(let i=1;i<=nodes;i++){
    if(!visited[i]){
        if(DFSCycleDetectionUndirected(adjlist, i, visited, -1)){
            dfs = true
            break
        }
    }
}

for(let i=1;i<=nodes;i++){
    if(!visited[i]){
        if(BFSCycleDetectionUndirected(adjlist, i, visited)){
            bfs = true
            break
        }
    }
}

console.log(dfs, bfs)
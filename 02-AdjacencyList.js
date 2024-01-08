//Question
//We are given a graph and we need to make the
//adjacency list


//Solution

const adjlst = (edges, nodes) => {
    let adj = new Array(nodes+1)
    for(let i=0;i<adj.length;i++){
        adj[i] = []
    }
    for(let i=0;i<edges.length;i++){
        adj[edges[i][0]].push(edges[i][1])
    }

    console.log(adj)
}


//Inputs : 

//
//  1 -> 2 -> 7 -> 8 -> 9   10 -> 11
//  |    |                        |
//  3 -> 4 -> 6                   12
//

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
    [11,12]
]

adjlst(edges, nodes)
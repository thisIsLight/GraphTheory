//Question
//We need to find the minimum weight of the spanning tree
//that can be made out of a graph


//Solution

//Disjoint set implementation

const findParent = (u , parent) => {
    if(parent[u] == u){
        return u
    }
    //path compression
    return parent[u] = findParent(parent[u], parent)
}

const unionByRank = (u, v, parent, rank) => {
    u = findParent(u, parent)
    v = findParent(v, parent)

    if(rank[u] > rank[v]){
        parent[v] = u
    }
    else if(rank[u] < rank[v]){
        parent[u] = v
    }
    else{
        parent[u] = v
        rank[u]++
    }
}

//Krushkal's algorithm

const krushkals = (edges,  nodes) => {
    edges.sort((a,b) => {
        return a[2]-b[2]
    })

    let res = 0
    let rank = new Array(nodes+1).fill(0)
    let parent = new Array(nodes+1)
    for(let i=0;i<parent.length;i++){
        parent[i] = i
    }

    for(let i=0;i<edges.length;i++){
        let u = edges[i][0]
        let v = edges[i][1]
        let w = edges[i][2]
        
        u = findParent(u, parent)
        v = findParent(v, parent)

        if(u != v){
            res+=w
            unionByRank(u, v, parent, rank)
        }
    }
    console.log(res)
}

//Inputs
//   2    1    3
// 6 -- 5 -- 1 -- 2
// |7   |4   |8    
// 4 -- 7 -- 3 
//   1    6    
//           
//

let nodes = 7
let edges = [
    [6,5,2],
    [5,6,2],
    [1,5,1],
    [5,1,1],
    [1,2,3],
    [2,1,3],
    [1,3,8],
    [3,1,8],
    [6,4,7],
    [4,6,7],
    [3,7,6],
    [7,3,6],
    [4,7,1],
    [7,4,1],
    [7,5,4],
    [5,7,4],
]

krushkals(edges,nodes)
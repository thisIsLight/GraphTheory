//Question
//Create an algorithm such that you can find strongly connected graphs


//Solution

const creatadjlist = (edges, nodes) => {
    let list = new Array(nodes+1)
    for(let i=0;i<list.length;i++){
        list[i] = []
    }

    for(let i=0;i<edges.length;i++){
        list[edges[i][0]].push(edges[i][1])
    }

    return list
}

const creatadjlisttranspose = (edges, nodes) => {
    let list = new Array(nodes+1)
    for(let i=0;i<list.length;i++){
        list[i] = []
    }

    for(let i=0;i<edges.length;i++){
        list[edges[i][1]].push(edges[i][0])
    }

    return list
}

const kosaraju = (edges, nodes) => {
    let list = creatadjlist(edges, nodes)
    let listtranspose = creatadjlisttranspose(edges, nodes)
    let toposort = []
    let visited = new Array(nodes+1).fill(0)

    for(let i=1;i<=nodes;i++){
        if(!visited[i]){
            topologicalsort(toposort, i, visited, list)
        }
    }

    visited.fill(0)
    let count = 0
    for(let i=toposort.length-1;i>=0;i--){
        if(!visited[toposort[i]]){
            count++
            topologicalsort([], toposort[i], visited, listtranspose)
        }
    }
    console.log(count)
}

const topologicalsort = (res, node, visited, list) => {
    visited[node] = 1
    let children = list[node]
    for(let i=0;i<children.length;i++){
        if(!visited[children[i]]){
            topologicalsort(res, children[i], visited, list)
        }
    }
    res.push(node)
}



//Input
//   
//  6 --> 5 
// '|     |.       
//  4 <-- 2 --> 3 --> 1
//        
//           

let nodes = 6
let edges = [
    [6,5],
    [5,2],
    [2,4],
    [4,6],
    [2,3],
    [3,1]
]

kosaraju(edges, nodes)
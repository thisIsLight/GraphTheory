//Question
//We need to find the shortest path length from a starting point
//We need to use bellmanford


//Solution

const createadjlists = (edges, node) => {
    let list = new Array(node+1)
    for(let i=0;i<list.length;i++){
        list[i] = []
    }

    for(let i=0;i<edges.length;i++){
        list[edges[i][0]].push([edges[i][1],edges[i][2]])
    }

    return list
}

const bellmanford = (edges, nodes, start) => {
    let path = new Array(nodes+1).fill(Infinity)
    path[start] = 0

    for(let i=0;i<nodes-1;i++){
        for(let j=0;j<edges.length;j++){
            if(path[edges[j][0]] + edges[j][2] < path[edges[j][1]]){
                path[edges[j][1]] = path[edges[j][0]] + edges[j][2]
            }
        }
    }

    console.log(path)
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
    [6,5,1],
    [5,6,1],
    [1,5,1],
    [5,1,1],
    [1,2,1],
    [2,1,1],
    [1,3,8],
    [3,1,8],
    [2,4,1],
    [4,2,1],
    [3,4,1],
    [4,3,1],
    [3,7,1],
    [7,3,1],
]
let start = 1

bellmanford(edges, nodes, start)
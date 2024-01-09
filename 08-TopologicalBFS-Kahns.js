//Question
//Topological sort for a DAG using queues


//Solution

const createIndegree = (edges, node) => {
    let indegree = new Array(node+1).fill(0)
    for(let i=0;i<edges.length;i++){
        indegree[edges[i][1]]++
    }
    return indegree
}

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

const topologicalbfs = (adjlist, visited, res, indegree) => {

    let q = []
    for(let i=1;i<indegree.length;i++){
        if(indegree[i] == 0){
            q.push(i)
            indegree[i]--
        }
    }

    while(q.length > 0){
        let node = q.shift()
        res.push(node)
        visited[node] = 1
        let cur = adjlist[node]
        for(let i=0;i<cur.length;i++){
            indegree[cur[i]]--
        }
        for(let i=1;i<indegree.length;i++){
            if(!visited[i] && indegree[i] == 0){
                visited[i] = 1
                q.push(i)
            }
        }
    }
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
    [3,5],
    [1,4]
]

let adjlist = createadjlist(edges, nodes)
let indegree = createIndegree(edges, nodes)

console.log(indegree)

let res = []
let visited = new Array(nodes+1).fill(0)

topologicalbfs(adjlist, visited, res, indegree)

console.log(res)



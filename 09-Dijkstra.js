//Question
//Find the shortest distance from one node to another in a undirected graph provided we have positive weights
// Dijkstra's


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

const smallestpathposundirected = (list, nodes, start) => {
    let path = new Array(nodes + 1).fill(Infinity)
    path[start] = 0

    let minheap = []
    minheap.push([start,path[start]])

    while(minheap.length > 0){
        let node = minheap[0]
        swap(minheap,0,minheap.length-1)
        minheap.pop()
        let costcurrent = node[1]
        let current = node[0]
        let child = list[current]
        for(let i=0;i<child.length;i++){
            if(costcurrent + child[i][1] < path[child[i][0]]){
                path[child[i][0]] = costcurrent + child[i][1]

                for(let j=0;j<minheap.length;j++){
                    if(minheap[j][0] == child[i][0]){
                        swap(minheap,j, minheap.length-1)
                        minheap.pop()
                        break
                    }
                }
                minheap.push([child[i][0], path[child[i][0]]])
            }
        }
        minheapdriver(minheap)
    }

    console.log(path)
}

const minheapdriver = (arr) => {
    let size = arr.length

    for(let i=Math.floor(size/2)-1; i>=0;i--){
        heapify(arr,size,i)
    }
}

const heapify = (arr, size, index) => {
    let smallest = index
    let left = smallest*2+1
    let right = smallest*2+2
    if(left<size && arr[left][1] < arr[smallest][1]){
        smallest = left
    }
    if(right<size && arr[right][1] < arr[smallest][1]){
        smallest = right
    }
    if(smallest != index){
        swap(arr,smallest,index)
        heapify(arr,size,smallest)
    }
}

const swap = (arr, index1, index2) => {
    let temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
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
let adjlist = createadjlists(edges, nodes)


smallestpathposundirected(adjlist, nodes, 1)
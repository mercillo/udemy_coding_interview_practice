// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree


//breadthfirst-> by rows

//depth first 
//get to the bottom of the tree as fast as possible "depth first"



class Node {
    constructor(data){
        this.data = data;
        this.children = [];
    }
    //parent has a reference to the child nodes

    //add(data)
    //given some data, create a new node and add it to the current node's children array.
    add(data){
        
        const newNode = new Node(data);
        this.children.push(newNode);
    }

    //remove(data) 
    //given some data, look at each child of the current node and remove any node with data ===data
    remove(data){
        this.children = this.children.filter(node=>{
            return node.data!==data;
        })
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    traverseBF(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            
            for(let child of node.children){
                arr.push(child);
            }
            fn(node);            
        }
    }

    traverseDF(fn){
        const arr = [this.root];
        while(arr.length){
            const node = arr.shift();
            let arr2 = node.children;


            //need to do this in reverse order.
            //use for (let child of node makes it in [a d c b] instead of [a b c d])
            for(let i=arr2.length-1;i>=0;i--){
                arr.unshift(arr2[i])
            }
            fn(node);  
        }

    }

}

module.exports = { Tree, Node };

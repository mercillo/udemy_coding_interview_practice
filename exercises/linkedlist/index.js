// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data,next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    insertFirst(data){

        const node = new Node(data,this.head);
        this.head = node;
        //this.head = new Node(data,this.head);

        //return this.insertAt(data,0)

    }

    size(){
        let count =0;
        let node = this.head;
        while(node){
            count++;
            node = node.next;
        } 
        return count;

    }

    getFirst(){
        let node = this.head;
        return node;     
    }

    getLast(){
        let lastNode;
        //if there no node, return null
        if(!this.head){
            return null
        }
        //otherwise set the node and determine if there are additional nodes

        let node = this.head;
        //while a node exists, check to see if there is a next
        while(node){
            
            if(!node.next){
                //if theres no next node, return that node
                return node;
            }
            node=node.next;
        }
    }

    clear(){
        this.head = null;

    }

    removeFirst(){
        if(!this.head){
            return;
        }
       this.head = this.head.next;


    }

    removeLast(){
        if(!this.head){
            return;
        }

        if(!this.head.next){
            this.head=null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        while(node.next){
            previous = node;
            node=node.next;
        }
        previous.next=null;
    }

    insertLast(data){
        let lastNode = this.getLast();

        if(lastNode){
            //There are some existing nodes in our chain
            lastNode.next = new Node(data);
        } else{
            //The chain is empty
            this.head = new Node(data);
        }

    }

    getAt(index){
        if(!this.head){
            return null;
        }

        let tempNode = this.head;
        let counter =0;

        while(tempNode){
            if(counter===index){
                return tempNode;
            }
            counter++;
            tempNode = tempNode.next;
        }

        return null;
    }

    removeAt(index){
        //doesnt crash on empty list
        //doesnt crash on out of bounds
        
        if(!this.head){
            return null;
        }

        if(index ===0){
            this.head = this.head.next;
            return null;
        }

        const previous = this.getAt(index-1);
        if(!previous || !previous.next){
            return
        } 
        previous.next = previous.next.next;
    }

    insertAt(data,index){
        if(!this.head){
            this.head = new Node(data);
            return;
        }

        if(index===0){
            this.head = new Node(data,this.head);
            return;
        }

        const previous = this.getAt(index-1) || this.getLast();
        const currentNode = new Node(data,previous.next);
        previous.next = currentNode;


    }

    forEach(fn){
        let node= this.head;
        let counter = 0;
        while(node){
            fn(node,counter);
            node = node.next;
            counter++;
        }
    }
    *[Symbol.iterator](){
        let node = this.head;
        while(node){
            yield node;
            
            node=node.next;
        }
    }
}

module.exports = { Node, LinkedList };

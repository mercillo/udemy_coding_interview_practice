// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent


//** review this */
function validate(node, min = null, max = null) {
    if(max !==null && node.data>max){ //default root node
        return false;
    }
    if(min !==null && node.data<min){ //default root node
        return false;
    }
    if(node.left && !validate(node.left,min,node.data)){
        //call validate with the left node.
        //with the min of null
        //and sets max as the node.data
        //validate returns false 
        return false;
    }
    if(node.right && !validate(node.right,node.data,max)){
        return false;
    }
    return true;
    //max = 10


    //validate = min,

}

function validate2(node,min=null,max=null){
    if(!node){
        return true;
    }
    if(min!== null && node.data<min){
        return false;
    }
    if(max!== null && node.data>max){
        return false;
    }

    return validate(node.left,min,node.data) && validate(node.right,node.data,max);
}

module.exports = validate;

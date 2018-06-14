// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    //width = breadthfirst

    let arr = [root,'s'];
    let counters =[0];


    while(arr.length>1){
        const node = arr.shift();
        if(node === 's'){
            counters.push(0);
            arr.push('s');
        } else{
            for(let child of node.children){
                arr.push(child);
            }
            counters[counters.length -1]++;
        }

    }
    return counters;

}

module.exports = levelWidth;

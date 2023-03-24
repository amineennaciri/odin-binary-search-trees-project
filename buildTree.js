import { Node } from './newNode.js';
//Write a buildTree function which takes an array of data (e.g. [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.
function buildTree(arr){
    // remove duplicates
    let result = [];
    for(let i = 0; i<=arr.length-1;i++){
        for(let j = 0;j<=arr.length-1;j++){
            if(arr[i]===arr[j] && i!=j){
                //delete arr[i];
                arr.splice(j,1);
            }
        }
    }
    //console.log(arr);//before sorting
    //console.log(arr.length);
    // sort array
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    //console.log(arr.length);
    // now that the array is sorted let's turn the array into a balanced binary tree
    //console.log(arr);
    //console.log(arr.length);
    let lowInterval = 0;//start
    let highInterval = arr.length-1;//end
    return sortedArrayToBST(arr,lowInterval,highInterval);
    //return arr;
}
/* A function that constructs Balanced Binary Search Tree 
 from a sorted array */
function sortedArrayToBST(arr,start,end){
    /* Base Case */
    if(start>end){
        return null;
    }
    /* Get the middle element and make it root */
    const middle = Math.floor((start+end)/2);
    //const middle = parseInt((start+end)/2);
    const root = new Node(arr[middle]);
    //console.log(root);
    /* Recursively construct the left subtree and make it
    left child of root */
    root.left = sortedArrayToBST(arr,start,middle-1);
    //console.log(root);
    /* Recursively construct the right subtree and make it
    right child of root */
    root.right = sortedArrayToBST(arr, middle + 1, end);
    //console.log(root);
    return root;
}

export { buildTree };
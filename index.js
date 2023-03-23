//Build a Node class / factory. It should have an attribute for the data it stores as well as its left and right children.
function Node(data){
    this.data = data
    this.left = null
    this.right = null
}
//Build a Tree class / factory which accepts an array when initialized. The Tree class should have a root attribute which uses the return value of buildTree which you’ll write next.
function Tree(arr){
    this.root = buildTree(arr)
    // Write an insert and delete functions which accepts a value to insert/delete (you’ll have to deal with several cases for delete such as when a node has children or not).
    this.insert = function(val,root){
        if(root.data === val.data){
            console.log(`This value already exist in the tree.`);
            return root;
        }else if(val.data < root.data){
            if(root.left === null){
                root.left = val;
            }else{
                this.insert(val,root.left);
            }
        }else if(val.data > root.data){
            if(root.right === null){
                root.right = val;
            }else{
                this.insert(val,root.right);
            }
        }
        return root;
    }
    this.delete = function(){

    }
}
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
//If you would like to visualize your binary search tree, here is a prettyPrint()
//This function will expect to receive the root of your tree as the value for the node parameter.
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
       return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}
//let data = [50,25,75,10,33,56,89,4,11,30,40,52,61,82,95]
let data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let test = new Tree(data);
//console.log(test);
//prettyPrint(test.root);
// [1,3,4,5,7,8,9,23,67,324,6345]//length = 11
//console.log(buildTree(data));
prettyPrint(test.root); 
/* console.log(test.root.left.data); */
const newInput = new Node(0);
test.insert(newInput,test.root);
//console.log(test.root);
prettyPrint(test.root); 
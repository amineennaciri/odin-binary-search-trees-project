//Build a Node class / factory. It should have an attribute for the data it stores as well as its left and right children.
function Node(data){
    this.data = data
    this.left = null
    this.right = null
}
//Build a Tree class / factory which accepts an array when initialized. The Tree class should have a root attribute which uses the return value of buildTree which you’ll write next.
function Tree(arr){
    this.root = buildTree(arr)
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
    console.log(arr);
    console.log(arr.length);
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
// binary search
/* function binarySearch(arr,target){
    let lowInterval = 0;
    let highInterval = arr.length-1;
    while(lowInterval<=highInterval){
        //console.log(lowInterval);
        //console.log(highInterval);
        let middle = Math.floor((highInterval+lowInterval)/2);
        //console.log(middle);
        if(arr[middle]==target){
            return middle;
        }else if(target>arr[middle]){
            lowInterval = middle + 1;
        }else{
            highInterval = middle - 1;
        }
    }
    return null;
} */
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

let data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
let dataTest = [50,25,75,10,33,56,89,4,11,30,40,52,61,82,95]
// [1,3,4,5,7,8,9,23,67,324,6345]//length = 11
console.log(buildTree(dataTest));
//console.log(`let's try binary search tree`);
//console.log(binarySearch([3,17,75,80,202],22));
//console.log(binarySearch([3,17,75,80,202],75));
prettyPrint(buildTree(dataTest));
//prettyPrint(buildTree(arr),prefix = '', isLeft = true);
//console.log(binaryTree(data));
import { Node } from './newNode.js';
//Build a Node class / factory. It should have an attribute for the data it stores as well as its left and right children.
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
    this.delete = function(val,root){
        // search the val in the node.
        if(val.data === root.data){
            //start the process for the deletion.
            // no children
            if(root.left === null && root.right === null){
                root.data = null;
                //delete root.data;
            // 1 children
            }else if(root.left != null && root.right === null){
                root.data = root.left.data;
                //delete root.left;
                //root.left.data = null;
                root.left = null;
            }else if(root.left === null && root.right != null){
                root.data = root.right.data;
                //root.right.data = null;
                root.right = null;
                //delete root.right;
            // 2 children
            }else if(root.left != null && root.right != null){
                root.data = root.right.data;
                //root.right.data = null;
                root.right = null;
                //delete root.right;
            // successor node
            }else if(root.right.left != null){
                let pointer = root.right;
                let pointerRightChild = null;
                while(pointer.left != null){
                    pointer = pointer.left;
                    // successor node in case of a right child
                    if(pointer.left ===null && pointer.right != null){
                        // save the right child
                        pointerRightChild = pointer.right;
                    }

                }
                root.data = pointer.data;
                if(pointerRightChild != null){
                    pointer = pointerRightChild;
                }else{
                    pointer = null;
                }    
            }
        }else if(val.data > root.data){
            this.delete(val,root.right);
        }else if(val.data < root.data){
            this.delete(val,root.left);
        }else{
            return `impossible to delete ${val.data} because it is not in the tree.`
        }

    }
    /* this.find = function(val,root){
        //Write a find function which accepts a value and returns the node with the given value.
        if(root.data == val.data || root == null){
            return root;
        }else if(val.data > root.data){
            if(root.right!=null){
                this.find(val, root.right)
            }
        }else if(val.data < root.data){
            if(root.left!=null){
                this.find(val, root.left);
            }
        }else{
            return `impossible to find node ${val} because it is not in the tree.`
        } */
        this.find = function(value, root = this.root) {
            // Return root if null or matches value
            if (root === null || root.data === value) {
              return root;
            }
      
            // Access root's children if value not found; 
            if (value < root.data) {
              return this.find(value, root.left);
            }
            return this.find(value, root.right); 
    }
}
import { buildTree } from './buildTree.js';

import { prettyPrint } from './prettyPrint.js';

import { testing } from './test.js';
testing(Tree,Node); 

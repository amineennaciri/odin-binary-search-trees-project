import { Node } from '../newNode.js';
import { buildTree } from '../buildTree.js';
import { testing } from '../test.js';
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
    this.levelOrder = function(arr = [], queue = [], root = this.root) {
        if (root === null) return;
        // Visit the root
        arr.push(root.data);
  
        // Traverse to left and right children -> add to queue
        queue.push(root.left);
        queue.push(root.right);
  
        // Move to next level
        while (queue.length) {
          const level = queue[0];
          queue.shift();
          this.levelOrder(arr, queue, level)
        }
  
        return arr;
    }
    this.inorder = function(arr = [], root = this.root) {
        if (root === null) return;
        
        // Traverse left subtree
        if (root.left) this.inorder(arr, root.left);
        
        // Visit the root
        arr.push(root.data);
        
        // Traverse right subtree
        if (root.right) this.inorder(arr, root.right);
       
        return arr;
      }  
      this.preorder = function(arr = [], root = this.root) {
        if (root === null) return;
        
        // Visit the root
        arr.push(root.data);
        
        // Traverse the left subtree
        if (root.left) this.preorder(arr, root.left);
        
        // Traverse the right subTree
        if (root.right) this.preorder(arr, root.right);
        
        return arr;
      }
      this.postorder = function(arr = [], root = this.root) {
        if (root === null) return;
  
        // Traverse left subtree
        if (root.left) this.postorder(arr, root.left);
        
        // Traverse right subtree
        if (root.right) this.postorder(arr, root.right);
        
        // Visit the root
        arr.push(root.data);
  
        return arr;
    }
    //Write a height function which accepts a node and returns its height. Height is defined as the number of edges in longest path from a given node to a leaf node.
    this.height = function(root = this.root){
        if (root === null) return 0;
  
        let lHeight = this.height(root.left);
        let rHeight = this.height(root.right);
  
        if (lHeight > rHeight) {
          return lHeight + 1;
        } else {
          return rHeight + 1;
        }
    }
}
//---------------Testing----------------
testing(Tree,Node);
// to see what's going on look at the test.js file
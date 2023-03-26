import { Node } from './newNode.js';
import { Tree } from './src/index.js';
import { prettyPrint } from './prettyPrint.js';
function testing(Tree,Node){
    //let data = [50,25,75,10,33,56,89,4,11,30,40,52,61,82,95]
    let data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
    let test = new Tree(data);
    //console.log(test);
    //prettyPrint(test.root);
    // [1,3,4,5,7,8,9,23,67,324,6345]//length = 11
    console.log(`Pretty Print console log`);
    prettyPrint(test.root); 
    /* console.log(test.root.left.data); */
    const firstInput = new Node(0);
    test.insert(firstInput,test.root);
    console.log(`Pretty Print console log`);
    prettyPrint(test.root);
    const secondInput = new Node(0);
    test.delete(secondInput,test.root);
    console.log(`Pretty Print console log`);
    prettyPrint(test.root);
    const thirdInput = new Node(4);
    //console.log(test.find(thirdInput,test.root));
    console.log(test.find(3));
    console.log(`Breath First`);
    console.log(test.levelOrder());
    console.log(`Depth first`);
    console.log(`Inorder`);
    console.log(test.inorder());
    console.log(`preorder`);
    console.log(test.preorder());
    console.log(`postorder`);
    console.log(test.postorder());
    console.log(`Height Tree`);
    console.log(test.height());
}

export { testing };
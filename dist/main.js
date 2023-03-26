/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./buildTree.js":
/*!**********************!*\
  !*** ./buildTree.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"buildTree\": () => (/* binding */ buildTree)\n/* harmony export */ });\n/* harmony import */ var _newNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newNode.js */ \"./newNode.js\");\n\r\n//Write a buildTree function which takes an array of data (e.g. [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]) and turns it into a balanced binary tree full of Node objects appropriately placed (don’t forget to sort and remove duplicates!). The buildTree function should return the level-0 root node.\r\nfunction buildTree(arr){\r\n    // remove duplicates\r\n    let result = [];\r\n    for(let i = 0; i<=arr.length-1;i++){\r\n        for(let j = 0;j<=arr.length-1;j++){\r\n            if(arr[i]===arr[j] && i!=j){\r\n                //delete arr[i];\r\n                arr.splice(j,1);\r\n            }\r\n        }\r\n    }\r\n    //console.log(arr);//before sorting\r\n    //console.log(arr.length);\r\n    // sort array\r\n    // Sort the array in ascending order\r\n    arr.sort((a, b) => a - b);\r\n    //console.log(arr.length);\r\n    // now that the array is sorted let's turn the array into a balanced binary tree\r\n    //console.log(arr);\r\n    //console.log(arr.length);\r\n    let lowInterval = 0;//start\r\n    let highInterval = arr.length-1;//end\r\n    return sortedArrayToBST(arr,lowInterval,highInterval);\r\n    //return arr;\r\n}\r\n/* A function that constructs Balanced Binary Search Tree \r\n from a sorted array */\r\nfunction sortedArrayToBST(arr,start,end){\r\n    /* Base Case */\r\n    if(start>end){\r\n        return null;\r\n    }\r\n    /* Get the middle element and make it root */\r\n    const middle = Math.floor((start+end)/2);\r\n    //const middle = parseInt((start+end)/2);\r\n    const root = new _newNode_js__WEBPACK_IMPORTED_MODULE_0__.Node(arr[middle]);\r\n    //console.log(root);\r\n    /* Recursively construct the left subtree and make it\r\n    left child of root */\r\n    root.left = sortedArrayToBST(arr,start,middle-1);\r\n    //console.log(root);\r\n    /* Recursively construct the right subtree and make it\r\n    right child of root */\r\n    root.right = sortedArrayToBST(arr, middle + 1, end);\r\n    //console.log(root);\r\n    return root;\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-binary-search-trees-project/./buildTree.js?");

/***/ }),

/***/ "./newNode.js":
/*!********************!*\
  !*** ./newNode.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": () => (/* binding */ Node)\n/* harmony export */ });\n//Build a Node class / factory. It should have an attribute for the data it stores as well as its left and right children.\r\nfunction Node(data){\r\n    this.data = data\r\n    this.left = null\r\n    this.right = null\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-binary-search-trees-project/./newNode.js?");

/***/ }),

/***/ "./prettyPrint.js":
/*!************************!*\
  !*** ./prettyPrint.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prettyPrint\": () => (/* binding */ prettyPrint)\n/* harmony export */ });\n//If you would like to visualize your binary search tree, here is a prettyPrint()\r\n//This function will expect to receive the root of your tree as the value for the node parameter.\r\nconst prettyPrint = (node, prefix = '', isLeft = true) => {\r\n    if (node === null) {\r\n       return;\r\n    }\r\n    if (node.right !== null) {\r\n      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);\r\n    }\r\n    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);\r\n    if (node.left !== null) {\r\n      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-binary-search-trees-project/./prettyPrint.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../newNode.js */ \"./newNode.js\");\n/* harmony import */ var _buildTree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buildTree.js */ \"./buildTree.js\");\n/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../test.js */ \"./test.js\");\n\r\n\r\n\r\n//Build a Tree class / factory which accepts an array when initialized. The Tree class should have a root attribute which uses the return value of buildTree which you’ll write next.\r\nfunction Tree(arr){\r\n    this.root = (0,_buildTree_js__WEBPACK_IMPORTED_MODULE_1__.buildTree)(arr)\r\n    // Write an insert and delete functions which accepts a value to insert/delete (you’ll have to deal with several cases for delete such as when a node has children or not).\r\n    this.insert = function(val,root){\r\n        if(root.data === val.data){\r\n            console.log(`This value already exist in the tree.`);\r\n            return root;\r\n        }else if(val.data < root.data){\r\n            if(root.left === null){\r\n                root.left = val;\r\n            }else{\r\n                this.insert(val,root.left);\r\n            }\r\n        }else if(val.data > root.data){\r\n            if(root.right === null){\r\n                root.right = val;\r\n            }else{\r\n                this.insert(val,root.right);\r\n            }\r\n        }\r\n        return root;\r\n    }\r\n    this.delete = function(val,root){\r\n        // search the val in the node.\r\n        if(val.data === root.data){\r\n            //start the process for the deletion.\r\n            // no children\r\n            if(root.left === null && root.right === null){\r\n                root.data = null;\r\n                //delete root.data;\r\n            // 1 children\r\n            }else if(root.left != null && root.right === null){\r\n                root.data = root.left.data;\r\n                //delete root.left;\r\n                //root.left.data = null;\r\n                root.left = null;\r\n            }else if(root.left === null && root.right != null){\r\n                root.data = root.right.data;\r\n                //root.right.data = null;\r\n                root.right = null;\r\n                //delete root.right;\r\n            // 2 children\r\n            }else if(root.left != null && root.right != null){\r\n                root.data = root.right.data;\r\n                //root.right.data = null;\r\n                root.right = null;\r\n                //delete root.right;\r\n            // successor node\r\n            }else if(root.right.left != null){\r\n                let pointer = root.right;\r\n                let pointerRightChild = null;\r\n                while(pointer.left != null){\r\n                    pointer = pointer.left;\r\n                    // successor node in case of a right child\r\n                    if(pointer.left ===null && pointer.right != null){\r\n                        // save the right child\r\n                        pointerRightChild = pointer.right;\r\n                    }\r\n\r\n                }\r\n                root.data = pointer.data;\r\n                if(pointerRightChild != null){\r\n                    pointer = pointerRightChild;\r\n                }else{\r\n                    pointer = null;\r\n                }    \r\n            }\r\n        }else if(val.data > root.data){\r\n            this.delete(val,root.right);\r\n        }else if(val.data < root.data){\r\n            this.delete(val,root.left);\r\n        }else{\r\n            return `impossible to delete ${val.data} because it is not in the tree.`\r\n        }\r\n\r\n    }\r\n    /* this.find = function(val,root){\r\n        //Write a find function which accepts a value and returns the node with the given value.\r\n        if(root.data == val.data || root == null){\r\n            return root;\r\n        }else if(val.data > root.data){\r\n            if(root.right!=null){\r\n                this.find(val, root.right)\r\n            }\r\n        }else if(val.data < root.data){\r\n            if(root.left!=null){\r\n                this.find(val, root.left);\r\n            }\r\n        }else{\r\n            return `impossible to find node ${val} because it is not in the tree.`\r\n        } */\r\n    this.find = function(value, root = this.root) {\r\n            // Return root if null or matches value\r\n            if (root === null || root.data === value) {\r\n              return root;\r\n            }\r\n      \r\n            // Access root's children if value not found; \r\n            if (value < root.data) {\r\n              return this.find(value, root.left);\r\n            }\r\n            return this.find(value, root.right); \r\n    }\r\n    this.levelOrder = function(arr = [], queue = [], root = this.root) {\r\n        if (root === null) return;\r\n        // Visit the root\r\n        arr.push(root.data);\r\n  \r\n        // Traverse to left and right children -> add to queue\r\n        queue.push(root.left);\r\n        queue.push(root.right);\r\n  \r\n        // Move to next level\r\n        while (queue.length) {\r\n          const level = queue[0];\r\n          queue.shift();\r\n          this.levelOrder(arr, queue, level)\r\n        }\r\n  \r\n        return arr;\r\n    }\r\n    this.inorder = function(arr = [], root = this.root) {\r\n        if (root === null) return;\r\n        \r\n        // Traverse left subtree\r\n        if (root.left) this.inorder(arr, root.left);\r\n        \r\n        // Visit the root\r\n        arr.push(root.data);\r\n        \r\n        // Traverse right subtree\r\n        if (root.right) this.inorder(arr, root.right);\r\n       \r\n        return arr;\r\n      }  \r\n      this.preorder = function(arr = [], root = this.root) {\r\n        if (root === null) return;\r\n        \r\n        // Visit the root\r\n        arr.push(root.data);\r\n        \r\n        // Traverse the left subtree\r\n        if (root.left) this.preorder(arr, root.left);\r\n        \r\n        // Traverse the right subTree\r\n        if (root.right) this.preorder(arr, root.right);\r\n        \r\n        return arr;\r\n      }\r\n      this.postorder = function(arr = [], root = this.root) {\r\n        if (root === null) return;\r\n  \r\n        // Traverse left subtree\r\n        if (root.left) this.postorder(arr, root.left);\r\n        \r\n        // Traverse right subtree\r\n        if (root.right) this.postorder(arr, root.right);\r\n        \r\n        // Visit the root\r\n        arr.push(root.data);\r\n  \r\n        return arr;\r\n    }\r\n    //Write a height function which accepts a node and returns its height. Height is defined as the number of edges in longest path from a given node to a leaf node.\r\n    this.height = function(root = this.root){\r\n        if (root === null) return 0;\r\n  \r\n        let lHeight = this.height(root.left);\r\n        let rHeight = this.height(root.right);\r\n  \r\n        if (lHeight > rHeight) {\r\n          return lHeight + 1;\r\n        } else {\r\n          return rHeight + 1;\r\n        }\r\n    }\r\n}\r\n//---------------Testing----------------\r\n(0,_test_js__WEBPACK_IMPORTED_MODULE_2__.testing)(Tree,_newNode_js__WEBPACK_IMPORTED_MODULE_0__.Node);\r\n// to see what's going on look at the test.js file\n\n//# sourceURL=webpack://odin-binary-search-trees-project/./src/index.js?");

/***/ }),

/***/ "./test.js":
/*!*****************!*\
  !*** ./test.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"testing\": () => (/* binding */ testing)\n/* harmony export */ });\n/* harmony import */ var _newNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newNode.js */ \"./newNode.js\");\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/index.js */ \"./src/index.js\");\n/* harmony import */ var _prettyPrint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prettyPrint.js */ \"./prettyPrint.js\");\n\r\n\r\n\r\nfunction testing(Tree,Node){\r\n    //let data = [50,25,75,10,33,56,89,4,11,30,40,52,61,82,95]\r\n    let data = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];\r\n    let test = new Tree(data);\r\n    //console.log(test);\r\n    //prettyPrint(test.root);\r\n    // [1,3,4,5,7,8,9,23,67,324,6345]//length = 11\r\n    console.log(`Pretty Print console log`);\r\n    (0,_prettyPrint_js__WEBPACK_IMPORTED_MODULE_2__.prettyPrint)(test.root); \r\n    /* console.log(test.root.left.data); */\r\n    const firstInput = new Node(0);\r\n    test.insert(firstInput,test.root);\r\n    console.log(`Pretty Print console log`);\r\n    (0,_prettyPrint_js__WEBPACK_IMPORTED_MODULE_2__.prettyPrint)(test.root);\r\n    const secondInput = new Node(0);\r\n    test.delete(secondInput,test.root);\r\n    console.log(`Pretty Print console log`);\r\n    (0,_prettyPrint_js__WEBPACK_IMPORTED_MODULE_2__.prettyPrint)(test.root);\r\n    const thirdInput = new Node(4);\r\n    //console.log(test.find(thirdInput,test.root));\r\n    console.log(test.find(3));\r\n    console.log(`Breath First`);\r\n    console.log(test.levelOrder());\r\n    console.log(`Depth first`);\r\n    console.log(`Inorder`);\r\n    console.log(test.inorder());\r\n    console.log(`preorder`);\r\n    console.log(test.preorder());\r\n    console.log(`postorder`);\r\n    console.log(test.postorder());\r\n    console.log(`Height Tree`);\r\n    console.log(test.height());\r\n}\r\n\r\n\n\n//# sourceURL=webpack://odin-binary-search-trees-project/./test.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
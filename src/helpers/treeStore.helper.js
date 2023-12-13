const { v4: uuid4 } = require('uuid');

function insertNode(trees, parent, node) {
    const treesCount = trees.length;
    for (let i = 0; i < treesCount; i++) {
        const tree = trees[i];
        const parentId = Object.keys(tree)[0];
        console.log(Object.keys(tree))
    
        if (parent === parentId) {
            tree[parentId].children.push(node);
            return true;
        }

        if (insertNode(tree[parentId].children, parent, node)) {
            return true;
        }
    }

    return false;
}

function generateUniqueId() {
    return uuid4();
}

module.exports = {
    insertNode,
    generateUniqueId,
};
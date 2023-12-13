const { insertNode, generateUniqueId } = require('../helpers/treeStore.helper');
const treeStoreService = require('../services/treeStore.service');

const treeStoreController = {
    getTree: (req, res) => {
        res.status(200).json(treeStoreService.getTree());
    },

    addNode: (req, res) => {
        const respToSend = {};
        const {parent = null, label = null} = req.body;

        if (!label || !parent) {
            respToSend.success = false;
            respToSend.msg = 'Invalid data';
            res.status(400).json(respToSend);
            return;
        }

        const id = generateUniqueId();
        const nodeToInsert = {
            [id]: {
                label,
                children: []
            }
        };
        const data = treeStoreService.getTree();
        const isInserted = insertNode(data, parent, nodeToInsert);

        if (!isInserted) {
            respToSend.success = false;
            respToSend.msg = 'Specidied parent id is not exist';
            res.status(400).json(respToSend);
            return;
        }

        respToSend.success = true;
        respToSend.msg = 'Node inserted successfully';
        res.status(200).json(respToSend);
    }
};

module.exports = treeStoreController;
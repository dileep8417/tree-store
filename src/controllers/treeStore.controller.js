const treeStoreService = require('../services/treeStore.service');

const treeStoreController = {
    getTree: (req, res) => {
        res.status(200).json(treeStoreService.getTree());
    },
};

module.exports = treeStoreController;
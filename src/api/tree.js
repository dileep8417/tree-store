const router = require('express').Router();
const controller = require('../controllers/treeStore.controller');

router.get('/', controller.getTree);

router.post('/', controller.addNode);

module.exports = router;
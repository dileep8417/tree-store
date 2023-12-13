const router = require('express').Router();
const controller = require('../controllers/treeStore.controller');

router.get('/', controller.getTree);

module.exports = router;
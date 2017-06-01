const { Router } = require('express');
const controller = require('./user.controller');

const router = new Router();

router.get('/',  controller.index);
router.get('/:id', controller.getUser);
router.post('/',  controller.create);
router.delete('/:id',  controller.delete);

module.exports = router;
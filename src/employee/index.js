const { Router } = require('express');
const controller = require('./employee.controller');

const router = new Router();

router.get('/',  controller.index);

router.post('/',  controller.create);

router.put('/:id', controller.update);

router.get('/:id', controller.getEmployee);

router.delete('/:id', controller.delete);

module.exports = router;
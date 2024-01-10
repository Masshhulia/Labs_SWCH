const Router = require('express');
const router = new Router();
const worksController = require('../controllers/worksController');

router.get('/works', worksController.getAllWorks);
router.get('/works/:id', worksController.getWorkById);
router.post('/works', worksController.createWork);
router.put('/works/:id', worksController.updateWork);
router.delete('/works/:id', worksController.deleteWork);




module.exports = router;
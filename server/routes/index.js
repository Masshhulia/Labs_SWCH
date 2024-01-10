const { Router } = require('express');
const router = Router();


const employeesRouter = require('./employeesRouter')
const userRouter = require('./userRouter')
const worksRouter = require('./worksRouter')




router.use('/emp', employeesRouter)
router.use('/user', userRouter)
router.use('/job', worksRouter)





module.exports = router;

import express from 'express'
import {homePage,getRegisterPage,register,getUserUpdate,getUpdate,user,getuser,deleteUser,deletePage} from '../controller/userController.js'

const router = express.Router()


router.get('/',homePage)

router.get('/register',getRegisterPage)
router.post('/register',register)

router.post('/update/:id',getUserUpdate)
router.get('/update/:id',getUpdate)

router.get('/getuser',user)
router.post('/getuser',getuser)

router.post('/delete',deleteUser)
router.get('/delete/:id',deletePage)




export default router
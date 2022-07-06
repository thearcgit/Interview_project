
import express from 'express'
import {homePage,getRegisterPage,register,userUpdate,getUpdate,user,getuser,deleteUser,deletePage} from '../controller/userController.js'

const router = express.Router()


router.get('/',homePage)
router.get('/register',getRegisterPage)
router.post('/register',register)
router.patch('/update',userUpdate)
router.get('/update',getUpdate)
router.get('/getuser',user)
router.post('/getuser',getuser)
router.post('/delete',deleteUser)
router.get('/delete',deletePage)




export default router
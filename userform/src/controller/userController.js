import userModel from "../models/userModel.js"

// Register POst API...............
export const register = async (req,res,next) => {
   try {    
    const user = new userModel({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age,
        DOB:req.body.date
    })
    const registered = await user.save()
    res.status(201).render('index')
    console.log(registered)

   } catch (error) {
    console.log('post error is',error)
    
   }
}

// getting user post API........
export const getuser = async (req,res) => {
    const getUser = await userModel.findOne(req.params.name)
    res.render('getUser',{user:getUser})
}
// Getting user Get API.........
export const user =  (req,res) => {    
    res.status(201).render('getuser')
}

// update post API .............
export const getUserUpdate = async (req,res) => {
    const updateUser = await userModel.findByIdAndUpdate(req.params.id,req.body)
    res.status(201).render('index',{updatedUser:'User Updated Successfully'})
}
// update get API.........
export const getUpdate =async (req,res,next) => {
    const updateUser = await userModel.findById(req.params.id)
    console.log(updateUser)    
    res.render('update',{updateUser:updateUser})
}

// delete user.......
export const deleteUser = async (req,res) => {
    try {
        const deletedUser = await userModel.deleteOne(req.params.name)
        res.status(200).redirect('index',{deleteMsg : "Item Deleted Successfully !"})

    } catch (error) {
        console.log('delete error is',error)        
    }
}
export const deletePage = async (req,res,next) => {
    const deleteUser = await userModel.findById(req.params.id)
    res.render('delete',{deleteUser:deleteUser})
}


export const homePage =async (req,res,next) => {
    const registerdUser = await userModel.find()
    res.render('index',{users:registerdUser})
}

export const getRegisterPage = (req,res,next) => {    
    res.render('register')
}





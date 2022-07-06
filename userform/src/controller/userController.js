import userModel from "../models/userModel.js"



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

    // res.send({
    //     ...req.body
    // })
    
   } catch (error) {
    console.log('post error is',error)
    
   }
}


export const getuser = async (req,res) => {
    const getUser = await userModel.findOne(req.params.name)
    res.status(201).send(getUser)
}

export const user = async (req,res) => {    
    res.status(201).render('getuser')
}

export const userUpdate = async (req,res) => {
    const updatedUser = await userModel.findOne(req.body.id,req.body)
    res.status(201).render('index')
}


export const homePage = (req,res,next) => {
    res.render('index')
}


export const getUpdate = (req,res,next) => {
    res.render('update')
}

export const getRegisterPage = (req,res,next) => {
    res.render('register')
}


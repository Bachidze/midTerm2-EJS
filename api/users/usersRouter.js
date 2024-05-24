const { Router } = require("express")

const usersRouter = Router()
const users = [
    {
        id:1,
        name:"Gio",
        lastName:"Bachidze",
        age:21,
        isSmoker:false
    },
    {
        id:2,
        name:"Davit",
        lastName:"Diasamidze",
        age:22,
        isSmoker:false
    },
    {
        id:3,
        name:"Ilia",
        lastName:"Tsiklauri",
        age:19,
        isSmoker:false
    },
]

usersRouter.get('/',(req,res) => {
    res.json({success:true,data:users})
})

usersRouter.post("/",(req,res) => {
    const userBody = req.body
    if(!userBody.name || userBody.age)res.json({success:true,data:userBody,message:"age and name is required"})
        const lastId = users[users.length - 1]?.id || 0
    const newUSer = {
        ...userBody,
        id:lastId + 1,
    }
    users.push(newUSer)
    data.json({success:true,data:newUSer})
})

usersRouter.delete("/:id",(req,res) => {
    const { id } = req.params
    const index = users.findIndex(el => el.id === Number(id))
    if(index === - 1) res.json({success:false,data:null})
      const deletedUser =  users.splice(index,1)
    res.json({success:true, data:deletedUser})
})

module.exports = {usersRouter,users}
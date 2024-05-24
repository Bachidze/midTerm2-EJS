const { Router } = require("express")
const {usersRouter} = require("./users/usersRouter")

const apiRouter = Router()

apiRouter.use("/users",usersRouter)


module.exports = apiRouter
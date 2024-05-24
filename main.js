const express = require("express")
const apiRouter = require("./api/apiRouter")
const app = express()
const PORT = 3000
const {users} = require("./api/users/usersRouter")


app.use(express.json())
app.set("view engine","ejs")
app.use("/api",apiRouter)

app.get("/",(req,res) => {
    res.render("pages/home.ejs",{users})
})

app.get("/expenses/:id",(req,res) => {
    const { id } = req.params
    const user = users.find(el => el.id === Number(id))
    res.render("pages/expenses.ejs",{user})
})

app.listen(PORT,() => {
    console.log(`running on http://localhost:${PORT}`)
})
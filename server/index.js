import express, { json } from "express"
import cors from "cors"
import fs from "fs"
import { log } from "console"

const app = express()
const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.get("/data", (req, res) => {

    const data = fs.readFileSync("./data/compaines.json", "utf-8")

    return res.send(data)
})
app.get("/employee/:eid", (req, res) => {
    console.log(req.params);
    const data = fs.readFileSync("./data/compaines.json", "utf-8");
    const employeeData = JSON.parse(data).filter((ele) => ele.student_id === Number(req.params.eid))

    res.status(200).send(employeeData)
})
app.get("/friends", (req, res) => {
    const friends = fs.readFileSync("./data/freinds.json", "utf-8")
    res.status(200).send(JSON.parse(friends))
})
app.get("/user/:email", (req, res) => {
    const { email } = req.params;
    log(email)
    const user = fs.readFileSync("./data/user.json", "utf-8");
    const foundUser = JSON.parse(user).filter(user => user.email === email)
    res.status(200).send(foundUser[0])
})
app.get("/courses/:channelId", (req, res) => {
    const { channelId } = req.params;
    const channels = fs.readFileSync("./data/channel.json");
    const channel = JSON.parse(channels).filter(channel => channel.id === channelId)
    res.status(200).send(channel[0])
})
app.post("/post", (req, res) => {
    const { d: data } = req.body
    fs.appendFile("./data/postdata.txt", data, (err) => {
        console.log("appended successfully");

    })
    res.status(200).send({ msg: "written succssfully" })
})
app.get("/pdata", (req, res) => {
    const data = fs.readFileSync("./data/postdata.txt", "utf-8")
    res.status(200).send({ val: data })
})
app.listen(3000, () => {
    console.log(`being listen on port number ${PORT}`);
})





const express = require('express')
const cors = require("cors");
require('dotenv').config()
const app = express()
const PORT = 5000
app.use(
    cors({
        exposedHeaders: ["Content-Length", "tokenAccess", "tokenRefresh"],
    })
)
const bearerToken = require("express-bearer-token")
app.use(bearerToken())


const morgan = require('morgan')
morgan.token("date", function (req, res) {
    return new Date();
  });
  
app.use(
morgan(":method :url :status :res[content-length] - :response-time ms :date")
);



app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//? menyediakan file statis
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.send("<h1>selamat datang di API 1.0 EmerceApi</h1>")
})
const { AuthRoutes } = require("./src/routes");
app.use("/auth", AuthRoutes);

app.all("*", (req, res) => {
    res.status(404).send("resource not found");
});
  


app.listen(PORT,() => console.log("listen in port " + PORT))
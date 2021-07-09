require("dotenv").config();
const express = require("express");
const app = express();
const router = express.Router();
const fetch = require('node-fetch');
// ------------- Start Get Arabic News From CNN -------------------//
router.get("/cnn", async (req, res) => {
    const url = `https://newsapi.org/v2/everything?domains=cnn.com&language=ar&apiKey=${process.env.API_KEY}`
    try {
        await fetch(url)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                res.json(data);
            })
    } catch (err) {
        console.log(err)
    }
});
// ------------- END Get Arabic News From CNN -------------------//
// ------------- Start Get Arabic News From BBC -------------------//
router.get("/bbc", async (req, res) => {
    const url = `https://newsapi.org/v2/everything?domains=bbc.com&language=ar&apiKey=${process.env.API_KEY}`
    try {
        await fetch(url)
            .then(res => res.json())
            .then((data) => {
                res.json(data);
            })
    } catch (err) {
        console.log(err)
    }
});
// ------------- END Get Arabic News From BBC -------------------//
// ------------- Start Get English News For Egypt  -------------------//
router.get("/Egypt", async (req, res) => {
    const url = `https://newsapi.org/v2/top-headlines?country=EG&apiKey=${process.env.API_KEY}`
    try {
        await fetch(url)
            .then(res => res.json())
            .then((data) => {
                res.json(data);
            })
    } catch (err) {
        console.log(err)
    }
});
// ------------- END Get English News For Egypt -------------------//



app.use("/api", router);


app.listen(process.env.PORT, () => console.log(`server run on ${process.env.PORT}`))
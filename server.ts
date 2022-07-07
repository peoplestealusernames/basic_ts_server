import express from 'express'
import { readFileSync } from 'fs'
import path from 'path';
const app = express()
const port = 3005

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/src/index.html'));
});

//app.use("/js", express.static('/src/js'))
app.use(express.static('src'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
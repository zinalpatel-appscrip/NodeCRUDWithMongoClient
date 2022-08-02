const express = require('express');
const router = require('./router/students')
// const router = new express.Router()
// const dbConnect = require('./conn')

const app = express();
const port = 3000;

app.use(express.json())

// router.get('/home', (req,res) => {
//     res.send("Done")
// })

app.use(router)

app.listen(port, () => {
    console.log(`Connection is at ${port}`);
})

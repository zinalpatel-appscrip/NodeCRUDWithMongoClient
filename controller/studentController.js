
const dbConnect = require('../conn')
const mongodb = require('mongodb');


module.exports = {
    readData :  async (req,res) => {
        let data = await dbConnect()
        data = await data.find().toArray()
        // console.log(data)
        res.send(data)
    },
    insertData : async (req, res) => {
        try{
            const db = await dbConnect()
            const result = await db.insertMany([req.body])
    
            if(result.acknowledged)
            {
                // console.log("Data Inserted!!")
                res.send("Data Inserted!!")
            }
        }catch(e){
            if(e.code === 11000)
                res.send("This email is already in use")
            else
                console.log(e)
        }
    },
    updateData : async (req, res) => {
        const db = await dbConnect()
        let result = await db.updateOne({'name': req.params.name} , {$set: req.body})
        res.send(result)
    },
    deleteData : async (req, res) => {
        const db = await dbConnect()
        let result = await db.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
        if(result.acknowledged){
            console.log("data deleted")
        }
        res.send(result)
    }
}
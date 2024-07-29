const router = require("express").Router()
const MenuItem = require("../models/MenuItem")

router.post("/additem", async (req,res)=>{
    try{
        const newItem = new MenuItem({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price
        })

        const item = await newItem.save();
        res.status(200).json(item);
    } catch (err) {
        // Added consistent JSON structure for error handling
        res.status(500).json(err);
        //console.log(err);
    }
    

})

module.exports = router;
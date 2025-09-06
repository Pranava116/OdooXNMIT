import express from 'express'
import cardModel from '../models/CardModel.js'
const router = express.Router()

router.put("/", async(req, res) => {
    try{
        const response = await cardModel.find({userOwner: req.body.UserID})
        return res.json(response)
    }catch(error){
        return res.json(error)
    }
})

export {router as ListingRouter}
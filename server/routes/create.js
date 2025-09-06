import express from 'express';
import cardModel from '../models/CardModel.js';

const router = express.Router();

router.put("/",  async(req, res) => {
    try {
        const {img, title, cat, desc, quantity, cond, yom, brand, model, dimension, weight,material,color,working,price, userID} = req.body;
        if(img == "" || title =="" || cat=="" || price=="" || userID == ""){
            return res.json({message: "Fill up all the fields"})
        }
        const newCard = new cardModel({
        img: img,
        title: title,
        cat: cat,
        desc: desc,
        quantity: quantity,
        condition: cond,
        yom: yom,
        brand: brand,
        model: model,
        dimension: dimension,
        weight: weight,
        material: material,
        color:color,
        working_cond_desc: working,
        price: price,
        userOwner: userID
    })
    await newCard.save();
    return res.status(200).json({message: "Succesfully added"})
    } catch (error) {
        console.log(error)
    }
})

export {router as CreateRouter}
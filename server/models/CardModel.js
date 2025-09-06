import mongoose, { Schema } from "mongoose";

const CardModel = new Schema({
    img: String,
    title: String,
    cat: String,
    desc: String,
    quantity: Number,
    condition: String,
    yom:Number,
    brand: String,
    model: String,
    dimension: String,
    weight: Number,
    material: String,
    color: String,
    // op: false,
    // instuct_inc: false,
    working_cond_desc: String,
    price: Number,
    userOwner:{type: mongoose.Types.ObjectId, ref: "users"}
    
    
})
const cardModel = mongoose.model("cardModel", CardModel)
export default cardModel;
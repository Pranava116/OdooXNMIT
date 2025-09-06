import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ItemDetails.css'
function Details() {
    const [vals,  setVals] = useState({
        _id: "",
        img: "",
        title: "",
        cat: "",
        desc: "",
        quantity: "",
        cond:"",
        yom:"",
        brand:"",
        model:"",
        dimension: "",
        weight:"",
        material:"",
        color:"",
        working:"",
        price:"",

    })
    const UserID = window.localStorage.getItem("UserID")
    const {id} = useParams() 
    async function handleDetails(e){
    
    const response = await axios.put(`http://localhost:5000/listing/${id}`)
    setVals(response.data[0]);
    console.log(response)
    console.log(setVals)
    
  }
  async function AddCart(e){
    console.log(vals._id)
    const response = await axios.put('http://localhost:5000/carts', {user_id: UserID, cart_id: vals._id}, { headers: { "Content-Type": "application/json" }})
    console.log(response)
  }
  useEffect(() => {
    handleDetails()
  }, [])
  return (
   
     <div className="page-center">
      <div className="seemore-container">
        {/* Display image from link */}
        {vals.img && (
          <img
            src={vals.img}
            alt={vals.title}
            className="seemore-img"
          />
        )}

        <div className="seemore-grid">
          <div className="seemore-block">
            <h1 className="seemore-title">Title: {vals.title}</h1>
            <h2 className="seemore-date">Catgory: {vals.cat}</h2>
            <h2 className="seemore-venue">Desc: {vals.desc}</h2>
            <h1 className="seemore-title">Qantity: {vals.quantity}</h1>
          </div>

          <div className="seemore-block">
            <h3 className="seemore-desc">Condition: {vals.cond}</h3>
            <h2 className="seemore-date">Year Of Manufacture: {vals.yom}</h2>
            <h2 className="seemore-venue">Brand: {vals.brand}</h2>
            <h1 className="seemore-title">Model: {vals.model}</h1>
          </div>

          <div className="seemore-block">
            <h3 className="seemore-desc">Dimensions: {vals.dimensions}</h3>
            <h2 className="seemore-date">Weight: {vals.weight}</h2>
            <h2 className="seemore-venue">Material: {vals.material}</h2>
            <h1 className="seemore-title">Color: {vals.color}</h1>
          </div>

          <div className="seemore-block">
            <h3 className="seemore-desc">Working: {vals.working}</h3>
            <h2 className="seemore-date">Price: {vals.price}</h2>
          </div>

          <button onClick={AddCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Details
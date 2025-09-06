import React from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
function Listing() {
    const [card, setCards] = useState([])
   async function GetValue(e){
    const UserID = window.localStorage.getItem("UserID")
   
    const response =  await axios.put("http://localhost:5000/listing", {UserID})
    setCards(response.data)
    console.log(response)
  }
    useEffect(() => {
      GetValue()
    }, [])
  
  return (
    <div>
      <div className='card-wrapper'>
        <h1>{card.img}</h1>
        {card.map(({img, name, url, price, _id}) => {
          return(
          <Card name = {name} img = {img} url = {url} price ={price} _id = {_id}/>
          )
        })}
      </div>
    </div>
  )
}

export default Listing

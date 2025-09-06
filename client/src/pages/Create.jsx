import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Create.css'
import Navbar from '../components/Navbar';


function Create() {
    const [formData, setFormData] = useState({
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
    
    const navigate = useNavigate()
    function handleChange(e) {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
}


    async function SubmitValues(e){
        e.preventDefault();
        try {
            const response = await axios.put("http://localhost:5000/create",{ ...formData,
  userID} )
            alert(response.data.message)
            navigate("/")
        } catch (error) {
            
        }
    }
    const userID = window.localStorage.getItem("UserID")
    
    
  return (
<div>
    <Navbar/>
    <div className='main-create-wrapper'>
        <form className='card-info'>
            <input name='img' className='subscribe-img' onChange={handleChange} value={formData.img} placeholder='Imageurl'/>
            <input name='title'className='subscribe-title' onChange={handleChange} value={formData.title} placeholder='Title'/>
            <input name='cat' className='subscribe-cat' onChange={handleChange} value={formData.cat} placeholder='Category'/>
            <input name='desc' className='subscribe-desc' onChange={handleChange} value={formData.desc} placeholder='Description' />
            <input name='quantity' className='subscribe-price' onChange={handleChange} value={formData.quantity} placeholder='Quantity'/>
            <input name='cond' className='subscribe-price' onChange={handleChange} value={formData.condition} placeholder='Condition'/> 
            <input name='yom' className='subscribe-price' onChange={handleChange} value={formData.yom} placeholder='Year Of Manufacture'/> 
            <input name='brand' className='subscribe-price' onChange={handleChange} value={formData.brand} placeholder='Brand'/> 
            <input name='model' className='subscribe-price' onChange={handleChange} value={formData.model} placeholder='Model'/> 
            <input name='dimension' className='subscribe-price' onChange={handleChange} value={formData.dimension} placeholder='Dimensions'/> 
            <input name='weight' className='subscribe-price' onChange={handleChange} value={formData.weight} placeholder='Weight'/> 
            <input name='material' className='subscribe-price' onChange={handleChange} value={formData.material} placeholder='Material'/> 
            <input name='color' className='subscribe-price' onChange={handleChange} value={formData.color} placeholder='Color'/> 
            <input name='working' className='subscribe-price' onChange={handleChange} value={formData.working} placeholder='Working'/> 
            <input name='price' className='subscribe-price' onChange={handleChange} value={formData.price} placeholder='Price'/> 

            <button className='card-submit' onClick={SubmitValues}>Submit</button>
        </form>
        
    </div>
   
</div>
  )
}

export default Create

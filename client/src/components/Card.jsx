import React from 'react'
import '../components/Card.css'
import axios from 'axios';
import {Link} from 'react-router-dom'
function Card(props) {
  async function DeleteCard(e){
    console.log(e.target.id)
    const response = await axios.delete(`http://localhost:5000/${e.target.id}`)
    console.log(response)
    window.location.reload()
  }
  
    return(
    <div className='main-card-wrapper'>
        <div className='card'>
            <img src={props.img} alt='idk' className='card-image' height={260} width={260} />
            
            <p>{props.name}</p>
            <p>{props.price}</p>
            <Link to={`/details/${props._id}`}>Details</Link>
        </div>
    </div>
    )
}


export default Card
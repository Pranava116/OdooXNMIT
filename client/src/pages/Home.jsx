import React, { useEffect, useState } from 'react'
import Card from '../components/Card.jsx'
import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
function Home() {
  const [cards, setCards] = useState([])
  const [cookies,setCookies] = useCookies(["access_token"])
  const navigate = useNavigate()
   function logout(){
    setCookies("access_token", "")
    window.localStorage.removeItem("UserID")
    window.location.reload()
    navigate("/")
  }

   async function GetValue(e){
    const UserID = window.localStorage.getItem("UserID")
   
    const response =  await axios.put("http://localhost:5000/", )
    setCards(response.data)
    console.log(response)
  }

  useEffect(() => {
    GetValue()
  }, [])

  return (
    <div className='home-wrapper'>
      <div className='navbar-wrapper'>
        {/* <div className='new-navbar-wrapper'>
          <Navbar />
        </div> */}
        <div className='button-div'>
        {!cookies.access_token ? (<></>) : (<button className='create-sub'><Link className='create-sub-link' to="/create">Add Subscription</Link></button>)}
        {!cookies.access_token ? (<></>): (<button className='my-listings'><Link className='my-listing' to="/listing">My Listings</Link></button>)}
        {!cookies.access_token ? (<button className='login-btn'><Link className="login-link" to={"/auth"}> Login / Register </Link></button>) : (<button className='logout-btn' onClick={logout}>Logout</button>)}
        </div>
      </div>
        <div className='card-wrapper'>
        {cards.map(({img, name, url, price, _id}) => {
          return(
          <Card name = {name} img = {img} url = {url} price ={price} _id = {_id}/>
          )
        })}
        {!cookies.access_token ? (<p className='unauth-msg'>Login / Register to Add Cards</p>) : (<></>)}

        </div>
    </div>
  )
}

export default Home


//        <button className='create-sub'><Link className='create-sub-link' to="/create">Add Subscription</Link></button>

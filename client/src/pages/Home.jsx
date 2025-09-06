import React, { useEffect, useState } from 'react';
import Card from '../components/Card.jsx';
import './Home.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [cards, setCards] = useState([]);
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  // Logout function
  function logout() { 
    setCookies("access_token", "");
    window.localStorage.removeItem("UserID");
    window.location.reload();
    navigate("/");
  }

  // Fetch cards for the user
  async function GetValue() {
    const UserID = window.localStorage.getItem("UserID");
    try {
      const response = await axios.put("http://localhost:5000/", { UserID });
      setCards(response.data);
    } catch (error) {
      console.error("Failed to fetch cards:", error);
    }
  }

  useEffect(() => {
    GetValue();
  }, []);

  return (
    <div className='home-wrapper'>
      {/* Navbar */}
      <div className='navbar-wrapper'>
        {/* Eco-Finds logo */}
        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-icon">🌿</div>
          Eco-Finds
        </Link>

        {/* Buttons aligned to left of navbar */}
        <div className='button-div'>
          {!cookies.access_token ? null : (
            <button className='create-sub'>
              <Link className='create-sub-link' to="/create">Add Subscription</Link>
            </button>
          )}
          {!cookies.access_token ? null : (
            <button className='my-listings'>
              <Link className='my-listing' to="/listing">My Listings</Link>
            </button>
          )}
          {!cookies.access_token ? null : (
            <button>
              <Link to="/cart">Cart</Link>
            </button>
          )}
          {!cookies.access_token ? (
            <button className='login-btn'>
              <Link className="login-link" to={"/auth"}>Login / Register</Link>
            </button>
          ) : (
            <button className='logout-btn' onClick={logout}>Logout</button>
          )}
        </div>
      </div>

      {/* Card container */}
      <div className='card-wrapper'>
        {cards.map(({ img, name, url, price, _id }) => (
          <Card key={_id} name={name} img={img} url={url} price={price} _id={_id} />
        ))}
        {!cookies.access_token && (
          <p className='unauth-msg'>Login / Register to Add Cards</p>
        )}
      </div>
    </div>
  );
}

export default Home;

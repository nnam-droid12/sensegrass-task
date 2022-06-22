import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import GraphImage from '../../assets/google-maps1.jpg';
import './Welcome.css';



const WelcomePage = () =>{

  const [maplocation, setMaplocation] = useState('');

  let welcomenavigate = useNavigate();

    const SignOut = async () =>{
        try{
          await Auth.signOut();
           welcomenavigate('/')
        }catch(error){
         console.log('error signing out',error);
        }
      }

      

      useEffect(() => {
        const getMapLocation = async () =>{
        const mapData = await fetch('http://localhost:5000/maplocations', {
          method: 'GET',
          headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });
        const mapjsonData = await mapData.json();
        setMaplocation(mapjsonData);
        console.log(mapjsonData);
      }
        getMapLocation();
      },[])


    return(
    <div className='welcome-body'>
      <button className='button' onClick={SignOut}>
        Sign Out
      </button>
        <h2 className='welcome-header'>Welcome to Sensegrass</h2>
        <div className='maplocation'>
        <img src={GraphImage} alt='graph' className='graph-image' />
        <h3>{maplocation.country}</h3>
        <h3>{maplocation.city}</h3>
        </div> 
    </div>
    );
}

export default WelcomePage;
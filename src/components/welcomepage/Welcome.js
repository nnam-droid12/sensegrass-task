import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import MapImage from '../../assets/google-maps1.jpg';
import './Welcome.css';



const WelcomePage = () =>{

  const [maplocation, setMaplocation] = useState('');
  const [user, setUser] = useState(null);

  let welcomenavigate = useNavigate();

    const SignOut = async () =>{
        try{
          await Auth.signOut();
           welcomenavigate('/')
        }catch(error){
         console.log('error signing out',error);
        }
      }


      useEffect(() =>{
        CheckLoggedInState();
      }, [])
    
      const CheckLoggedInState =  () =>{
        Auth.currentAuthenticatedUser()
          .then(currentUser => setUser(currentUser.CognitoUser))
          .catch(() => console.log("Not signed in"));
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
        setMaplocation(mapjsonData.data);
      }
        getMapLocation();
      },[])


    return(
    <div className='welcome-body'>
      <button className='button' onClick={SignOut}>
        Sign Out 
      </button>
        <h2 className='welcome-header'>Welcome to Sensegrass {user}</h2>
        
        {
          maplocation.length ?
          <div className='maplocation'>
          <div className='maplocation-image'>
            <img src={MapImage} alt='graph' style={{width:'100%',height:'100%'}} />
          </div>
          {
            maplocation.map((i) => 
             <div className='map-data' key={i.id}>
              <h3 className='map-country'>{i.country}</h3>
              <h3 className='map-city'>{i.city}</h3>
             </div>
            )
          }
        

        </div> 
         : null
        }
        
       
    </div>
    );
}

export default WelcomePage;
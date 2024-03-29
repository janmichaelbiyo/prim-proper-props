import axios from 'axios';
import { useEffect, useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import GuestList from '../GuestList/GuestList';
import GuestForm from '../GuestForm/GuestForm';
import PartyLeader from '../PartyLeader/PartyLeader';


import './App.css';
import DinnerSupplies from '../DinnerSupplies/DinnerSupplies';



function App() {
  let [guestList, setGuestList] = useState([]);

  

  //On load, get guests

 
  useEffect(() => {
    getGuests()
  }, [])


  const getGuests = () => {
    axios.get('/api/guests')
      .then(response => {
        setGuestList(response.data)
      })
      .catch(err => {
        alert('error getting guests');
        console.log(err);
      })
  }

 

   

  

  return (
    <div className="App">

      < Header />
      
      <PartyLeader leader={guestList[0]}/>
      <GuestForm getGuests={getGuests}/>

      <GuestList guestList={guestList} />
      
      <DinnerSupplies guestList={guestList}/>
      
      <Footer />
    </div>
  );
}

export default App;

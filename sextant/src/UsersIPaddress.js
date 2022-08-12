// import React from 'react';
import './App.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';

function UsersIPaddress() {
  //creating IP state
  const [ip, setIP] = useState('');
  const [ipV6, setIPv6] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/');
    console.log(res.data);
    setIP(res.data.IPv4);
    const resIPV6 = await axios.get('https://geolocation-db.com/json/');
    console.log(resIPV6.data);
    setIPv6(resIPV6.data.IPv6);
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

  return (
    <div className="UsersIPaddress">
      <h4>{ip}</h4>
      <h4>{ipV6}</h4>
    </div>
  );
}

export default UsersIPaddress;
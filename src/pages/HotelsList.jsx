import React, { useState, useEffect } from 'react';
import { fetchHotels } from '../api';
import "../css/HotelList.scss"

function HotelsList() {
   const [hotels, setHotels] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
       fetchHotels()
           .then((data) => {
               setHotels(data);
               setLoading(false);
           })
           .catch((error) => {
               console.error("Error fetching hotels:", error);
               setLoading(false);
           });
   }, []);

   if (loading) {
       return <div className="loading">Loading hotels...</div>;
   }

   return (
       <div className="hotels-list">
           <h1>Hotels List</h1>
           <div className="outer-card">
               {hotels.map((hotel) => (
                   <div
                       className="card"
                       key={hotel.id}
                   >
                       <img
                           src={hotel.imageUrl}
                           alt={hotel.name}
                       />
                       <h2>{hotel.name}</h2>
                       <p>{hotel.location}</p>
                       <p>Rating: {hotel.rating}</p>
                       <a href={`/hotels/${hotel.id}`}>
                           View Details
                       </a>
                   </div>
               ))}
           </div>
       </div>
   );
}

export default HotelsList;

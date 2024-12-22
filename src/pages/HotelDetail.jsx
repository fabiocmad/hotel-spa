import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchHotelById } from '../api';
import "../css/HotelDetail.scss"; 

function HotelDetail() {
    const { id } = useParams(); // Extract hotel ID from the URL
    const navigate = useNavigate(); // For redirecting in case of errors
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchHotelById(id)
            .then((data) => {
                setHotel(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="loading-details">Loading hotel details...</div>;
    }

    if (error) {
        return (
            <div>
                <p>{error}</p>
                <button onClick={() => navigate('/hotels')}>Go Back to Hotels List</button>
            </div>
        );
    }

    return (
        <div className="hotel-detail">
            <button onClick={() => navigate('/hotels')} className="back-button">
                Go Back to Hotels List
            </button>
            <h1>{hotel.name}</h1>
            <img
            src={hotel.imageUrl}
            alt={hotel.name}
            />

            <div className="hotel-info">
            <div>Location: {hotel?.location}</div>
            <div>Rating: {hotel?.rating}</div>
            <div>Travel Dates: {hotel?.datesOfTravel.join(' - ')}</div>
            <div>Board Basis: {hotel?.boardBasis}</div>
            <h2>Rooms</h2>
            <ul>
                {hotel.rooms.map((room, index) => (
                    <li key={index}>
                        {room?.roomType} - {room?.amount} available
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
}

export default HotelDetail;

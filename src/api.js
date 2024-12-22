const hotels = [
    {
    "id": 1,
    "name": "Seaside Paradise",
    "location": "Maldives",
    "rating": 4.9,
    "imageUrl": "https://media.hotel7dublin.com/image/upload/v1709239719/Uploads/Belvedere/Belvedere_Hotel_Dublin_Superior_Double_Room_combining_modern_style_with_Georgian_period_details_2589649_6b4e9502ec.jpg",
    "datesOfTravel": ["2024-01-01", "2024-01-07"],
    "boardBasis": "All Inclusive",
    "rooms": [
    {
    "roomType": "Deluxe Suite",
    "amount": 5
    },
    {
    "roomType": "Family Room",
    "amount": 3
    }
    ]
    },
    {
    "id": 2,
    "name": "Mountain Retreat",
    "location": "Swiss Alps",
    "rating": 4.7,
    "imageUrl": "https://www.centralhoteltullamore.com/upload/slide_images/central-hotel-tullamore-twin-room.jpg",
    "datesOfTravel": ["2024-02-15", "2024-02-22"],
    "boardBasis": "Bed & Breakfast",
    "rooms": [
    {
    "roomType": "Standard Room",
    "amount": 10
    }
    ]
    },
    {
    "id": 3,
    "name": "Urban Oasis",
    "location": "New York City, USA",
    "rating": 4.5,
    "imageUrl": "https://www.brookshotel.ie/files-sbbasic/ba_brooks_ie/hotel_exterior.jpg",
    "datesOfTravel": ["2024-03-10", "2024-03-17"],
    "boardBasis": "Room Only",
    "rooms": [
    {
    "roomType": "Luxury Suite",
    "amount": 2
    },
    {
    "roomType": "Standard Room",
    "amount": 20
    }
    ]
    },
    {
    "id": 4,
    "name": "Desert Dream",
    "location": "Dubai, UAE",
    "rating": 4.8,
    "imageUrl": "https://www.intechnic.com/hubfs/Blog/Featured%20Images/Best%20Hotel%20Website%20Designs.jpg",
    "datesOfTravel": ["2024-04-01", "2024-04-10"],
    "boardBasis": "Half Board",
    "rooms": [
    {
    "roomType": "Luxury Villa",
    "amount": 10
    },
    {
    "roomType": "Family Room",
    "amount": 5
    }
    ]
    },
    {
    "id": 5,
    "name": "Tropical Escape",
    "location": "Bali, Indonesia",
    "rating": 4.6,
    "imageUrl": "https://w-hotels.marriott.com/wp-content/uploads/2024/03/W_HOTELS_mobile-hero-v3-unionsq.jpg",
    "datesOfTravel": ["2024-05-01", "2024-05-10"],
    "boardBasis": "All Inclusive",
    "rooms": [
    {
    "roomType": "Beach Villa",
    "amount": 8
    },
    {
    "roomType": "Garden Room",
    "amount": 12
    }
    ]
    },
    {
    "id": 6,
    "name": "Historic Haven",
    "location": "Rome, Italy",
    "rating": 4.4,
    "imageUrl": "https://w-hotels.marriott.com/wp-content/uploads/2024/03/W_HOTELS_mobile-hero-v3-unionsq.jpg",
    "datesOfTravel": ["2024-06-01", "2024-06-07"],
    "boardBasis": "Breakfast Included",
    "rooms": [
    {
    "roomType": "Classic Room",
    "amount": 15
    },
    {
    "roomType": "Luxury Suite",
    "amount": 5
    }
    ]
    },
    {
    "id": 7,
    "name": "Safari Lodge",
    "location": "Serengeti, Tanzania",
    "rating": 4.9,
    "imageUrl": "https://w-hotels.marriott.com/wp-content/uploads/2024/03/W_HOTELS_mobile-hero-v3-unionsq.jpg",
    "datesOfTravel": ["2024-07-10", "2024-07-20"],
    "boardBasis": "Full Board",
    "rooms": [
    {
    "roomType": "Luxury Tent",
    "amount": 10
    },
    {
    "roomType": "Family Suite",
    "amount": 3
    }
    ]
    },
    {
    "id": 8,
    "name": "Ocean Breeze",
    "location": "Gold Coast, Australia",
    "rating": 4.3,
    "imageUrl": "https://w-hotels.marriott.com/wp-content/uploads/2024/03/W_HOTELS_mobile-hero-v3-unionsq.jpg",
    "datesOfTravel": ["2024-08-01", "2024-08-10"],
    "boardBasis": "Self Catering",
    "rooms": [
    {
    "roomType": "Ocean View Suite",
    "amount": 6
    },
    {
    "roomType": "Family Room",
    "amount": 8
    }
    ]
    },
    {
    "id": 9,
    "name": "Rainforest Retreat",
    "location": "Costa Rica",
    "rating": 4.7,
    "imageUrl": "https://w-hotels.marriott.com/wp-content/uploads/2024/03/W_HOTELS_mobile-hero-v3-unionsq.jpg",
    "datesOfTravel": ["2024-09-01", "2024-09-15"],
    "boardBasis": "All Inclusive",
    "rooms": [
    {
    "roomType": "Jungle Bungalow",
    "amount": 7
    },
    {
    "roomType": "Standard Room",
    "amount": 10
    }
    ]
    },
    {
    "id": 10,
    "name": "Island Bliss",
    "location": "Hawaii, USA",
    "rating": 4.8,
    "imageUrl": "https://w-hotels.marriott.com/wp-content/uploads/2024/03/W_HOTELS_mobile-hero-v3-unionsq.jpg",
    "datesOfTravel": ["2024-10-01", "2024-10-10"],
    "boardBasis": "Full Board",
    "rooms": [
    {
    "roomType": "Beachfront Suite",
    "amount": 12
    },
    {
    "roomType": "Standard Room",
    "amount": 15
    }
    ]
    }
   ]

   export function fetchHotels() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(hotels), 500); // Simulate network delay
    });
}

export function fetchHotelById(id) {
    return new Promise((resolve, reject) => {
        const hotel = hotels.find((hotel) => hotel.id === parseInt(id));
        setTimeout(() => {
            if (hotel) {
                resolve(hotel);
            } else {
                reject("Hotel not found");
            }
        }, 500); // Simulate network delay
    });
}

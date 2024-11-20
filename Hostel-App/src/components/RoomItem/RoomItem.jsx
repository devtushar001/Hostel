import React from "react";
import './RoomItem.css';
import {Link} from 'react-router-dom';


const RoomItem = (props) => {
  const { id, name, type, maxOccupancy, size, amenities, description, bathroom, view, location, photos, price, reviews, bookingPolicy, reviewCount, bookingTime, checkInTime, checkOutTime } = props;
  return (
    <>
      <div className="item">
        <Link to={`/room/${id}`}>
          <div className="room-details">
            <h2 className="room-name">{name}</h2>
            <div className="room-info">
              <p><strong>Type:</strong> {type}</p>
              <p><strong>Price:</strong> {price}</p>
              <p><strong>Max Occupancy:</strong> {maxOccupancy}</p>
              <p><strong>Size:</strong> {size}</p>
            </div>

            <section className="amenities-section">
              <h3>Amenities</h3>
              <ul className="amenities-list">
                {amenities.map((amenity, index) => (
                  <li key={index}>{amenity}</li>
                ))}
              </ul>
            </section>

            <section className="description-section">
              <h3>Description</h3>
              <p>{description}</p>
            </section>

            <section className="bathroom-section">
              <h3>Bathroom</h3>
              <p>{bathroom}</p>
            </section>

            <section className="view-section">
              <h3>View</h3>
              <p>{view}</p>
            </section>

            <section className="location-section">
              <h3>Location</h3>
              <p>{location}</p>
            </section>

            <section className="photos-section">
              <h3>Photos</h3>
              <div className="room-photos">
                {photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Room Photo ${index + 1}`}
                    className="photo"
                  />
                ))}
              </div>
            </section>

            <section className="reviews-section">
              <h3>Reviews</h3>
              <p>{reviews} stars ({reviewCount} reviews)</p>
            </section>

            <section className="booking-policy-section">
              <h3>Booking Policy</h3>
              <p>{bookingPolicy}</p>
            </section>

            <section className="checkin-section">
              <h3>Check-in/Check-out Times</h3>
              <p><strong>Check-in:</strong> {checkInTime}</p>
              <p><strong>Check-out:</strong> {checkOutTime}</p>
            </section>
          </div></Link>
      </div>

    </>
  )
}

export default RoomItem;
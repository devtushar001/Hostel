import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { HostelContext } from "../../Context/HostelContext";

//my api

//     id: 1,
//     name: "Standard 4-Bed Mixed Dorm",
//     type: "Dormitory Room",
//     price: "₹800 per night",
//     maxOccupancy: 4,
//     size: "25 m²",
//     amenities: [
//       "Free Wi-Fi",
//       "Air Conditioning",
//       "Personal Locker",
//       "Reading Light",
//       "Shared Bathroom"
//     ],
//     description: "A cozy, budget-friendly room with 4 bunk beds in a mixed-gender dorm. Perfect for solo travelers looking to meet new people.",
//     bathroom: "Shared bathroom with hot showers",
//     view: "Garden view",
//     location: "Ground floor, close to the common lounge",
//     photos: [
//       "https://via.placeholder.com/400x200?text=Standard+4-Bed+Mixed+Dorm+1",
//       "https://via.placeholder.com/400x200?text=Standard+4-Bed+Mixed+Dorm+2"
//     ],
//     reviews: 4.5,
//     reviewCount: 120,
//     bookingPolicy: "Free cancellation up to 48 hours before arrival",
//     checkInTime: "Check-in from 2:00 PM",
//     checkOutTime: "Check-out by 11:00 AM"
//   }

const Room = () => {
  
  const { hostelData } = useContext(HostelContext);
  const { id } = useParams();
  return (
    <>
     <div>
      {
        hostelData.map((item, i) => {
          if (item.id == id) {
            return (
              <>
                <div className="container">
                  {item.name}
                  <br />
                  {item.type}
                  <br />
                  {item.price}
                  <br />
                  {item.maxOccupancy}
                  <br />
                  {item.size}
                  <br />
                  {item.amenities.map((amen, i) => {
                    return (
                      <div className="amen" key={i}>
                           <li>{amen}</li>
                      </div>
                    )
                  })}
                  <br />
                  {item.description}
                  <br />
                  {item.bathroom}
                  <br />
                  {item.view}
                  <br />
                  {item.location}
                  <br />
                  {item.photos.map((image, i)=> {
                    return (
                      <>
                        <div key={i }>
                           <li>{image}</li>
                        </div>
                      </>
                    )
                  })}
                  <br />
                  {item.review}
                  <br />
                  {item.reviewCount}
                  <br />
                  {item.bookingPolicy}
                  <br />
                  {item.checkInTime}
                  <br />
                  {item.checkOutTime}
                </div>
              </>
            )
          }
        })
      }
     </div>
    </>
  )
}

export default Room;
import React, { useContext } from "react";
import { HostelContext } from "../../Context/HostelContext";
import RoomItem from "../RoomItem/RoomItem";

const RoomDisplay = () => {
  const { hostelData } = useContext(HostelContext);

  return (
    <>
      {
        hostelData.map((item, i) => {
          return <RoomItem
            key={i}
            id={item.id}
            name={item.name}
            price={item.price}
            type={item.type}
            maxOccupancy={item.maxOccupancy}
            size={item.size}
            amenities={item.amenities}
            description={item.description}
            bathroom={item.bathroom}
            view={item.view}
            location={item.location}
            photos={item.photos}
            reviews={item.review}
            reviewCount={item.reviewCount}
            bookingPolicy={item.bookingPolicy}
            checkInTime={item.checkInTime}
            checkOutTime={item.checkOutTime} />
        })
      }
    </>
  )
}
export default RoomDisplay;
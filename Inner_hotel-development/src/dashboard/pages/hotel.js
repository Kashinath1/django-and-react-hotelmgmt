import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formconfig } from "../../constant/config";
import Dashboard_header from "../components/header";
import SideBar from "../components/sidebar";
import { Grid, Box, Button } from "@material-ui/core";

const InnerHotel = () => {
  return (
    <>
    <Grid container>
      <Grid item xs={2}>
        <SideBar />
      </Grid>
      <Grid item xs={10}>
        <Dashboard_header  />
        <InnerHotelPage />
      </Grid>
    </Grid>
      </>
  );
};

const InnerHotelPage = () => {
    const [Facility, setFacility] = useState([]);
  //get request for eminities
  useEffect(() => {
const newFacilities = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/hotels/emenities/`);
      setFacility(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  newFacilities();
}, []);
const [roomtype, setRoomType] = useState();
//get request for roomtype
useEffect(() => {
const newRoom = async () => {
  try {
    const response = await axios.get(`http://127.0.0.1:8000/hotels/RoomType/`);
    setRoomType(response.data);
  } catch (err) {
    console.log(err);
  }
};
newRoom();
}, []);
  const [hotel, sethotel] = useState();
  const [RoomNamePic, setRoomNamePic] = useState();
  const [desc, setDesc] = useState();
  const [city, setCity] = useState();
  const[price, setPrice] = useState();
  const [AllFacility, setAllFacility] = useState("");
  const [room, setRoom] = useState();
  const handleImage = (e) => {
    setRoomNamePic(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("hotel_image", RoomNamePic);
    formdata.append('hotel_name',hotel);
    formdata.append('hotel_description', desc);
    formdata.append('city', city);
    formdata.append('types_of_room',room);
    formdata.append('price',price);
    formdata.append('emenities', AllFacility);  
    const Config = { Formconfig };
    await axios
      .post(`http://localhost:8000/hotels/hotel/`, formdata, Config)
      .then((res) => {
     console.log(res.data);
      })
      .catch((err) => {
      console.log(err);
      });
  };
  return (

   <Box>
      <Box className="add-hotel-txt"> Add Hotel Details</Box>
      <Box className="form">
    <Box className="form-box">
     <label className="name">
         Hotel Name*
    </label>
     <input 
       type="text" 
       name="hotel_name" 
       id="hotel_name" 
       value={hotel} 
       onChange={(e)=>sethotel(e.target.value)} 
       className="detail-name-box"
       />
     </Box>
     <Box  className="form-box">
     <label className="name">
         Hotel description*
      </label>
     <input 
        type="textarea" 
        name="hotel_description" 
        id="hotel_description" 
        value={desc} onChange={(e)=>setDesc(e.target.value)}  
        className="detail-name-box"  
      />
     </Box>
     <Box  className="form-box">
     <label className="name">
         Hotel Image*
      </label>
     <input 
        type="file" 
        name="hotel_image" 
        onChange={handleImage}  
        className="detail-name-box"
     />
     </Box>
     <Box  className="form-box">
     <label className="name">
         City*
      </label>
     <input 
        type="text" 
        name="city" 
        value={city} 
        onChange={(e)=>setCity(e.target.value)}  
        className="detail-name-box"
     />
     </Box>
     <Box  className="form-box">
     <label className="name">
       Price*
    </label>
     <input 
        type="number" 
        name="price" 
        id="price" 
        value={price} 
        onChange={(e)=>setPrice(e.target.value)}  
        className="detail-name-box" 
     />
     </Box>
     <Box  className="form-box">
     <label className="name">
      Room Type*
    </label>
    <select 
       onChange={(e)=>setRoom(e.target.value)}  
       className="detail-name-box"  >
        <option>PLease Select a RoomType</option>
                    {roomtype &&
                      roomtype.map((data) => (
                        <option value={data.id}>
                            {data.roomtype}
                        </option>
                    ))}
    </select>
    </Box>
    <Box  className="form-box">
     <label 
       className="name">
        Emenities*
    </label>
    <select 
       onChange={(e)=>setAllFacility(e.target.value)}  
       className="detail-name-box" 
    >
        <option>
          PLease Select a Emenities
       </option>
                {Facility &&
                  Facility.map((data) => (
                    <option value={data.id}>
                        {data.name}
                    </option>
                    ))}
    </select>
    </Box>
    <Box>
        <Button onClick={handleSubmit} className="submit">
          Submit
        </Button>
    </Box>
    </Box>
    </Box>
  );
};

export default InnerHotel;

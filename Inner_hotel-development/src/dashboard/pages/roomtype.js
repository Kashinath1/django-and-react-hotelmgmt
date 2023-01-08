import React, { useState, useEffect } from "react";
import axios from "axios";
import { Jsonconfig } from "../../constant/config";
import Dashboard_header from "../components/header";
import SideBar from "../components/sidebar";
import { Grid, Box, Button } from "@material-ui/core";

const RoomType = () => {
  return (
    <>
    <Grid container>
      <Grid item xs={2}>
        <SideBar />
      </Grid>
      <Grid item xs={10}>
        <Dashboard_header  />
        <RoomTypePage />
      </Grid>
    </Grid>
      </>
  );
};

const RoomTypePage = () => {
  const [Room, setRoom] = useState({
    roomtype:"",
    price:"",
  })

  const handleRoom = (e) => {
   const name = e.target.name;
   const value = e.target.value;
  console.log(name, value);

  setRoom({...Room, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     const Data = {
        "roomtype": Room.roomtype,
        "price":Room.price,
     }
    const Config = { Jsonconfig };
    await axios
      .post(`http://127.0.0.1:8000/hotels/RoomType/`, Data, Config)
      .then((res) => {
     console.log(res.data);
      })
      .catch((err) => {
      console.log(err);
      });
  };
  return (

   <Box>
      <Box className="add-hotel-txt"> Add RoomType Details</Box>
      <Box className="form">
    <Box className="form-box">
     <label className="name">RoomType*</label>
     <input type="text" name="roomtype" id="roomtype" value={Room.roomtype} onChange={handleRoom} className="detail-name-box" />
     </Box>
     <Box  className="form-box">
     <label className="name">Price*</label>
     <input type="number" name="price" id="price" value={Room.price} onChange={handleRoom}  className="detail-name-box"  />
     </Box>
    <Box>
        <Button onClick={handleSubmit} className="submit">Submit</Button>
    </Box>
    </Box>
    </Box>
  );
};

export default RoomType;

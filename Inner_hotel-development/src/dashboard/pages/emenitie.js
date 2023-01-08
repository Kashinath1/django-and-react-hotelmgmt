import React, { useState, useEffect } from "react";
import axios from "axios";
import { Jsonconfig } from "../../constant/config";
import Dashboard_header from "../components/header";
import SideBar from "../components/sidebar";
import { Grid, Box, Button } from "@material-ui/core";

const Emenities = () => {
  return (
    <>
    <Grid container>
      <Grid item xs={2}>
        <SideBar />
      </Grid>
      <Grid item xs={10}>
        <Dashboard_header  />
        <EmenitiesPage />
      </Grid>
    </Grid>
      </>
  );
};

const EmenitiesPage = () => {
  const [Facility, setFacility] = useState({
    name:"",
  })

  const handleFacility = (e) => {
   const name = e.target.name;
   const value = e.target.value;
  console.log(name, value);

  setFacility({...Facility, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     const Data = {
        "name": Facility.name,
     }
    const Config = { Jsonconfig };
    await axios
      .post(`http://127.0.0.1:8000/hotels/emenities/`, Data, Config)
      .then((res) => {
     console.log(res.data);
      })
      .catch((err) => {
      console.log(err);
      });
  };
  return (

   <Box>
      <Box className="add-hotel-txt"> Add Emenities Details</Box>
      <Box className="form">
    <Box className="form-box">
     <label className="name">Emenities*</label>
     <input type="text" name="name" id="name" value={Facility.name} onChange={handleFacility} className="detail-name-box" />
     </Box>
    <Box>
        <Button onClick={handleSubmit} className="submit">Submit</Button>
    </Box>
    </Box>
    </Box>
  );
};

export default Emenities;

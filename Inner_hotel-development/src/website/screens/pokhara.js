import React from "react";
import Header from "../components/header";
import { Box, Button, Card, Container, Grid, Typography, Paper } from "@material-ui/core";
import Footer from "../components/footer";
import MyBackground from '../../static/images/hotelbg.jpg';
import Hotel1 from '../../static/images/hotel1.jpg';
import Hotel2 from '../../static/images/hotel2.jpg';
import Hotel3 from '../../static/images/hotel3.jpg';
import Hotel4 from '../../static/images/hotel4.jpg';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: "30%",
    left: "52%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const HotelCity = () =>{
    return(
        <>
        <Header />
        <HotelCityPage />
        <Footer />
        </>
    )
}

const HotelCityPage = () =>{
      // let subtitle;
      const [modalIsOpen, setIsOpen] = React.useState(false);

      function afterOpenModal() {
      //   // references are now sync'd and can be accessed.
      //   subtitle.style.color = "#f00";
      }
      function openModal() {
          setIsOpen(true);
        }
        function closeModal() {
          setIsOpen(false);
        }
    return(
        <Box>
           {/* <Box className="about-bg">
              <Box className="background-img">
                  <img src={MyBackground}  alt="" className="myhotelbg-image  about-img" />
             </Box>
             <Box className="about-us-position htl">
                <Typography className="about-us-txt">Our Hotels</Typography>
             </Box>
           </Box> */}
           <Container>
            <Grid container spacing={2}>
               <Grid item xs={3}>
                <Box className="margin-of-grid">
                  <Box className="grid-margin-s">
                    <Typography className="typo-search-hotel" >Search Hotels</Typography>
                  </Box>
                  <Box className="form-box">
                    <input placeholder="Enter a destination" type="text" className="detail-name-box" />
                  </Box>
                  <Box>
                    <input type="datetime-local" placeholder="check-in" className="detail-name-box" />
                  </Box>
                  <Box>
                    <input type= "datetime-local" placeholder="check-out" className="detail-name-box"/>
                  </Box>
                  <Box>
                    <Button  className="submit" onClick={openModal}>
                        Check Availability
                    </Button>
                  </Box>
                  </Box>
               </Grid>

               <Grid item xs={8} component={Paper} className="paper-card">
                 <Card className="hotel-img-card">
                  <img src={Hotel1} alt="hotel image" className="hotel-img-pic"  />
                 </Card>
                 <Box className="hotel-txt-typo-grid">
                  <Typography className="typo-hotel-txt">MeroStay, Chabahil Kathmandu</Typography>
                  <Typography className="typo-hotel-txt-second">Best Hotel in Kathmandu</Typography>
                 </Box>
                 <Box >
                  <Button className="txt-box-search" onClick={openModal}>Search Rooms</Button>
                 </Box>
               </Grid>
               </Grid>
               <Grid container spacing={2} >
               <Grid item xs={3}></Grid>
               <Grid item xs={8} component={Paper} className="paper-card">
                 <Card className="hotel-img-card">
                  <img src={Hotel2} alt="hotel image" className="hotel-img-pic"  />
                 </Card>
                 <Box className="hotel-txt-typo-grid">
                  <Typography className="typo-hotel-txt">MeroStay, Chabahil Kathmandu</Typography>
                  <Typography className="typo-hotel-txt-second">Best Hotel in Kathmandu</Typography>
                 </Box>
                 <Box >
                  <Button className="txt-box-search" onClick={openModal}>Search Rooms</Button>
                 </Box>
               </Grid>
               </Grid>
               <Grid container spacing={2} >
               <Grid item xs={3}></Grid>
               <Grid item xs={8} component={Paper} className="paper-card">
                 <Card className="hotel-img-card">
                  <img src={Hotel3} alt="hotel image" className="hotel-img-pic"  />
                 </Card>
                 <Box className="hotel-txt-typo-grid">
                  <Typography className="typo-hotel-txt">MeroStay, Chabahil Kathmandu</Typography>
                  <Typography className="typo-hotel-txt-second">Best Hotel in Kathmandu</Typography>
                 </Box>
                 <Box >
                  <Button className="txt-box-search" onClick={openModal}>Search Rooms</Button>
                 </Box>
               </Grid>
               </Grid>
               <Grid container spacing={2} >
               <Grid item xs={3}></Grid>
               <Grid item xs={8} component={Paper} className="paper-card">
                 <Card className="hotel-img-card">
                  <img src={Hotel4} alt="hotel image" className="hotel-img-pic"  />
                 </Card>
                 <Box className="hotel-txt-typo-grid">
                  <Typography className="typo-hotel-txt">MeroStay, Chabahil Kathmandu</Typography>
                  <Typography className="typo-hotel-txt-second">Best Hotel in Kathmandu</Typography>
                 </Box>
                 <Box >
                  <Button className="txt-box-search" onClick={openModal}>Search Rooms</Button>
                 </Box>
               </Grid>
               </Grid>
           </Container>
           <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Box className="submit-modal">
            <Typography className="submit-query">
              Mero Stay Online Hotel Booking In Nepal?
            </Typography>
             <Typography className="lauch-modal"> To be launch Soon, Stay Tuned </Typography>
            <Box className="submit-modal-bttn">
              <button onClick={closeModal} className="close-modal">
                Close
              </button>
            </Box>
          </Box>
        </Modal>
        </Box>
    )
}

export default HotelCity 
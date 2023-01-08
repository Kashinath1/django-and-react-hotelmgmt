import { Box, Container, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import MyBackground from '../../static/images/hotelbg.jpg';
import Header from "../components/header";
import Footer from "../components/footer";


const Contact = () =>{
    return(
        <>
        <Header />
        <ContactPage />
        <Footer />
        </>
    )
}

const ContactPage = () =>{
    return(
        <Box>
            <Box className="about-bg">
              <Box className="background-img">
                  <img src={MyBackground}  alt="" className="myhotelbg-image  about-img" />
             </Box>
             {/* <Box className="about-us-position htl">
                <Typography className="about-us-txt">Contact Us</Typography>
             </Box> */}
           </Box>
           <Container>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Box className="contact-info">
                        <Typography className="typo-contact">Contact Information</Typography>
                    </Box>
                    <Box >
                        <Typography className="ready">Ready to book with us? Have a question about our rooms or services ?We'll be happy to help !</Typography>
                    </Box>
                    <Box>
                        <Typography className="merostay">MeroStay.com</Typography>
                    </Box>
                    <Box>
                        <Typography className="chabil">Chabahil,kathmandu,kathmandu,Bagmati,Nepal</Typography>
                    </Box>
                    <Box>
                        <Typography className="gmail-merostay">Meorstayinfo@gmail.com</Typography>
                    </Box>
                    <Box>
                        <Typography className="front-desk">Front Desk Hours</Typography>
                    </Box>
                    <Box>
                        <Typography className="time">10:00 am - 2:00 am</Typography>
                    </Box>
                    <Box className="contact-box">
                    <Box className="form-box">
                        <input type="text" placeholder="Enter Your Name" className="detail-name-box"  />
                    </Box>
                    <Box className="form-box">
                        <input type="email" placeholder="Enter Your Email" className="detail-name-box"  />
                    </Box>
                    <Box className="form-box">
                        <input type="text" placeholder="Subject" className="detail-name-box"  />
                    </Box>
                    <Box className="form-box">
                        <input type="textarea"  placeholder="Your Message" className="detail-name-box"  />
                    </Box>
                    <Box className="form-box">
                        <Button className="submit con-sub">Submit</Button>
                    </Box>
                    </Box>
                </Grid>
            </Grid>
           </Container>
           
        </Box>
    )
}

export default Contact
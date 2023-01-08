import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import MyBackground from '../../static/images/hotelbg.jpg';
import { Box, Container, Typography } from "@material-ui/core";

const About = () =>{
    return(
    <>
        <Header />
        <AboutPage />
        < Footer />
    </>
    )
}
const AboutPage = () =>{
    return(
        <Box>
            <Box className="about-bg">
            <Box className="background-img">
               <img src={MyBackground}  alt="" className="myhotelbg-image about-img" />
           </Box>
           <Box className="about-us-position">
            <Typography className="about-us-txt"> About us</Typography>
           </Box>
           </Box>
           <Container>
            <Box className="welcome-margin">
                <Typography className="welcome-txt">Welcome to MeroStay, A solution for your Stay</Typography>
            </Box>
            <Box className="about-us-div">
                <Typography className="about-us-p">
                      Merostay is equipped and specialised for more hotel booking options and also provides a better reservations experience. 
                      We pride ourselves on delivering the best hotel prices from the largest selection of hotels in Nepal.
                      When looking for your perfect hotel in MeroStay, our in-depth tools make it easy to browse rooms by hotel star rating,
                      by destinations and availability. Search by destination, by neighborhood.We make finding the right hotel as
                      simple and as frustration-free as can be.
                </Typography>
                <Typography className="about-us-p-br">
                        We provide a Top-level customer service and that is why we promise
                       you our Best Price Guaranteed . For any additional assistance, MeroStay Customer Service representatives 
                       are available 24/7 to help you with any queries or clarifications regarding your hotel booking .
                        When you book hotels with MeroStay, you can be confident that you have booked the best hotel at the lowest price!....
                </Typography>
            </Box>
           </Container>
           
        </Box>
    )
}

export default About
import React from 'react';
import { Box, Container, Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faFacebookSquare, faInstagram, faInstagramSquare, faLinkedinIn, faTwitter, faTwitterSquare,} from "@fortawesome/free-brands-svg-icons";
const Footer = () =>{
    return(
        <>
        <FooterPage />
        </>
    )
}

const FooterPage = () =>{
    return(
        
        <Box className='footer-background'>
         <Container>
             <Box className='footer-padding'>
                <Grid container spacing={4}>
                    <Grid item xs = {12} md = {4}>
                        <Typography className='heading'>Phone Support</Typography>
                        <Typography className='availability'>24 hours a day</Typography>
                        <Typography className='phone-number'>+ 977 9823775820</Typography>
                    </Grid>
                      <Grid item xs = {12} md = {4}>
                          <Typography className='heading'>Follow Us</Typography>
                          <Typography className='availability'>SOCIAL MEDIA CHANNELS</Typography>
                          <Box className='icons'>
                           <a href='https://www.facebook.com/profile.php?id=100083964946344' target='_blank' className='social-media-margin'><FontAwesomeIcon icon={faFacebookF} className="icons-design"/></a>
                           <a href='' target='_blank' className='social-media-margin'><FontAwesomeIcon icon={faTwitter} className="icons-design"/></a>
                           <a href='' target='_blank' className='social-media-margin'><FontAwesomeIcon icon={faInstagram} className="icons-design"/></a>
                           <a href='' target='_blank' className='social-media-margin'><FontAwesomeIcon icon={faLinkedinIn} className="icons-design"/></a>
                          </Box>

                      </Grid>
                      <Grid item xs = {12} md = {4}>
                         <Typography className='heading'>Contact Us</Typography>
                         <Typography className='availability'>For Booking & Reservation</Typography>
                         <Typography className='phone-number'>Info@merostay.com</Typography>
                      </Grid>
                </Grid>
                </Box>
                <Box className='copyright-margin'>
            <Typography className="copyright">© Copyright 2022 MeroStay - All Rights Reserved</Typography>
        </Box>
             
         </Container>
       </Box>
       

    )
}

export default Footer;
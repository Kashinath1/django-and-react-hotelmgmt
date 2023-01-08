import React from "react";
import { Container, Typography, Box, Grid, List, ListItem, Button  } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserCircle, faCaretDown, faBars} from "@fortawesome/free-solid-svg-icons";
import MyLogo from '../../static/images/logo.jpeg';
import { Link } from 'react-router-dom';
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

const Header = () =>{
    return(
     <>
      {/* <Sub_Header /> */}
      <MainHeader />
     </>
    )
}

// const Sub_Header = () =>{
//     return(
//         <Box className='header-box'>
//         <Container>
//             <Grid container spacing= {1} >
//                 <Grid item xs = {4}>
//                 <List className="subheader-list">
//                           <ListItem className="subheader-listitem">Call us @ +977 9823775820</ListItem>  
//                       </List>
//                 </Grid>
//               <Grid item xs={6}></Grid>
//               <Grid item xs={2}>
                
//               </Grid>
//             </Grid>
//         </Container>
//      </Box>
//   )
// }

const MainHeader = ()=>{
    // const [Show, setShow] = useState(false);
    // const [ShowHam, setShowHam] = useState(false);
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
    <Box className='my-main-header'>
        <Container>
          <Grid container spacing={2}>
             <Grid item xs={1}>
               <Link to ="/"><img src={MyLogo} className="hotel-logo" alt='logo' /></Link>
             </Grid>
             <Grid item xs={1}>
              <Typography className="company-name">MeroStay.Com</Typography>
              </Grid>
             <Grid item xs = {7}>
             <List className="main-header-ul ">
                    <ListItem className="main-header-display"><Link className="main-header-text" to="/">Home</Link></ListItem>
                    <ListItem className="main-header-display"><a className="main-header-text" href="/about">About Us </a></ListItem>
                    <ListItem className="main-header-display"><Link className="main-header-text" to="/hotels/page">Hotels</Link></ListItem>
                     <ListItem className="main-header-display"><Link className="main-header-text" to="/contact/page">Contact</Link></ListItem>
                     {/* <ListItem className="main-header-display"><Link className="main-header-text" to="">Gallery</Link></ListItem> */}
                    </List>  
             </Grid>
             <Grid item xs={3}>
               {/* <Box className='booking'>
               <Button className='book-btn'><Link to={``} className='book-link' onClick={openModal}>Book Now</Link></Button>
               </Box> */}
               {/* <Box className='hamberger-menu'>
              <a  onClick={!ShowHam==true?()=>setShowHam(true):()=>setShowHam(false)}>
              <FontAwesomeIcon icon={faBars} />
              </a>
             </Box> */}
               <Box>
                  <Link to = "/user/register" className="subheader-link">
                      <Typography className='myaccount-text'><FontAwesomeIcon className='user-icon' icon={faUserCircle}/>
                        Login/Register
                      </Typography>
                  </Link>
                  </Box>
             </Grid>
          </Grid>
          <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <Box className="submit-modal">
            <Typography className="submit-query">
              Mero Stay Online Hotel Booking In Nepal
            </Typography>
             <Typography className="lauch-modal"> To be launch Soon, Stay Tuned </Typography>
            <Box className="submit-modal-bttn">
              <button onClick={closeModal} className="close-modal">
                Close
              </button>
            </Box>
          </Box>
        </Modal>
        </Container>
    </Box>
  )
}


export default Header
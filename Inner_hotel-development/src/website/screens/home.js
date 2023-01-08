import React, {useState, useEffect} from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Box, Button, Card, Container, Grid, Typography } from "@material-ui/core";
import MyBackground from '../../static/images/hotelbg.jpg';
import kathmandu from '../../static/images/kathmandu.jpg';
import pokhara from '../../static/images/pokhara.jpg';
import Nagarkot from '../../static/images/nagarkot.jpg';
import Lalitpur from '../../static/images/lalitpur.jpg';
import Bhaktapur from '../../static/images/Bhaktapur.jpg';
import Butwal from '../../static/images/Butwal.jpg';
import Chitwan from '../../static/images/chitwan.jpg';
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

const Home = () =>{
    return(
        <>
        <Header />
        <HomePage />
        <Footer/>
        </>
    )
}

const HomePage = () =>{
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  const [Hotels, setHotels] = useState([]);
  //get request for eminities
  useEffect(() => {
const newHotels = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/hotels/hotel/`);
      setHotels(response.data.slice(0,4));
    } catch (err) {
      console.log(err);
    }
  };
  newHotels();
}, []);
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
            <Box>
           <Box className="background-img">
               <img src={MyBackground}  alt="" className="myhotelbg-image" />
           </Box>
           <Box className="search-box">
             <input type="search" placeholder="Search Hotels" className="search-input" />
             <select
              name=""
              id=""
              className="select-option"
              >
            <option value="cities">Cities</option>
            <option value="kathmandu">kathmandu</option>
            <option value="bhaktapur">bhaktapur</option>
            <option value="pokhara">pokhara</option>
            <option value="chitwan">chitwan</option>
            <option value="nagarkot">nagarkot</option>
            <option value="butwal">butwal</option>
            <option value="bhairahawa">bhairahawa</option>
          </select>
             <Button className="search-button" onClick={openModal}>Search</Button> 
           </Box>
           <form>
                <Box className='check-availability-box mobile-device'>
                  <Box className='check-in-box'>
                    <label className='check-box'>Check_In</label>
                    <input 
                       type="date" 
                       name='check_in' 
                       id="check_in"  
                       className='input-box'
                    />     
                 </Box>
                 <Box className='check-out-box'>
                    <label className='check-box'>
                         Check_Out
                    </label>
                    <input 
                      type="date" 
                      name="check_out" 
                      id ="check_out" 
                      className='input-box' 
                    />
                  </Box>
                  <Box className='guest-box'>
                    <label className='check-box'>
                        Children
                    </label>
                    <input 
                       type="number" 
                       name='guest_no' 
                       id='guest_no' 
                       placeholder='1'  
                       className='input-box' 
                    />
                  </Box>
                  <Box className="room-type-box">
                     <label htmlFor="room_id" className="check-box" >
                        Adult
                    </label>
                    <input 
                       type="number" 
                       name='guest_no' 
                       id='guest_no' 
                       placeholder='1' 
                       className='input-box' 
                    />
                    </Box>
                  <Box className='available-btn-box'>
                    <Button className='availablity-btn' onClick={openModal}>Check<br></br>Availability</Button>
                    </Box>
                </Box>    
                </form>
           <Container>
            <Box className="city-container">
            <Box className="cities-box">
                <Typography className="cities-txt">Hotels Based On Cities</Typography>
            </Box>
            
            <Box className="container" >
            <Slider {...settings}>
                <Box  className="box">
                    <Card className="card-bg">
                        <Link to="/hote/city" ><img src={kathmandu} alt="kathamndu" className="cities"  /></Link>
                        <Typography className="photo-city-txt">Kathmandu</Typography>
                    </Card>
                </Box>
                <Box   className="box">
                    <Card className="card-bg">
                    <Link hretof="/hote/city" ><img src={pokhara} alt="bkt" className="cities" /></Link>
                        <Typography className="photo-city-txt">Pokhara</Typography>
                    </Card>
                </Box>
                <Box   className="box">
                    <Card className="card-bg">
                    <Link href="/hote/city" ><img src={Nagarkot} alt="bkt" className="cities" /></Link>
                        <Typography className="photo-city-txt">Nagarkot</Typography>
                    </Card>
                </Box>
                <Box   className="box">
                    <Card className="card-bg">
                    <Link href="/hote/city" ><img src={Lalitpur} alt="bkt" className="cities" /></Link>
                        <Typography className="photo-city-txt">Lalitpur</Typography>
                    </Card>
                </Box>
                <Box   className="box">
                    <Card className="card-bg">
                    <Link href="/hote/city" ><img src={Bhaktapur} alt="bkt" className="cities" /></Link>
                        <Typography className="photo-city-txt">Bhaktapur</Typography>
                    </Card>
                </Box>
                <Box   className="box">
                    <Card className="card-bg">
                    <Link href="/hote/city" ><img src={Butwal} alt="bkt" className="cities" /></Link>
                        <Typography className="photo-city-txt">Butwal</Typography>
                    </Card>
                </Box>
                <Box   className="box">
                    <Card className="card-bg">
                    <Link href="/hote/city" ><img src={Chitwan} alt="bkt" className="cities" /></Link>
                        <Typography className="photo-city-txt">Chitwan</Typography>
                    </Card>
                </Box>
                </Slider>
            </Box>
           
            

            <Box className="cities-box">
                <Typography className="cities-txt">Our Best Deals</Typography>
            </Box>
            <Grid container spacing={2} className="container">
            {
                  Hotels && Hotels.map(key=>(
                <Grid item xs={3} className="box">
                    <Card className="card-bg-hotel">
                        <img src={key.hotel_image} alt="kathamndu" className="cities" />
                        <Typography className="photo-city-txt">{key.hotel_name}</Typography>
                    </Card>
                </Grid>
                  ))}
                {/* <Grid item xs={3}  className="box">
                    <Card className="card-bg">
                        <img src={Hotel2} alt="bkt" className="cities" />
                        <Typography className="photo-city-txt">Annapurna Hotel</Typography>
                    </Card>
                </Grid>
                <Grid item xs={3}  className="box">
                    <Card className="card-bg">
                        <img src={Hotel3} alt="bkt" className="cities" />
                        <Typography className="photo-city-txt">Everest Hotel</Typography>
                    </Card>
                </Grid>
                <Grid item xs={3}  className="box">
                    <Card className="card-bg">
                        <img src={Hotel4} alt="bkt" className="cities" />
                        <Typography className="photo-city-txt">Hotel Yak and Yeti</Typography>
                    </Card>
                </Grid> */}
            </Grid>
            </Box>
           </Container>
           </Box>
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
        </Box>
    )
}

export default Home;
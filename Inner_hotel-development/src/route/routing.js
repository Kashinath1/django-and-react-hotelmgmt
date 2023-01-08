import React from 'react';
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import About from '../website/screens/about';
import InnerHotelPage from '../dashboard/pages/hotel';
import Home from '../website/screens/home';
import Hotels from '../website/screens/hotels';
import Register from '../website/screens/register';
import Login from '../website/screens/login';
import Dashboard_header from '../dashboard/components/header';
import SideBar from '../dashboard/components/sidebar';
import RoomType from '../dashboard/pages/roomtype';
import Emenities from '../dashboard/pages/emenitie';
import Contact from '../website/screens/contact';
import HotelCity from '../website/screens/pokhara';

const Routing = () => {
    return(
        <BrowserRouter>
        <React.Fragment>
        <Routes>
             <Route path="/hotel" exact element ={<InnerHotelPage/>} /> 
            <Route path="/" exact element ={<Home/>} /> 
            <Route path="/about" exact element ={<About/>} />  
            <Route path='/hotels/page' exact element = {<Hotels />} />  
            <Route path='/user/register' exact element = {<Register />} />
            <Route path='/user/login' exact element = {<Login />} /> 
            <Route path='/room/type' exact element = {<RoomType />} /> 
            <Route path='/facility' exact element = {<Emenities />} /> 
            <Route path='/contact/page' exact element = {<Contact />} />  
            <Route path='/dashboard/header' exact element = {<Dashboard_header />} />   
            <Route path='/sidebar' exact element = {<SideBar />} /> 
            <Route path='/hote/city' exact element = {<HotelCity />} /> 
        </Routes>
        </React.Fragment>
        </BrowserRouter>
    )
}

export default Routing;
import React, { useState } from 'react';
import { Box, Drawer, List, ListItem,AppBar,Toolbar, Typography} from '@material-ui/core';
import MyLogo from '../../static/images/logo.jpeg';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faDashboard, faHome, faHotel, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


const SideBar = () =>{
    return(
        <>
        < SideBarPage />
        </>
    )
}

const SideBarPage = () =>{
    const [ShowHide1, onShowHide1] = useState();
    return(
        <Box>
          <Box className='sidebar-box'>
              <Drawer variant='permanent' className='drawer'>
                <Box>
                <List className='sidebar-list'>
                <ListItem className='list-logo'><img src={MyLogo} alt="logo" className='logo-dash'/></ListItem> 
                    <ListItem className='listitem dasboard'><Link to ='/dashboard/home' className='link'>
                        <FontAwesomeIcon icon={faDashboard} className="sidebar-icon"/>
                        Dashboard</Link></ListItem>
                    <ListItem className='listitem'><Link to ='/home/background' className='link'>
                        <FontAwesomeIcon icon={faHome} className="sidebar-icon"/>
                        Home</Link></ListItem>
                        <ListItem className='listitem'><Link to ='/about/background' className='link'>
                        <FontAwesomeIcon icon={faInfoCircle} className="sidebar-icon"/>
                        About</Link></ListItem>
                    <Box className='dropdown-wrap'>    
                    <ListItem className='listitem list-dropdown' ><a onClick={!ShowHide1===true?()=>onShowHide1(true):()=>onShowHide1(false)} className='link'>
                        <FontAwesomeIcon icon={faHotel} className="sidebar-icon"/>
                        Hotel 
                    <FontAwesomeIcon icon={faChevronDown}  className="sidebar-chevondown"/></a>
                    { ShowHide1 == true ?
                        <List className='dropdown-class'>
                        <ListItem className='dropdown-list'><Link to = '/hotel' className='dropdown-link'> Add Hotel Details</Link></ListItem>
                        <ListItem className='dropdown-list'><Link to = '/room/type' className='dropdown-link'> Add Room Type </Link></ListItem>
                         <ListItem className='dropdown-list'><Link to ='/facility' className='dropdown-link'> Add Emenities</Link></ListItem>
                         </List>:null
                    }
                    </ListItem>
                    </Box>
                </List>
                </Box>
              </Drawer>
          </Box>
        </Box>
    )
}

export default SideBar;

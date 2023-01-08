import { AppBar, Box, Toolbar, Typography, Paper } from "@material-ui/core";
import React from "react";



const Dashboard_header = ()=>{
    return(
        <Box>
            <Box className="dashboard-header-color" component={Paper}>
                <Box>
                    <Typography className="appbar-txt">Admin Panel</Typography>                   
                </Box>
            </Box>
        </Box>
    )
}

export default Dashboard_header;
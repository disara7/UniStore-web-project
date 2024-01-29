import React from "react";
import Paper from '@mui/material/Paper';
import '../css/signupfinish.css'
import Typography from '@mui/joy/Typography';

const Finish=()=>{
    return(
        <div className="finish">
            <Paper elevation={3} 
            sx={{
                width:'550px', 
                height:'400px', 
                borderRadius:'15px',
                backdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(255 255 255 / 0.4)',
                }}>
                    <div className="finish-box">
                        <Typography level="h5" sx={{color:'white'}}>To complete your profile and personalize your experience, please enter your name:</Typography>
                    </div>
                </Paper>
        </div>
    )
}

export default  Finish; 
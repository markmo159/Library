import React,{useEffect} from 'react';
import LibraryIMG from '../../PNG/library.jpg';

import { 
  Box,
  Typography,
  Button
 } from '@mui/material';


const WelcomeSection = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
},[])

  function scrolling () {
    document.getElementById('books').scrollIntoView({
      behavior: 'smooth'
    });
  }

    return (
        <div>
          <Box
            sx={{
              position: 'relative',
              width: 'auto',
              height: "100vh",
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: "100vh",
                backgroundImage: `url(${LibraryIMG})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: '0.7',
                zIndex: '1'
              }}
            />
            <Box 
              sx={{
                position: 'absolute',
                zIndex: '100',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Typography 
                sx={{
                  textAlign:'center',
                  fontWeight:'600',
                  color: 'rgb(11, 43, 119)',
                }} 
                variant="h1" 
                component="h3"
              >
                Welcome To Your Library
              </Typography>
              <Button sx={{marginTop:'10px'}} variant="contained" onClick={scrolling}>
                Enter Library
              </Button>
            </Box>
          </Box>
        </div>
    );
}

export default WelcomeSection;
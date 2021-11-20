import React from 'react';
import {
  Snackbar,
  Alert
} from '@mui/material';


const BookAddedMessage = ({status, closeError}) => {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    closeError(false)
    status = false;
  };


  return (
    <div>
      <Snackbar 
        open={status} 
        autoHideDuration={5000} 
        onClose={handleClose}
      >
        <Alert 
          onClose={handleClose} 
          severity="success" 
          sx={{ width: '100%' }}
        >
          Successfully added book
        </Alert>
      </Snackbar>
    </div>
  );
}

export default BookAddedMessage;
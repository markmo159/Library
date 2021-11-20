import React from 'react';
import {
  Box,
  Modal,
  AlertTitle,
  Alert 
} from '@mui/material';


const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BooksErrorMessage = ({status, closeError}) => {
  
  const handleClose = () => {status = false; closeError(false)};

  return (
    <div>
      <Modal
        open={status}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Alert severity="info">
            <AlertTitle>Attention !</AlertTitle>
            <strong>This book already exist in your library.</strong><br/>
            You may add this book to either tab after deleting it from library.
          </Alert>
        </Box>
      </Modal>
    </div>
  );
}

  export default BooksErrorMessage;
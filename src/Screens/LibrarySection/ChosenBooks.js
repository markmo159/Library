import React, { useState } from 'react';

import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Tooltip,
  Zoom,
  Modal,
  Box,
  Stack,
  Button
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteIcon from '@mui/icons-material/Delete';

const style = {
  img: {
    boxShadow:'3px 5px #888888'
  },
  deleteBox: {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  },

};

const ChosenBooks = ({books, deleteBook, target}) => {
  const [open, setOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);
  const handleOpen = (index) => {setOpen(true); setClickedIndex(index) } ;
  const handleClose = () => setOpen(false);

  return (
    <List sx={{ width: '100%'}}>
      {books.map((book,index) => (
        <ListItem
          divider
          key={book.id}
          disableGutters
          secondaryAction={
            <Tooltip TransitionComponent={Zoom} title="Delete Book">
              <IconButton onClick={() => handleOpen(index)}>
                <DeleteForeverIcon fontSize='large' color="primary" />
              </IconButton>
            </Tooltip>
          }
        >
          <img style={style.img} src={book.img} alt='book' />
          <ListItemText sx={{ paddingLeft:'10px'}} primary={book.title} />
        </ListItem>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.deleteBox}>
            Delete {books[clickedIndex] ? books[clickedIndex].title : ''} ?
          <Stack 
            direction="row" 
            spacing={2} 
            sx={{
              marginTop:'10px', 
              display:'flex', 
              justifyContent:'center'
            }}>
            <Button 
              onClick={() => {deleteBook(clickedIndex, target); setOpen(false)}} 
              variant="contained" 
              color="error" 
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button onClick={handleClose} variant="contained" >
              Keep
            </Button>
        </Stack>
        </Box>
      </Modal>
    </List>
  );
}

export default ChosenBooks;
import React ,{useState} from 'react';
import BookErrorMessage from '../../Messages/BookErrorMessage';
import BookAdded from '../../Messages/BookAddedMessage';

import {
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Tooltip,
} from '@mui/material';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import BookmarkRemoveIcon from '@mui/icons-material/BookmarkRemove';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';


const SearchResults = ({results, addBookToTable,books}) => {
  const data = results.data.items
  const [isBookTwice, setIsBookTwice] = useState(false);
  const [bookAdded, setBookAdded] = useState(false);

  const checkHere = (index, target) => {
    let existingBook  = false
  loop1:
    for (let categorie in books) {
      for (let bookInCategorie = 0; books[categorie] && bookInCategorie < books[categorie].length; bookInCategorie++) {
        if(books[categorie][bookInCategorie].id === data[index].id) {
          existingBook = true;
          setIsBookTwice(true)
          break loop1;
        }
      }
    }
    if (!existingBook) {
      setBookAdded(true)
      addBookToTable(index,target)
    }
  }

  const closeError = (close) => {
    setIsBookTwice(close);
    setBookAdded(close)

  }

  return (
    <List sx={{ width: '100%'}}>
      {data.map((value,index) => (
        <ListItem
          sx={{
            display:'flex',
            flexDirection:'column', 
            alignItems:'start'
          }}
          divider
          key={index}
          disableGutters
        >
          <Box sx={{display:'flex', alignItems:'center'}}>
            <MenuBookRoundedIcon />
            <ListItemText 
              sx={{
                paddingLeft:'3px'
              }} 
              primary={value.volumeInfo.title} />
          </Box>
          <Box 
            sx={{
              width:'100%', 
              display:'flex', 
              alignItems:'center', 
              justifyContent:'space-between'
            }}>
            <img style={{boxShadow:'3px 5px #888888'}} src={value.volumeInfo.imageLinks ? value.volumeInfo.imageLinks.thumbnail : null} alt='' />
            <Box 
            sx={{
              display:'flex', 
              flexDirection:'column'
              }}>
              <Tooltip placement="left" title="Already Read">
                <IconButton onClick={() => checkHere(index,'read')}>
                  <BookmarkAddedIcon fontSize='large' color="primary" />
                </IconButton>
              </Tooltip>
              <Tooltip placement="left" title="Reading">
                <IconButton onClick={() => checkHere(index,'reading')} >
                  <BookmarkRemoveIcon fontSize='large' color="primary" />
                </IconButton>
              </Tooltip>
              <Tooltip placement="left" title="To Read">
                <IconButton onClick={() =>  checkHere(index,'to read')} >
                  <BookmarkAddIcon fontSize='large' color="primary" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </ListItem>
      ))}
      <BookErrorMessage status={isBookTwice}  closeError={closeError} />
      <BookAdded status={bookAdded} closeError={closeError} />
    </List>
  );
}

export default SearchResults;
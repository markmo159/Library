import React, { useEffect, useState } from 'react';
import BooksTable from './BooksTable';
import FetchBooks from '../../Data/FetchBooks'
import SearchResults from './SearchResults';
import SkeletonSearch from '../../Skeleton/SkeletonSearch';

import { 
  Container, 
  Button, 
  Modal,
  Box,
  IconButton,
  Paper,
  InputBase,
} from '@mui/material';
import AddBoxTwoToneIcon from '@mui/icons-material/AddBoxTwoTone';
import SearchIcon from '@mui/icons-material/Search';

const style = {
  position: 'absolute',
  top: '15%',
  left: '12%',
  right: '12%',
  maxWidth: '600px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  hieght:'auto',
  maxHeight: '70vh',
  overflow: 'auto',
  '&::-webkit-scrollbar': {
    width: '6px',
    height: '6px',
  },
  '&::-webkit-scrollbar-track': {
    borderRadius: '10px',
    background: 'rgba(0,0,0,0.1)',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: 'rgba(0,0,0,0.4)',
  },
  '&::-webkit-scrollbar-thumb:active': {
    background: 'rgba(0,0,0,0.9)',
  },
};

const books = {
  'read': [],
  'reading': [],
  'to read': []
};

const LibrarySection = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState()

  useEffect(() => {
    setData(0);
    const search = async () => {
      const response = await FetchBooks(searchTerm);
      if(response.config.params.q === searchTerm){
        setData(response)
      }
    };

    const searchTimeOut = setTimeout(() => {
      if (searchTerm) {
        search()
      }
    }, 500);

    return () => {
      clearTimeout(searchTimeOut)
    };

  },[searchTerm])


  const addBookToTable = (index,target) => {
    const book = data.data.items[index]
    books[target].push({
      id: book.id,
      img: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null,
      title: book.volumeInfo.title
    })
  }

  const deleteBook = (index, target) => {
    books[target].splice(index, 1)
  }

  return (
    <Container id='books' sx={{ height: '100vh',}} fixed>
      <Box sx={{ 
        display:'flex', 
        justifyContent: 'end', 
        }}>
        <Button onClick={() => setOpen(!open)}>
          <AddBoxTwoToneIcon sx={{marginRight:'5px'}}/>
          Add Book
        </Button>
        <Modal
          open={open}
          onClose={() => setOpen(!open)}
        >
          <Box sx={style}>
            <Paper
              sx={{ 
                p: '2px 4px', 
                display: 'flex', 
                alignItems: 'center', 
                width: 'auto', 
                maxWidth: 500 
              }}
            >

              <InputBase 
                sx={{ ml: 1, flex: 1 }}
                placeholder="Find Book"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value) }
              />
              <IconButton  sx={{ p: '10px' }} >
                <SearchIcon />
              </IconButton>
            </Paper>
            {data ? <SearchResults addBookToTable={addBookToTable} results={data} books={books} /> : <SkeletonSearch />}
          </Box>
        </Modal>
      </Box>
      <BooksTable deleteBook={deleteBook} books={books} />
    </Container>
  );
}

export default LibrarySection;

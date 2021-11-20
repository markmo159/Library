import React, { useState } from 'react';
import ChosenBooks from './ChosenBooks';

import {
  Box,
  Tab,
} from '@mui/material';
import {
  TabContext,
  TabList,
  TabPanel
} from '@mui/lab';

const style ={  
  hieght:'auto', 
  maxHeight: '75vh', 
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
}


const BooksTable = ({books, deleteBook}) => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <Box 
      sx={{
        width: '100%', 
        typography: 'body1', 
        marginTop:'20px'
      }}>
      <TabContext value={value}>
        <Box 
          sx={{ 
            borderBottom: 1, 
            borderColor: 'divider' 
          }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Books I Read" value="1" />
            <Tab label="Books I Have Read" value="2" />
            <Tab label="Books To Read" value="3" />
          </TabList>
        </Box>
        <TabPanel sx={style} value="1"><ChosenBooks deleteBook={deleteBook} books={books['read']} target={'read'} /></TabPanel>
        <TabPanel sx={style} value="2"><ChosenBooks deleteBook={deleteBook} books={books['reading']} target={'reading'} /></TabPanel>
        <TabPanel sx={style} value="3"><ChosenBooks deleteBook={deleteBook} books={books['to read']} target={'to read'} /></TabPanel>
      </TabContext>
    </Box>
  );
}

export default BooksTable;
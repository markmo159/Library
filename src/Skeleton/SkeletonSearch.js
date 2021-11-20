import React from 'react';

import {
  Skeleton,
  Stack
} from '@mui/material';


const SkeletonSearch = () => {

  const skeleton = () => {
    return(
      [1,2,3,4,5].map (() => {
        return(
          <Stack sx={{ marginTop:'10px'}} spacing={1}>
            <Skeleton variant="text" width={210} />
            <Skeleton variant="rectangular" width={210} height={118} />
          </Stack>
        );
      })
    )
  }

  return (
    <div>
      {skeleton()}
    </div>
  );
}

export default SkeletonSearch;
import React from 'react'
import {Stack} from '@mui/material'
import {InfinitySpin} from 'react-loader-spinner'
function Loader() {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' width='100%'>
        <InfinitySpin color='black'/>
    </Stack>
  )
}

export default Loader
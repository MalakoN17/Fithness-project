import React from 'react'
import {Box} from '@mui/icons-material'
function HorizontalScrollbar({data}) {
  return (
    <div>
      {data.map((item) => <Box>

      </Box>)}
    </div>
  )
}

export default HorizontalScrollbar
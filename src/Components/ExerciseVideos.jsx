import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import ReactPlayer from 'react-player'
function ExerciseVideos({exerciseVideos, name}) {
  if(!exerciseVideos.length) return 'Loading....'
  return (
    <Box sx={{marginTop:{lg: '200px', xs:'20px'}}} p='20px'>
      <Typography color="#fff" variant='h3' mb='33px'>
        Watch <span style={{color:'#ff2625', textTransform:'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack flex="flex" flexWrap="wrap" justifyContent="center"  alignItems='center'
      sx={{
        flexDirection: {lg:'row'},
        gap: {lg:'110px', xs:'0'}
      }}
      >
        {exerciseVideos?.slice(0,3).map((item, index) =>{
          return(
            <Box padding='10px'>
              <ReactPlayer width="100%"  controls url={`https://www.youtube.com/watch?v=${item.video.videoId}`} />
              <Box>
                <Typography variant='h5' color='black'>
                  {item.video.title}
                </Typography>
                <Typography variant='h6' color='black' mt='10px'>
                  {item.video.channelName}
                </Typography>
              </Box>
            {/* </a> */}
            </Box>
          )
        })}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos
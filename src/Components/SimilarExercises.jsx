import React from 'react'
import {Box, Stack, Typography} from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader' 
function SimilarExercises({targetMuscleExercises, equipmentExercises}) {
  const scrollUp = ()=>{
    window.scroll({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <Box  sx={{mt: {lg: '100px', xs:'200px'}}}>
      <Typography variant='h3'>
        Exercises that target the same muscle group
      </Typography>
      <Stack  direction='row' sx={{p:'2px', position:'relative'}}>
        {targetMuscleExercises.length ?
         <HorizontalScrollbar onClick={scrollUp} data={targetMuscleExercises}/>
        :<Loader/>}
      </Stack>
      <Typography marginTop='50px' variant='h3'>
        Exercises that use the same equipment
      </Typography>
      <Stack   direction='row' sx={{p:'2px', position:'relative'}}>
        {equipmentExercises.length ?
         <HorizontalScrollbar onClick={scrollUp}  data={equipmentExercises} />
        :<Loader/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
import React, {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import {Box, Stack, Typography} from '@mui/material'
import {exercisesOptions, fetchData} from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Exercise({exercises, setExercises, bodyPart}) {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercises = indexOfLastExercise - exercisesPerPage;
  const currentExercise = exercises.slice(indexOfFirstExercises, indexOfLastExercise)
  const paginate = (e, value)=>{
    setCurrentPage(value);
    window.scrollTo({top:'1500', behavior:'smooth'})
  }
  useEffect(()=>{
    const fetchExercisesData = async () =>{
      let exerciseData = [];
      if(bodyPart === 'all'){
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`, exercisesOptions)
      } else {
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions)
      }
      setExercises(exerciseData)
    }
    fetchExercisesData()
    Aos.init({ duration: 1000 });
  },[bodyPart])
  return (
    <Box id="exercises" data-aos="fade-up"
    sx={{mt: {lg: '110px'}}}
    mt='50px'
    p='20px'
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap: {lg:'110px', xs:'50px'}}}
       flexWrap='wrap' justifyContent='center'>
        {currentExercise.map((exercise, index)=>{
          return(
            <ExerciseCard  key={index} exercise={exercise}/>
          )
        })}
       </Stack>
       <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && (
          <Pagination 
          color='standard' 
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'/>
        )}
       </Stack>
    </Box >
  )
}

export default Exercise
import React, {useState} from 'react'
import {Box} from '@mui/material';
import HeroBanner from '../Components/HeroBanner';
import SearchExercise from '../Components/SearchExercise';
import Exercises from '../Components/Exercises';
function Home() {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  return (
    <Box>
      <HeroBanner />
      <SearchExercise
      setExercises={setExercises}
      setBodyPart={setBodyPart} 
      bodyPart={bodyPart}
      />
      <Exercises 
      setExercises={setExercises}
      exercises={exercises} 
      bodyPart={bodyPart}
      />
    </Box>
    )
}

export default Home
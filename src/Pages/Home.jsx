import React, {useState} from 'react'
import {Box} from '@mui/material';
import HeroBanner from '../Components/HeroBanner';
import SearchExercise from '../Components/SearchExercise';
import Exercise from '../Components/Exercise';
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
      <Exercise 
      setExercises={setExercises}
      exercises={exercises} 
      bodyPart={bodyPart}
      />
    </Box>
    )
}

export default Home
import React, {useEffect, useState} from 'react'
import {Box, Stack, TextField, Typography, Button} from '@mui/material'
import { exercisesOptions, fetchData} from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

function SearchExercise({setExercises, setBodyPart, bodyPart}) {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] =useState([])

  useEffect(() =>{
    const fetchExercisesData = async ()=>{
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions
      )
      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExercisesData()
  },[])
  const handleSearch = async () =>{
    if(search){
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises', exercisesOptions
      );
      const searchedExercise = exercisesData.filter(
        (exercise) => exercise.name.toLocaleLowerCase().includes(search)
        ||exercise.target.toLocaleLowerCase().includes(search)
        ||exercise.equipment.toLocaleLowerCase().includes(search)
        ||exercise.bodyPart.toLocaleLowerCase().includes(search)
      )

      setSearch('');
      setExercises(searchedExercise);
    }
  }
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{
        fontSize: {lg:'44px', xs:'30px'}
      }} mb='50px' textAlign='center'>
        Awesome Exercises You <br/>
        Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField 
        sx={{
          input: {
            fontWeight:'700',
            border:'none',
            borderRadius:'4px'
          },
          width:{lg: '800px', xs:'350px'},
          borderRadius:'40px'
        }}
        height='76px'
        value={search}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        placeholder="Search Exercises"
        />
        <Button className='search-btn'
        sx={{
          bgcolor:'#FF2625',
          color:'#fff',
          textTransform:'none',
          width:{ lg:'175px', xs:'80px'},
          fontSize: {lg:'20px', xs:'14px'},
          height:'56px',
          position:'absolute',
          right:'0'
        }}
        onClick={handleSearch}
        href='#exercises'
        >Search</Button>
      </Box>
      <Box sx={{position: 'relative', width:'100%', p:'20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart}
        setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  )
}

export default SearchExercise
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import {exercisesOptions, fetchData, youtubeOptions} from '../utils/fetchData';
import SimilarExercises from '../Components/SimilarExercises'
import Detail from '../Components/Detail'
import ExerciseVideos from '../Components/ExerciseVideos'

function ExercisedDetail() {
  const [exercisedDetail, setExercisedDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercisesData] = useState([]);
  const { id } = useParams()

  useEffect(() =>{
    const fetchExerciseData = async ()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exercisesOptions);
      setExercisedDetail(exerciseDetailData);

      const ExerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(ExerciseVideosData.contents)

      const targetMuscleExercises = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exercisesOptions);
      setTargetMuscleExercises(targetMuscleExercises)

      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exercisesOptions);
      setEquipmentExercisesData(equipmentExercisesData)
    }
    fetchExerciseData()
  },[id])
  return (
    <Box>
      <Detail exerciseDetail={exercisedDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exercisedDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises}
      equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExercisedDetail
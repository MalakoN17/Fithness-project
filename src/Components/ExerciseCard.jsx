import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
function ExerciseCard({ exercise }) {
  const scrollUp = ()=>{
    window.scroll({
      top:0,
      behavior:"smooth"
    })
  }
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img onClick={scrollUp} src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "red",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography ml='21px' color='#000'
       fontWeight='bold' mt='11px' pb='10px'
        textTransform='capitalize' fontSize='22px'>
        {exercise.name}
      </Typography>
    </Link>
  );
}

export default ExerciseCard;

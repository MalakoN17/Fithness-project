import React from 'react'
import {Stack, Button, Typography} from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

function Detail({exerciseDetail}) {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    ]
  return (
    <Stack gap='60px' sx={{flexDirection: {lg:'row'}, p:'20px', alignItems:'center'}}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image'/>
        <Stack sx={{gap: {lg:'35px', sx:'20px'}}}>
            <Typography color="#fff" variant='h3'>
                {name}
            </Typography>
            <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#fff">
            Exercises keep you strong.{' '}
          <span style={{color:"#fff", textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
            </Typography>
            {extraDetail.map((item, index) =>{
             return(   <Stack key={index} direction='row' gap='24px' alignItems='center'>
                  <Button sx={{background:'#fff2db', borderRadius:'50%', width:'100px', height:'100px'}}>
                  <img src={item.icon} alt={bodyPart} style={{width:'50px', height:'50px'}}/>
                  </Button>
                    <Typography color="#fff" textTransform="capitalize" variant='h5'>
                        {item.name}
                    </Typography>

                </Stack>
)
            })}
        </Stack>
    </Stack>
  )
}

export default Detail
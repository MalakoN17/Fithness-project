import React, {useEffect} from 'react'
import {Box, Stack, Typography} from '@mui/material';
import Logo from '../assets/images/LogoFitness-preview.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Aos from 'aos'
import 'aos/dist/aos.css'
function Footer() {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  return (
    <Box  mt='50px' p='10px'>
      <Stack gap='40px' alignItems='center' px='40px' pt='15px'>
        <img src={Logo} alt="logo" width='250px' height='100px' data-aos="fade-up"/>
        <Typography variant='h5' pb='40px' mt='20px' fontWeight='bold' textAlign="center">
          Fitness - Just do it and go practice!
        </Typography>
      </Stack>
      <Stack alignItems='center' display='flex' flexDirection='row' justifyContent='center' gap='15px' >
      <a href="https://www.linkedin.com/in/malako-benny-nagato-209838219" style={{color:'black'}}><LinkedInIcon/></a>  
      <a href="https://github.com/MalakoN17" style={{color:'black'}}><GitHubIcon/></a>  
      </Stack>
    </Box>
  )
}

export default Footer
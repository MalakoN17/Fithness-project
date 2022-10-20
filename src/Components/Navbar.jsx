import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
import Logo from '../assets/images/LogoFitness-preview.png'
function Navbar() {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap: {sm:'122px', xs: '40px'}, mt:{sm:'32px', xs:'20px'}, justifyContent:'none', flexDirection:{lg:"row", xs:'column'}}} px='20px'>
      <Link to='/'>
      <img src={Logo} alt='logo' style={{width:'100px', height:'80px', margin:'0 20px'}}/>
      </Link>
    <Stack direction='row' gap='40px' fontSize='24px' alignContent='flex-end'>
      <Link to='/' style={{textDecoration:'none', color:'3A1212', borderBottom:'3px solid #FF2625'}}>Home</Link>
      <a href='#exercises' style={{textDecoration:'none', color:'#3A1212'}}>Exercises</a>
    </Stack>
    </Stack>
  )
}

export default Navbar
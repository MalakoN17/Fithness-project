import React from 'react'
import emailjs from 'emailjs-com'
import {Box, Stack, Typography} from '@mui/material'
import LogoImage from '../assets/images/LogoFitness-preview.png'
import Button from '@mui/material/Button';
function Contact() {
    const sendEmail = (e)=>{
        e.preventDefault();
        emailjs.sendForm(
          "service_wx1r1ua",
          "template_goongxj",
          e.target,
          "CF1E9Ctlahma83eeB"
        ).then(resp =>{
            console.log(resp);
            alert("Thank you your massage send to us")
            e.target.reset()
        }).catch(error => console.log(error));
    }
  return (
    <Box flex="flex" justifyContent="center" alignItems='center' marginTop="10px">
        <Stack>
            <Typography textAlign="center" fontWeight='600' fontSize='26px'>
                Contact with us 
            </Typography>
            {/* <Typography fontWeight='200' fontSize='26px'>
                Here you can leave us a massage and we get back to you
            </Typography> */}
        </Stack>
            <Typography textAlign="center" variant='h3'>Contact form</Typography>
        <Stack flex="flex">
            <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='sm:flex p-4 w-full items-center justify-center '>
              <div className='py-4 flex items-center'>
              <img src={LogoImage} alt="" />
              </div>
              <form onSubmit={sendEmail} >
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='name'
                    />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>
                      Phone Number
                    </label>
                    <input
                      className='border-2 rounded-lg p-3 flex border-gray-300'
                      type='text'
                      name='phone'
                    />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300'
                    type="email" name='user_email'
                  />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300'
                    name="massage" cols="30" rows="10"
                  ></textarea>
                </div>
                <button type="submit" value='send' className='w-full p-4 text-black mt-4 bg-red-500 rounded-xl'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Stack>
    </Box>
  )
}

export default Contact
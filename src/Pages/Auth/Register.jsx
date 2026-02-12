import { Box, Typography, TextField, Button } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';


export default function Register() {


  const {register, handleSubmit} = useForm({});

  const registerfunction = async (values)=>{
    console.log("values", values);

    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`, values);
      console.log(response);
    } catch (error) {
      console.log("error , ", error);
    }

  }



  return <Box component={'section'} textAlign={'center'} py={5} bgcolor={'#333333'} display={'flex'} justifyContent={'center'} >

    <Box component={'form'} onSubmit={handleSubmit(registerfunction)} display={'flex'}  flexDirection={'column'} gap={3} alignItems={'center'}
     bgcolor={'#3C3C3D'} width={'50%'}py={5} sx={{borderRadius:5}}  >
          <Typography component={'h1'} color='white' variant='h1'>Sign Up</Typography>

      <TextField {...register('userName')} label="User Name" variant="filled" sx={{ width: '90%' , bgcolor:'#C0C3C7', color:'black',  borderRadius: 2 }} />
      <TextField {...register('fullName')} label="Full Name" variant="filled"  sx={{ width: '90%' , bgcolor:'#C0C3C7', color:'black',  borderRadius: 2 }}  />
      <TextField {...register('email')} label="Email" variant="filled"  sx={{ width: '90%' , bgcolor:'#C0C3C7', color:'black',  borderRadius: 2 }} />
      <TextField {...register('password')} label="Password" variant="filled"  sx={{ width: '90%' , bgcolor:'#C0C3C7', color:'black',  borderRadius: 2 }}  />
      <TextField {...register('phoneNumber')} label="Phone" variant="filled"  sx={{ width: '90%' , bgcolor:'#C0C3C7', color:'black',  borderRadius: 2 }} />

      <Button variant="contained" type='submit'>Create</Button>

    </Box>

  </Box>


}

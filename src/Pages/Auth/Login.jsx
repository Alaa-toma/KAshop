import { Box, Typography, TextField, Button } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link as tolink } from 'react-router-dom'
import { Link } from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Email } from '@mui/icons-material';
import { LoginSchema } from './../../Validation/Loginschema'

export default function Login() {


  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(LoginSchema), mode: 'onBlur' });
const [serverError, setServerError] = useState([]);

const Loginfunction = async (values) => {
    console.log("values", values);

    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Login`, values);
      console.log(response);
    } catch (error) {
      console.log("catch err",error.response.data.errors )
      setServerError(error.response.data.errors);
    }

  }


  


  return (
    <Box component={'section'} textAlign={'center'} py={10} bgcolor={'#333333'} display={'flex'} justifyContent={'center'} >

      <Box component={'form'} onSubmit={handleSubmit(Loginfunction)} display={'flex'} flexDirection={'column'} gap={3} alignItems={'center'}
        bgcolor={'#3C3C3D'} width={'50%'} py={3} sx={{ borderRadius: 5 }}  >
        <Typography component={'h1'} color='white' variant='h1'>Log In</Typography>



        <TextField {...register('email')} label="Email" variant="filled" error={errors.email} helperText={errors.email?.message} sx={{ width: '90%', bgcolor: '#C0C3C7', color: 'black', borderRadius: 2 }} />
        <TextField {...register('password')} label="Password" variant="filled" error={errors.password} helperText={errors.password?.message} sx={{ width: '90%', bgcolor: '#C0C3C7', color: 'black', borderRadius: 2 }} />

        <Button variant="contained" type='submit' sx={{ background: '#57a0ce', paddingX:'5%', paddingY:'2%', fontWeight:'900' }} >Log In</Button>


        <Box  sx={{display:'flex', justifyContent:'space-between', width:'90%'}} >
          
          <Link component={tolink} to={'/ChangePass'} color='#fff' >Forgot your password?  </Link>
          <Link component={tolink} to={'/Register'} color='#fff' >Sign Up  </Link>

        </Box>


      </Box>

    </Box>
  )
}

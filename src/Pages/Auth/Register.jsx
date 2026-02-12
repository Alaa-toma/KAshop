import { Box, Typography, TextField, Button, CircularProgress } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link as tolink } from 'react-router-dom'
import { Link } from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { object } from 'yup';
import { Email } from '@mui/icons-material';
import { RegisterrSchema } from './../../Validation/Registrationschema'


export default function Register() {



  const [serverError, setServerError] = useState([]);


  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: yupResolver(RegisterrSchema), mode: 'onBlur' });

  const registerfunction = async (values) => {
    console.log("values", values);

    try {
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`, values);
      console.log(response);
    } catch (error) {
      console.log("catch err", error.response.data.errors)
      setServerError(error.response.data.errors);
    }

  }



  return <Box component={'section'} textAlign={'center'} py={10} bgcolor={'#333333'} display={'flex'} justifyContent={'center'} >

    <Box component={'form'} onSubmit={handleSubmit(registerfunction)} display={'flex'} flexDirection={'column'} gap={3} alignItems={'center'}
      bgcolor={'#3C3C3D'} width={'50%'} py={3} sx={{ borderRadius: 5 }}  >
      <Typography component={'h1'} color='white' variant='h1'>Sign Up</Typography>
      <Box display={'flex'} gap={3}>
        <Typography component={'span'} color='white'>Already have an account?</Typography>
        <Link component={tolink} to={'/Login'} color='#fff' > Log In </Link>
      </Box>

{serverError?.length >0 && (<Box color={'red'}> {serverError.map( (err)=> <Typography> {err} </Typography>  )} </Box>  )}

      <TextField {...register('userName')} label="User Name" variant="filled" error={errors.userName} helperText={errors.userName?.message} sx={{ width: '90%', bgcolor: '#C0C3C7', color: 'black', borderRadius: 2 }} />
      <TextField {...register('fullName')} label="Full Name" variant="filled" error={errors.fullName} helperText={errors.fullName?.message} sx={{ width: '90%', bgcolor: '#C0C3C7', color: 'black', borderRadius: 2 }} />
      <TextField {...register('email')} label="Email" variant="filled" error={errors.email} helperText={errors.email?.message} sx={{ width: '90%', bgcolor: '#C0C3C7', color: 'black', borderRadius: 2 }} />
      <TextField {...register('password')} label="Password" variant="filled" error={errors.password} helperText={errors.password?.message} sx={{ width: '90%', bgcolor: '#C0C3C7', color: 'black', borderRadius: 2 }} />
      <TextField {...register('phoneNumber')} label="Phone" variant="filled" error={errors.phoneNumber} helperText={errors.phoneNumber?.message} sx={{ width: '90%', bgcolor: '#C0C3C7', color: 'black', borderRadius: 2 }} />

      <Button variant="contained" type='submit' sx={{ background: '#57a0ce', paddingX:'5%', paddingY:'2%', fontWeight:'900'}}  > {isSubmitting? <CircularProgress/> : 'Create'}  </Button>

    </Box>

  </Box>


}

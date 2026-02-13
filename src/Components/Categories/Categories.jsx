import React, { use, useEffect, useState } from 'react'
import { Box, CircularProgress } from '@mui/material';
import UseCategories from '../../hooks/UseCategories';


export default function Categories() {

   const  { data, isLoading, isError, error } = UseCategories();
 
if(isError) { return <Box color={'red'}> {error?.message || 'something wrong'} </Box> }
if(isLoading){
    return <CircularProgress />
}
    return <Box>
        {
            data.response.map(category => 
                <Box>
                    {category?.name || ""}
                </Box>

            )
        }
    </Box>
}

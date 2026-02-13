import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import { Box, CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';


export default function Categories() {

    const GetCategories = async () => {
        const response = await axios.get("https://knowledgeshop.runasp.net/api/Categories");
        return (response.data);
    }

   const {data, isLoading, isError, error} = useQuery({
    queryKey:['Categories'], 
    queryFn: GetCategories, 
    staleTime:1000*60*5 /* stay in cash for 5 min  */
   });

if(isError) { return <Box color={'red'}> {iserr} </Box> }
if(isLoading){
    return <CircularProgress />
}
    return <Box>
        {
            data.response.map(category => 
                <Box>
                    {category.name}
                </Box>

            )
        }
    </Box>
}

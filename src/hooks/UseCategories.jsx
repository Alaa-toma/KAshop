
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import { Box, CircularProgress } from '@mui/material';
import axiosInstanse from '../Api/AxiosInstanse';



export default function UseCategories() {

    const GetCategories = async () => {
        const response = await axiosInstanse.get("/Categories");
        return (response.data);
    }

    const query = useQuery({
        queryKey: ['Categories'],
        queryFn: GetCategories,
        staleTime: 1000 * 60 * 5 /* stay in cash for 5 min  */
    });


    return query ;
}

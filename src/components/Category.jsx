import React, {useEffect, useState} from 'react';
import axios from "axios";
import MovieList from "./MovieList";
import {useParams} from "react-router-dom";

const Category = () => {
    const {id}=useParams();
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres='+id;

    const [movies,setMovies]=useState([]);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2NhMzFmOGM1NzExNjNiNTM3MTdmZTJmZDIyYWI0MSIsInN1YiI6IjY0N2QzYTIxMTc0OTczMDExODcxYzM1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jsM_weX0lSAlx-jQKhG1oMEeVZU3zPaZWF026ilxOn8'
        }
    }
    const getMovies=async () => {
        const res = await axios.get(url, options);
        setMovies(res.data.results)
    }
    useEffect(()=>{
        getMovies();
    },[]);
    return (
        <div>
            <MovieList movies={movies}/>
        </div>
    );
};

export default Category;
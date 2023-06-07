import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function MovieDetail() {
    const {id}=useParams();
    const url = 'https://api.themoviedb.org/3/movie/'+id+'?language=en-US';

    const [movie,setMovie]=useState([]);
    const [generos,setGeneros]=useState([])
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2NhMzFmOGM1NzExNjNiNTM3MTdmZTJmZDIyYWI0MSIsInN1YiI6IjY0N2QzYTIxMTc0OTczMDExODcxYzM1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jsM_weX0lSAlx-jQKhG1oMEeVZU3zPaZWF026ilxOn8'
        }
    }
    const getMovies=async () => {
        const res = await axios.get(url, options);
        setMovie(res.data)
        setGeneros(res.data.genres)
    }
    useEffect(()=>{
        getMovies();
    },[]);

    return (
        <div className="bg-white ml-20">
            <div className="pt-6 ">

                {/* Image gallery */}
                <div className="mx-auto flex text-center border-8 mt-6 max-w-md sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <img src={'https://image.tmdb.org/t/p/w500/'+ movie.poster_path} alt="" className='col-start-2'/>

                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{movie.title}</h1>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div className="mt-10">
                            <h2 className="text-sm font-medium text-gray-900">Eslogan </h2>

                            <div className="mt-4 space-y-6">
                                <p className="text-sm text-gray-600">{movie.tagline}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{movie.overview}</p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h3 className="text-sm font-medium text-gray-900">Generos</h3>

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">

                                    {generos.map((genre) => (
                                        <li key={genre.id} className="text-gray-400">
                                            <span className="text-gray-600">{genre.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

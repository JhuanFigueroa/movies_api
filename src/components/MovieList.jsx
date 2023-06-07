/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";



export default function MovieList({movies}) {

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">PELICULAS</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {movies.map((movie) => (
            <div key={movie.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    src={'https://image.tmdb.org/t/p/w300/'+ movie.poster_path}/>
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-center">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/detail/${movie.id}`}>
                      <h4 aria-hidden="true" className="text-center text-2xl font-bold" >  {movie.title}</h4>

                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{movie.release_date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

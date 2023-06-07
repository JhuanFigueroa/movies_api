import {Fragment, useEffect, useState} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import axios from "axios";
import {Link} from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MenuDesp() {
    const [categories,setCategories]= useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjY2NhMzFmOGM1NzExNjNiNTM3MTdmZTJmZDIyYWI0MSIsInN1YiI6IjY0N2QzYTIxMTc0OTczMDExODcxYzM1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jsM_weX0lSAlx-jQKhG1oMEeVZU3zPaZWF026ilxOn8'
        }
    }
    const getCategories=async () => {
        const res = await axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', options);
        setCategories(res.data.genres);
    }

    useEffect(()=>{
        getCategories();
    },[]);
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">CATEGORIAS</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {categories.map((category) => (
                        <div key={category.id} className="group relative">

                            <div className="mt-4 flex justify-center">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <Link to={`/category/${category.id}`}>
                                            <h4 aria-hidden="true" className="text-center text-2xl font-bold" >  {category.name}</h4>

                                        </Link>
                                    </h3>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

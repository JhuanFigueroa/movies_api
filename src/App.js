import logo from './logo.svg';
import './App.css';
import {Fragment, useEffect, useState} from "react";
import axios from "axios";
import Example from "./components/NavBar";
import MovieList from "./components/MovieList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Category from "./components/Category";
import Home from "./components/Home";
import Pronto from "./components/Pronto";
import Popular from "./components/Popular";
import {Menu} from "@material-tailwind/react";
import MenuDesp from "./components/Menu";
import MovieDetail from "./components/MovieDetail";
function App() {

  return (
      <Fragment>

       <BrowserRouter>
           <Example/>
           <Routes>
               <Route path={'/'} element={<Home/>}/>
               <Route path={'/estrenos'} element={<Home/>}/>
               <Route path={'/detail/:id'} element={<MovieDetail/>}/>
               <Route path={'/categories'} element={<MenuDesp/>}/>
               <Route path={'/category/:id'} element={<Category/>}/>
               <Route path={'/proximos'} element={<Pronto/>}/>
               <Route path={'/tendencia'} element={<Popular/>}/>
           </Routes>
       </BrowserRouter>
      </Fragment>


  );
}

export default App;

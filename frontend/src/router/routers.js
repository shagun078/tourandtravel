
import React from "react";
import {Routes,Route,Navigate} from 'react-router-dom'

import Home from './../pages/Home';
import Tours from './../pages/tours';
import TourDetails from './../pages/tourDetails';
import Login from './../pages/login';
import Register from './../pages/register';
import SearchResultlist from './../pages/searchResultList';
import ThankYou from "../pages/ThankYou";

const Routers = ()=>{
    return (
        <Routes>
            <Route path ='/' element = {<Navigate to='/home' />} />
            <Route path = '/home' element = {<Home />}/>
            <Route path = '/tours' element = {<Tours />}/>
            <Route path = '/tours/:id' element = {<TourDetails />}/>
            <Route path = '/login' element = {<Login />}/>
            <Route path = '/register' element = {<Register />}/>
            <Route path = '/tours/search' element = {<SearchResultlist />}/>
            <Route path= '/thank-you' element={<ThankYou/>} />
        </Routes>
    )
}
export default Routers;
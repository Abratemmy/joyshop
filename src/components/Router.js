import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Products from "../components/Products";
import Payment from "../components/Payment";
import Details from '../components/Details';

const Router = ()=>(
    <Routes>
        <Route exact path ='/' caseSensitive={false} element={<Home />} />
        <Route exact path ='/products'caseSensitive={false} element={<Products />} />
        <Route exact path='/payment' caseSensitive={false} element={<Payment />}/>
        <Route exact path='/details/:id'caseSensitive={false} element={<Details />} />
       
    </Routes>
)
export default Router
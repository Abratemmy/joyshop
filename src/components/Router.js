import React from 'react';
import {Routes, Route } from 'react-router-dom';
import MainHome1  from './Home/MainHome1';
import Products from "../components/Products";
import Payment from "../components/Payment";
import Details from '../components/Details';
import Ebook from './book/ebook/ebook';
import Singlebook from './book/Books/singlebook.js';
import Allbooks from './book/Allbook/Allbooks';
import BookSearch from "./book/booksearch/booksearch"
import Popularbook from './book/popularbook/popularbook';


const Router = ()=>(
    <Routes>
        <Route exact path ='/' caseSensitive={false} element={<MainHome1 />} />
        <Route exact path ='/products'caseSensitive={false} element={<Products />} />
        <Route exact path='/payment' caseSensitive={false} element={<Payment />}/>
        <Route exact path='/details/:id'caseSensitive={false} element={<Details />} />
        <Route exact path="/free_ebook" caseSensitive={false} element={<Ebook />} />
        <Route exact path="/books/:id" caseSensitive={false} element={<Singlebook/>} />
        <Route exact path= "/all_books" caseSensitive={false} element={<Allbooks />} />
        <Route exact path="/booksearch" caseSensitive={false} element={<BookSearch />} />
        <Route exact path="/popular_products" caseSensitive={false} element={<Popularbook />} />
       
    </Routes>
)
export default Router
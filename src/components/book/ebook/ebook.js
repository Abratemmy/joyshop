import React from 'react';
import "./ebook.css";
import book from "../../image/freebook.JPG"
import Ebookform from './ebookform';

function Ebook() {
  return (
    <div className='free-book'>
        <div className='container'>
            <div className='singlebook-header' style={{textAlign:"center"}}>Free ebook</div>

            <div className='freebook-pic'>
              <img src={book} alt="nook loading" />
            </div>

            <div className='row'>
              <div className='col-lg-7 col-md-6 col-sm-12'>
                <div className='freebook-text'>
                    <h2>Jesus—May You Know Him More</h2>
                    <p>In this e-book from Tony Evans, you'll discover:</p>
                    <ul>
                      <li>principles of putting Jesus first</li>
                      <li>how to grow in and maintain your relationship with Christ</li>
                      <li>truths for maximizing your spiritual development</li>
                    </ul>
                    <div className='free-text'>Download your FREE e-book today and discover all God has in store for you as you pursue Christ.</div>
                </div>
              </div>

              <div className='col-lg-5 col-md-6 col-sm-12'>
                <div className='freebook-form'>
                  <h4>Download Your Free E-book</h4>

                  <Ebookform />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Ebook;

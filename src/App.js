import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Router from './components/Router'


function App() {

  return (
   <React.Fragment>
      <Navbar />
      <Router />


    {/* footer css is inside navbar.css */}
      <div className="footer">
        <div className="container footer-container">
            <div className="row">
              © 2022 Joy Agunbiade Stores. All rights reserved
            </div>

            <div className="">
              Built by <a href="https://abratemmy.github.io/myportfolio">hayteetech</a>
            </div>
        </div>
      </div>

      



   </React.Fragment>
  );
}

export default App;

import React from 'react';
import Title from './comps/Title'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accounting from './comps/Accounting';
import Navbar from './comps/navbar/Navbar';
import Pictures from './comps/pictures/Pictures';
import HomePagePic from './comps/homePagePic/HomePagePic';
import Receipts from './comps/Receipts';
import Home from './comps/Home';
import LocationsDataTable from './comps/LocationsDataTable';
//import UploadForm from './comps/UploadForm';

function App() {
  
  return (
    <>
    
    <Router>
      
      <div className="container">
      <Navbar />  
        <Routes>
          <Route path="accounting" element={<Accounting />} />
          <Route path="pictures" element={<Pictures />} />
          <Route path="receipts" element={<Receipts />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/" element={<Home /> } />
          <Route path='/locations' element={<LocationsDataTable />} />
        </Routes>
      </div>
    </Router>
      
    <div className="App">
      {/* <UploadForm/> */}  
    </div>
    
    </>
  );
}

export default App;

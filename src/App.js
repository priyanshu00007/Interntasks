import React from 'react';
// import LoginSignup from './LoginSignup'; 
import GetHeaders from "./Components/Headers";
import Slider from "./Components/SLider";
import ProductionHoose from "./Components/ProductionHoose";
import GenereList from "./Components/GenereMovieList";


function App() {
  return (
    <>
      {/* <LoginSignup /> */}
      <GetHeaders />
      <Slider/>
      <ProductionHoose/>
      <GenereList/>
    </>
  );
}

export default App;

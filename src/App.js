import React from 'react';
import './App.css';
import {Head} from './Components/Head'
import {Dropdown} from './Components/Dropdown'
import {Carousel} from './Components/Carousel'
import {Grid} from './Components/Grid'
import {Mobile_Grid} from './Components/Mobile_Grid'
import {Card_Block} from './Components/Card_Block'
import {BestSeller} from './Components/BestSeller'
import {Recommended} from './Components/Recommended'
import {History} from './Components/History'
import {Subscribe} from './Components/Subscribe'
import {Testimony} from './Components/Testimony'
import {Footer} from './Components/Footer'
function App() {
  return (
    <div>
      <Head/>
      <Dropdown/>
      <Carousel/>
      <Grid/>
      <Mobile_Grid/>
      <Card_Block/>
      <BestSeller/>
      <Recommended/>
      <History/>
      <Subscribe/>
      <Testimony/>
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react'

import {DataComing} from './PropsTypes';

function Home(props:DataComing) {
  return (
    <div>
      React Typesscript eğitimleri {props.name}
      <br/>
      Kurs Sayısı : {props.courseNumber}
     {props.isBest ? <p>En iyi react eğitimi</p> : '' } 
    </div>
  )
}

export default Home

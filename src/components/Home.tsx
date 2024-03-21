import React from 'react'

type DataComing = {
    name:string;
    courseNumber:number;
    isBest:boolean;
}
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


import './App.css';
import Home from './components/Home';
import Instructor from './components/Instructor';
import InstructorList from './components/InstructorList';
import Request from './components/Request';

function App() {

  const instructor = {
    firstName:"Uğur",
    lastName: "İşbilen",
  };
  const instructorList = [{
    firstName:"Uğur",
    lastName: "İşbilen",
  },
  {
    firstName:"Aslı",
    lastName: "Ara",
  },
  {
    firstName:"Gse",
    lastName: "İşbiAFAlen",
  }
];

  return (
    <div className="App">
      <Home name="Uğur İşbilen" courseNumber={28} isBest={true}/>

      <Instructor instNameLastName={instructor}/>

      <InstructorList instNameLastNameList={instructorList}/>

      <Request status="success"/>
    </div>
  );
}

export default App;

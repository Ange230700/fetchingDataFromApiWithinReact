import './App.css'
import DisplayEmployee from './components/DisplayEmployee';
import axios from 'axios';
import { useState } from 'react';


const sampleEmployee = {
  gender: "male",
  name: {
    title: "mr",
    first: "Mathys",
    last: "aubert",
  },
  location: {
    street: {
      number: 4840,
      name: "rue de la mairie",
    },
    city: "Perpignan",
    postcode: "90208",
  },
  email: "mathys.aubert@example.com",
  picture: {
    medium: "https://randomuser.me/api/portraits/med/men/40.jpg",
  },
};

function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
  const getEmployee = () => {
    // Send the request
    axios.get('https://randomuser.me/api?nat=fr')
      // Use this data to update the state
      .then(response => setEmployee(response.data.results[0]))
  }
  
  return (
    <div className='App'> 
      <DisplayEmployee employee={employee}/>
      <button type="button" onClick={getEmployee}>Get employee</button>
    </div>
  )
}

export default App

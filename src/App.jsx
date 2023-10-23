import UserCard from "./components/UserCard";
import "./App.css";
import { useState } from "react";
import axios from "axios";

const user = {
  firstName: "John",
  lastName: "Doe",
  image: "https://randomuser.me/api/portraits/men/75.jpg",
  email: "john.doe@random.com",
};

function App() {
  const [
    initialUserProfile, 
    setInitialUserProfile
  ] = useState(user);
  const getEmployee = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        const employee = response.data.results[0];
        const newEmployee = {
          firstName: employee.name.first,
          lastName: employee.name.last,
          image: employee.picture.large,
          email: employee.email,
        };
        setInitialUserProfile(newEmployee);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="app">
      <UserCard
        firstName={initialUserProfile.firstName}
        lastName={initialUserProfile.lastName}
        image={initialUserProfile.image}
        email={initialUserProfile.email}
      />
      <button onClick={getEmployee}>Get Employee</button>
    </div>
  );
}
export default App;

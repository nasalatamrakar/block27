import { useState, useEffect } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import SignUpForm from "./components/SignUpForm";
import axios from "axios";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const authenticate = async () => {
    try {
      if (!window.localStorage.getItem("token")){
        throw Error("no token found")
      }
      const { data } = await axios.get(
        `https://fsa-jwt-practice.herokuapp.com/authenticate`,
        {
          headers: {
            "Authorization": `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      );
      console.log(data);
      setUser(data.data);
      
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setError("")
    if (window.localStorage.getItem("token")) {
    authenticate();
  }}, [user.username]);

  return (
    <div>
      {user.username ? (
        <Welcome user={user} setUser={setUser}/>
      ) : (
        <div>
          <h1>Please Login:</h1>
          <SignUpForm authenticate={authenticate} setError={setError}/>
        </div>
      )}
      <hr />
      {error === 401 ? <h1>incorrect credentials</h1> : null}
    </div>
  );
}

export default App;

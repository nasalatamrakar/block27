import { useState, useEffect } from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import SignUpForm from "./components/SignUpForm";
import axios from "axios";

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  async function handleClick() {

  // }
  // const authenticate = async () => {
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
      setSuccessMessage(data.message);
      
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    setError("")
    if (window.localStorage.getItem("token")) {
    /* authenticate(); */
  }}, [user.username]);

  return (
    <div>
      {user.username ? (
        <Welcome user={user} setUser={setUser} setSuccessMessage={setSuccessMessage}/>
      ) : (
        <div>
          <h1>Please Login:</h1>
          <SignUpForm /* authenticate={authenticate} */ setError={setError}/>
        </div>
      )}
      <hr />
      <div><h2>Authenticate</h2>
      <button onClick={handleClick}>Authenticate Token</button>
      <p>{successMessage}</p>
      {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default App;

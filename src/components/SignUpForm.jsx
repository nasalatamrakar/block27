
import axios from "axios";

export default function SignUpForm({/* authenticate, */ setError}) {
  const login = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");
    console.log(username, password);
    const user = {
      username,
      password,
    };
    try {
      const { data } = await axios.post(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        user
      );
      console.log(data);
      window.localStorage.setItem("token", data.token);
     /* authenticate() */
    } catch (error) {
      console.error(error);
      console.log(error.status);
      setError(error.status)
    }
  };
  return (
    <div>
      <h2>Sign up</h2>
      <form action={login}>
        <label>
          username: <input type="text" name="username" minLength="8"/>
        </label>
        <label>
          password: <input type="text" name="password" minLength="8" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

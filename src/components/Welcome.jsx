export default function Welcome({user, setUser, setSuccessMessage}) {
    const logOut = () => {
        window.localStorage.removeItem("token")
        setUser({})
        setSuccessMessage("");
    }
  return (<div
  ><h2>Welcome {user.username}!</h2>
  <button onClick={() => {logOut()}}>Log Out</button>
  </div>);
}

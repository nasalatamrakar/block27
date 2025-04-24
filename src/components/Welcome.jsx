export default function Welcome({user, setUser}) {
    const logOut = () => {
        window.localStorage.removeItem("token")
        setUser({})
    }
  return (<div
  ><h2>Welcome {user.username}!</h2>
  <button onClick={() => {logOut()}}>Log Out</button>
  </div>);
}

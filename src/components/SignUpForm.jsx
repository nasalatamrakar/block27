import { useState } from "react"
import axios from "axios"



export default function SignUpForm(){
    const login = async (formData) => {
        const username = formData.get("username")
        const password = formData.get("password")
        console.log(username , password)
        const user = {
            username,
            password
        }
        try {
            const {data} = await axios.post('https://fsa-jwt-practice.herokuapp.com/signup', user)
                console.log(data)
                window.localStorage.setItem("token",data.token)
                Authenticate()

        }
        catch(error){
            console.error(error)
            console.log(error.status)

        
        }
    }
    return (
        <div>
            <h2>Sign up</h2>
            <form action = {login}>
                <label>
                    username: <input type = "text" name = "username"/>
                </label>
                <label>
                    password: <input type = "text" name = "password"/>
                </label>
                <button>submit</button>
            </form>
        </div>
    
    )

}

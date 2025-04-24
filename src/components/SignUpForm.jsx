import { useState } from "react"

const login = (formData) => {
    const username = formData.get("username")
    const password = formData.get("password")
    console.log(username , password)
    const user = {
        username,
        password
    }
    
}
export default function SignUpForm(){
    return (
        <div>
            <h2>Sign up</h2>
            <form>
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

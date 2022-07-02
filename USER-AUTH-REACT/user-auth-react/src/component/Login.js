import React,{ useState } from 'react'
import axios from 'axios'


const Login = (props) =>{

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

   

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData={
            email : email,
            password : password
        }
        // console.log(formData)

        //if validation pass

        axios.post("http://dct-user-auth.herokuapp.com/users/login",formData)
            .then((response)=>{
                // console.log(response.data)
                const result = response.data
                if(result.hasOwnProperty('errors')){ //Object.keys(result).includes('errors)
                    alert(result.errors)
                }else{
                    alert('successfully logged in')
                    localStorage.setItem('token',result.token)

                    // props.history.push('/')
                    window.location.replace('/')
                    props.handleAuth()
                }
            })
            .catch((err)=>{
                // console.log(err.message)
                alert(err.message)
            })

    }

    const handleChange = (e) =>{
        if(e.target.name === 'email'){
            setEmail(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder='enter email'
                    value={email}
                    onChange={handleChange}
                    name="email"
                /><br />

                <input 
                    type="password"
                    placeholder='enter password'
                    value={password}
                    onChange={handleChange}
                    name="password"
                /><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Login
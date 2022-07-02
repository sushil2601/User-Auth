import React,{ useState  } from 'react'
import axios from 'axios'


const Register = (props)=>{

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const [result, setResult] = useState({})

    // const [error,setError] = useState({})


    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData = {
            username : username,
            email : email,
            password : password
        }
            
        
        // console.log(formData)

        axios.post("http://dct-user-auth.herokuapp.com/users/register",formData)
            .then((response)=>{
                const result = response.data
                // console.log(response.data)
                // setResult(result)
                if(result.hasOwnProperty('errors')){
                    alert(result.message)
                }else{
                    // console.log('successfully created user')
                    alert('successfully created an account')
                    // props.history.push('/login')
                    window.location.replace('/login')
                }
            })
            .catch((err)=>{
                // alert.message(err)
                // console.log(err)
            })
               
        
    
        

    }
    // console.log("reslt", result)




    const handleChange = (e) =>{
        
        if(e.target.name === 'username'){
            setUsername(e.target.value)
        }else if(e.target.name === 'email'){
            setEmail(e.target.value)
        }else if(e.target.name === 'password'){
            setPassword(e.target.value)
        }
    }

    

    return(
        <div>
            <h2>Register with us</h2> 
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder='enter username'
                    value={username}
                    onChange={handleChange}
                    name="username"
                /><br />

                <span style={{color: "red"}}>{result?.errors?.username?.message}</span>
                <br /><br />

                <input 
                    type="text"
                    placeholder='enter email'
                    value={email}
                    onChange={handleChange}
                    name="email"
                /><br />

                <span style={{color: "red"}}>{result?.errors?.email?.message}</span>
                <br /><br />

                <input 
                    type="password"
                    placeholder='enter password'
                    value={password}
                    onChange={handleChange}
                    name="password"
                /><br />

                <span style={{color: "red"}}>{result?.errors?.password?.message}</span>
                <br /><br />

                <input type="submit"/>
            </form>
        </div>
    )
}


export default Register
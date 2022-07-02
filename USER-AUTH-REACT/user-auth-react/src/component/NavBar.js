import React from 'react'
import {Link,Route,Routes,withRouter} from 'react-router-dom'

import Home from './Home'
import Login from './Login'
import Register from './Register'
import Account from './Account'



const NavBar = (props) =>{

    const { userLoggedIn ,handleAuth } = props


    return(
        //here also we used React.Freagment but whenever if we used styling then we use div
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                { userLoggedIn ? ( // In place of <React.Fragment we use <> and </React.Fragment> use </>
                    <React.Fragment>
                        <li><Link to="/account">Account</Link></li>
                        <li><Link to='/logout' onClick={()=>{
                            localStorage.removeItem('token')
                            alert("Successfully logged out")
                            handleAuth()
                            props.history.push('/')
                        }}>Logout</Link></li>
                    </React.Fragment>
                ):(
                    <React.Fragment>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </React.Fragment>
                )}
                
            </ul>

            <Routes>
                <Route path="/" element={<Home/>} exact={true}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>} render={(props)=>{
                    return <Login 
                            {...props}
                            handleAuth={handleAuth}
                    />
                }} />
                <Route path="/account" element={<Account/>}/>
            </Routes>
        </div>
    )
}

// const WrappedComponent = withRouter(NavBar)

// export default WrappedComponent

export default withRouter(NavBar)
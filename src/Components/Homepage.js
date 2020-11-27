import { render } from '@testing-library/react'
import React from 'react'
import GoogleLogin from 'react-google-login'
import { selectSignedIn } from '../features/userSlice'
import { useSelector } from "react-redux";

const Homepage = () => {
    const login =(response)=>{
        console.log(response);
    }
    const isSignedIn = useSelector(selectSignedIn);
    return (
        <div className="home__page" style={{display:isSignedIn ? "none" : ""}}>
            {!isSignedIn ?  (  
                     <div className="login__message">
                <h1>Book</h1>
                <p>
                    We provide high quality online resource for reading blogs. Just sign up ans start reading some quality blogs.
                </p>
                <GoogleLogin
                clientId="112979829907-m375ukmmj4big63hjf0pab3g4kqkis4t.apps.googleusercontent.com"
                render={(renderProps)=>(
                    <button onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="login__button">
                        Login with Google
                    </button>
                )}
                onSuccess={login}
                onFailure={login}
                isSignedIn={true}
                cookiePolicy={"single_host_origin"}
                />
            </div>) :(
                ""
            ) }
        </div>
    )
}

export default Homepage

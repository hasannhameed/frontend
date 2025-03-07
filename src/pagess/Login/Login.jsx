import React from "react";
import "./Login.css"
import logo from "../../assets/netflixlogo.png";
import { useState } from "react";



const Login = () => {
    const [signIn, setSignIn] = useState("Sign In");

    const changeStateToU = () => {
        setSignIn("Sign Up");
    }
    const changeStateToI = () => {
        setSignIn("Sign In");
        
    }
    
    return(
        <div className="login">
            <img src={logo} alt="" />
            <div className="login-form col-md-3 p-5 h-4">
                <div className="py-2">
                    <h2>{signIn}</h2>
                </div>
                <form action="">
                    {signIn == "Sign In" ? null : <input type="text" className="form-control"  placeholder="Your Name"/>}
                   
                    <input type="email" className="form-control"  placeholder="Your EMail"/>
                    <input type="password" className="form-control"  placeholder="Use a SognUp Code"/>
                    <button className="btn btn-danger w-100">Sign Up</button>
                    <div className="d-flex justify-content-lg-between mt-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault" >
                            Default checkbox
                        </label>
                        </div>
                        <div className="form-help">
                            <a href="SignIn">Need Help?</a>
                        </div>
                    </div>
                    <div className="mt-4">
                        {signIn == "Sign In" 
                        ? <p >Already have an account <span onClick={changeStateToU}>Sign Up now</span></p> 
                        : <p >New to Netflix <span onClick={changeStateToI}>Sign In now</span></p>}
                    </div>
                </form>
                <div className="py-2">
                </div>
            </div>
            
        </div>
    )
}

export default Login;
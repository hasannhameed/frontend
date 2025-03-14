import React from "react";
import "./Login.css"
import logo from "../../assets/netflixlogo.png";
import { useState } from "react";
import { logIn, signUp } from "../../firebase";



const Login = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [signState, setsignState] = useState("Sign In");

    const get_auth = async (e) => {
        e.preventDefault();
        try {
            if (signState === "Sign In") {
                await logIn(email, password);
                console.log("User logged in successfully");
            } else {
                await signUp(name, email, password);
                console.log("User signed up successfully");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const changeStateToU = () => {
        setsignState("Sign Up");
    }
    const changeStateToI = () => {
        setsignState("Sign In");
        
    }
    
    
    return(
        <div className="login">
            <img src={logo} alt="" />
            <div className="login-form col-md-3 p-5 h-4">
                <div className="py-2">
                    <h2>{signState}</h2>
                </div>
                <form action="">
                    {
                        signState == "Sign In" 
                        ? null 
                        : <input 
                            type="text" 
                            className="form-control"  
                            placeholder="Your Name"
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                        />
                    }
                   
                    <input 
                        type="email" 
                        className="form-control"  
                        placeholder="Your EMail"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    <input 
                        type="password" 
                        className="form-control"  
                        placeholder="Use a SognUp Code"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <button className="btn btn-danger w-100" onClick={get_auth}>{signState}</button>
                    <div className="d-flex justify-content-lg-between mt-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault" >
                            Default checkbox
                        </label>
                        </div>
                        <div className="form-help">
                            <a href="signState">Need Help?</a>
                        </div>
                    </div>
                    <div className="mt-4">
                        {
                            signState == "Sign In" 
                            ? <p >New to Netflix <span onClick={changeStateToU}>Sign Up now</span></p>
                            : <p >Already have an account <span onClick={changeStateToI}>Sign In now</span> </p> 
                        }
                    </div>
                </form>
                <div className="py-2">
                </div>
            </div>
            
        </div>
    )
}

export default Login;
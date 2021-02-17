import { checkPropTypes } from "prop-types";
import React from "react";

const Login = (props) => {
    return(
       <div>
           <h2>Sign in</h2>
           <p>Login to manage store inventory</p>
           <button className="github" onClick={() => props.auth("Github")}>Github</button>
           <button className="twitter" onClick={() => props.auth("Twitter")}>Twitter</button>
       </div>
    );
}


export default Login;
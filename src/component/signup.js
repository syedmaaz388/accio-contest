import '../App.css';
import React, { useState } from 'react';

function Signup() {
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [confirmPassword,setConfirmPassword]=useState('');
const [Success,setSuccess]=useState('');
const [error,setError]=useState('');

const handleSignup=(e)=>{

  e.preventDefault();
 
  if(!name || !email || !password || !confirmPassword){
    setSuccess("");
    setError("Error : All the fields are mandatory");
    return;
  }
 
  if(password!==confirmPassword)
  {
    setSuccess("");
    setError("Password Mismatch");
    return;
  }
  else{
    setError("");
    setSuccess("Successfully Signed Up!");
    setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setSuccess("");
    return;
  }


}

  return (
    <div className="App">
      <div className="container ">
      <h1>Signup</h1>
                    <div className="form-group">
                        <input type="text" name="name" id="name" placeholder="Full Name"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Email" 
                        
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" id="password" placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" 
                         value={confirmPassword}
                         onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    {/* <div id="msg" className="form-status"></div> */}
                    <div className="message">
                    {error && <div className="error">{error}</div>}
                    {Success && <div className="success">{Success}</div>}
                    <button onClick={handleSignup} className="btn">Signup</button>
                   
                     </div>
                    {/* <button id="signup-btn" class="btn" type="submit">Signup</button> */}

      </div>
      
      

    </div>
  );
}

export default Signup;

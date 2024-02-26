import React from "react";

const Login = () => {
    return (
        <div className="login">
            <div className="login-box">
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>                
            </div>
        </div>
    )
};

export default Login;

export const Head = () => {
    return (
      <>
        <title>Login</title>
        <html lang="en" />
      </>
    );
  };
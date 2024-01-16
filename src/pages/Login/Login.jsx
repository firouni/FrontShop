import React, { useState } from "react";
import "./login.css"
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/apiCalls";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { email, password });
    };

    return (
        <div className="log-container">
            <div className="log-wrapper">
                <h1 className="log-title">SIGN IN</h1>
                <form className="log-form">
                    <input type="email" className="inPut"
                        placeholder="e-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input className="inPut"
                        type="password"
                        placeholder="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="buTton"
                        onClick={handleClick} disabled={isFetching}>
                        LOGIN
                    </button>
                    {error &&
                        <span className="error">Something went wrong...</span>}
                    <span className="alink">DON'T YOU REMEMBER THE PASSWORD?</span>
                    <span className="alink">CREATE A NEW ACCOUNT</span>
                </form>
            </div>
        </div>
    )
};

export default Login;
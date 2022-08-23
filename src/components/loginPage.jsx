import React, { useState, useMemo, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { login } = useContext(UserContext);

    const passError = useMemo(
        () => password.length < 8 || password.length > 30,
        [password]
    );
    const userError = useMemo(
        () => username.length < 4 || username.length > 20,
        [username]
    );

    return (
        <div>
            <div class="sidenav">
                <div class="login-main-text">
                    <h2>Login Page</h2>
                    <p>Login or register to gain access.</p>
                </div>
            </div>
            <div class="main">
                <div class="col-md-6 col-sm-12">
                    <div class="login-form">
                        <form>
                            <div class="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    id="username"
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div
                                id="userHelp"
                                className={userError ? "error form-text" : "form-text"}
                            >
                                Username Must Be between 4 and 20 characters
                            </div>
                            <div class="form-group">
                                <label>Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button
                                    className="input-group-text"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowPassword((curr) => !curr);
                                    }}
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            <div
                                id="passwordHelp"
                                className={passError ? "error form-text" : "form-text"}
                            >
                                Password Must Be between 8 and 30 characters
                            </div>
                            <button
                                disabled={passError || userError}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (!passError && !userError) {
                                        login(username);
                                        navigate("/search");
                                    }
                                }}
                                type="submit"
                                className="btn btn-dark d-block ms-auto"
                            >
                                Submit
                            </button>
                            <h6 className="text-center my-4">
                                <NavLink to="/register">Don't have an account? Sign up here</NavLink>
                            </h6>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default LoginPage;
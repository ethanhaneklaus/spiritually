import React, { useMemo, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function RegisterPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const passError = useMemo(
        () => password.length < 8 || password.length > 30,
        [password]
    );
    const userError = useMemo(
        () => username.length < 4 || username.length > 20,
        [username]
    );
    const confirmError = useMemo(
        () => confirmPassword !== password || passError,
        [confirmPassword, password, passError]
    );
    return (
        <div>
            <div class="sidenav">
                <div class="login-main-text">
                    <h2>Register Page</h2>
                    <p>Register to gain access.</p>
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

                            <div class="form-group">
                                <label>Confirm Password</label>
                                <input
                                    id="confirm"
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
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
                                <div
                                    id="userHelp"
                                    className={confirmError ? "error form-text" : "form-text"}
                                >
                                    Passwords Must Match
                                </div>
                            </div>
                            <button
                                disabled={confirmError || passError || userError}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (!confirmError && !passError && !userError) {
                                        navigate("/login");
                                    }
                                }}
                                type="submit"
                                className="btn btn-dark d-block"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default RegisterPage;
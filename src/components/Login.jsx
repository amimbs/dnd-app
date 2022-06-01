import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            await axios.post("http://localhost:3001/login", {
                username: username,
                password: password
            });
        } catch (error) {
            toast.error(error.response.data.error);
        }
        finally {
            setUserName('');
            setPassword('');
        };
    };

    return (
        <div className="Login">

            <h1>Login</h1>

            <div>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => { setUserName(e.target.value) }}>
                </input>

                <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}>
                </input>

                <button onClick={login}> Login </button>
            </div>

        </div>
    );
};
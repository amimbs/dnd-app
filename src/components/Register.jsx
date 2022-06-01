
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Register() {

    const [firstNameReg, setFirstNameReg] = useState('');
    const [lastNameReg, setLastNameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [userNameReg, setUserNameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = async () => {

        try {
            await axios.post("http://localhost:3001/register", {
                firstName: firstNameReg,
                lastName: lastNameReg,
                email: emailReg,
                username: userNameReg,
                password: passwordReg
            });
        } catch (error) {
            toast.error(error.response.data.error)
        } finally {
            setFirstNameReg('');
            setLastNameReg('');
            setEmailReg('');
            setUserNameReg('');
            setPasswordReg('');
        };
    };

    return (
        <div className="registraion">

            <h1>Register</h1>

            <div>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstNameReg}
                    onChange={(e) => { setFirstNameReg(e.target.value) }}>
                </input>

                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastNameReg}
                    onChange={(e) => { setLastNameReg(e.target.value) }}>
                </input>

                <input
                    type="text"
                    placeholder="Username"
                    value={userNameReg}
                    onChange={(e) => { setUserNameReg(e.target.value) }}>
                </input>

                <input
                    type="text"
                    placeholder="Email"
                    value={emailReg}
                    onChange={(e) => { setEmailReg(e.target.value) }}>
                </input>

                <input
                    type="text"
                    placeholder="Password"
                    value={passwordReg}
                    onChange={(e) => { setPasswordReg(e.target.value) }}>
                </input>

                {/* this prevents the onlick from running immediately on page load */}
                <button onClick={register}> Register </button>
            </div>

        </div>
    );
};
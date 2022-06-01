
import React, { useState } from "react";
import axios from "axios";

export default function Register() {

    const [firstNameReg, setFirstNameReg] = useState('');
    const [lastNameReg, setLastNameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [userNameReg, setUserNameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
        console.log('i ran')
        axios.post("http://localhost:3001/register", {
            firstName: firstNameReg,
            lastName: lastNameReg,
            email: emailReg,
            username: userNameReg,
            password: passwordReg
        }).then((response) => {
            console.log(response);
            setFirstNameReg('');
            setLastNameReg('');
            setEmailReg('');
            setUserNameReg('');
            setPasswordReg('');
        });
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
                <button type="submit" onClick={register}> Register </button>
            </div>

        </div>
    )
}
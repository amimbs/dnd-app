
import React, { useState } from "react";
import axios from "axios";

export default function Register() {

    const [firstNameReg, setFirstNameReg] = useState('');
    const [lastNameReg, setLastNameReg] = useState('');
    const [emailReg, setEmailReg] = useState('');
    const [userNameReg, setUserNameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
        axios.post("http://localhost:3001//register", {
            firstName: firstNameReg,
            lastName: lastNameReg,
            email: emailReg,
            username: userNameReg,
            password: passwordReg
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className="registraion">

            <h1>Register</h1>

            <form>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => { setFirstNameReg(e.target.value) }}>
                </input>

                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => { setLastNameReg(e.target.value) }}>
                </input>

                <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => { setUserNameReg(e.target.value) }}>
                </input>

                <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => { setEmailReg(e.target.value) }}>
                </input>

                <input
                    type="text"
                    placeholder="Password"
                    onChange={(e) => { setPasswordReg(e.target.value) }}>
                </input>

                <button onSubmit={register}> Register </button>
            </form>

        </div>
    )
}
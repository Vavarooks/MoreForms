import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstname] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastName, setLastname] = useState("");
    const [lastError, setLastError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [confirmPasswordError, setconfirmPasswordError] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };
    const firstUser = (e) =>{
        setFirstname(e.target.value);
        if (e.target.value.length < 1) {
            setFirstError("First name is required!");
        } else if (e.target.value.length < 3) {
            setFirstError("First name must be longer than three letters!");
        } else {
            setFirstError("");
        }
    }

    const lastUser = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 1) {
            setLastError("Last name is required!");
        } else if (e.target.value.length < 3) {
            setLastError("Last name must be longer than three letters!");
        } else {
            setLastError("");
        }
    }

    const emailUser = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Email is required!");
        }else if (e.target.value.length < 5){
            setEmailError("Email must be longer than five letters!");
        }else{
            setEmailError("");
        }
    }

    const passUser = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError("Password is required!");
        }else if (e.target.value.length < 8){
            setPasswordError("Password must be longer than eight letters!");
        }else{
            setPasswordError("");
        }
    }

    const confirmUserPass = (e) => {
        setconfirmPassword(e.target.value);
        if(e.target.value !== password){
            setconfirmPasswordError("Passwords must match!!!");
        }else{
            setconfirmPasswordError("");
        }
    }

    const formMessage = () => {
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return (
        <>
            <div class="card d-block mx-auto w-50 my-3 border p-3">
                <form onSubmit={createUser}>
                    <h3>{formMessage()}</h3>
                    <div class="mb-3">
                        <label class="form-label">First Name: </label>
                        <input class="form-control" type="text" onChange={firstUser} />
                        {
                            firstError ?
                                <p style={{ color: 'red' }}>{firstError}</p> : ''
                        }
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Last Name: </label>
                        <input class="form-control" type="text" onChange={lastUser} />
                        {
                            lastError ?
                                <p style={{ color: 'red' }}>{lastError}</p> : ''
                        }
                    </div>
                    <div>
                        <label class="form-label">Email Address: </label>
                        <input class="form-control" type="email" onChange={emailUser} />
                        {
                            emailError ?
                                <p style={{ color: 'red' }}>{emailError}</p> : ''
                        }
                    </div>
                    <div>
                        <label class="form-label">Password: </label>
                        <input class="form-control" type="password" onChange={passUser} />
                        {
                            passwordError ?
                                <p style={{ color: 'red' }}>{passwordError}</p> : ''
                        }
                    </div>
                    <div>
                        <label class="form-label">Confirm Password: </label>
                        <input class="form-control" type="password" onChange={confirmUserPass} />
                        {
                            confirmPasswordError ?
                                <p style={{ color: 'red' }}>{confirmPasswordError}</p> : ''
                        }
                    </div>
                    <input class="form-control" type="submit" value="Create User" />
                </form>
            </div>
            <div class="card d-block mx-auto w-50 my-3 border p-3">
                <h1>Your Form Data</h1>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirmPassword}</p>
            </div>
        </>
    );
};

export default UserForm;
import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstName, setFirstname] = useState("");
    const [firstError, setFirstError] = useState("");
    const [lastName, setLastname] = useState("");
    const [lastError, setLastError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, confirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, conPassword };

        setFirstname(e.target.value);
        if (e.target.value.length < 1) {
            setFirstError("First name is required!");
        } else if (e.target.value.length < 3) {
            setFirstError("First name must be longer than three letters!");
        } else {
            setFirstError("");
        }

        setLastname(e.target.value);
        if (e.target.value.length < 1) {
            setLastError("Last name is required!");
        } else if (e.target.value.length < 3) {
            setLastError("Last name must be longer than three letters!");
        } else {
            setLastError("");
        }

        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

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
                        <input class="form-control" type="text" onChange={(e) => setFirstname(e.target.value, "firstname")} />
                        {
                            firstError ?
                                <p style={{ color: 'red' }}>{firstError}</p> : ''
                        }
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Last Name: </label>
                        <input class="form-control" type="text" onChange={(e) => setLastname(e.target.value, "lastname")} />
                        {
                            lastError ?
                                <p style={{ color: 'red' }}>{lastError}</p> : ''
                        }
                    </div>
                    <div>
                        <label class="form-label">Email Address: </label>
                        <input class="form-control" type="email" onChange={(e) => setEmail(e.target.value, "email")} />
                    </div>
                    <div>
                        <label class="form-label">Password: </label>
                        <input class="form-control" type="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <label class="form-label">Confirm Password: </label>
                        <input class="form-control" type="password" onChange={(e) => confirmPassword(e.target.value)} />
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
            </div>
        </>
    );
};

export default UserForm;
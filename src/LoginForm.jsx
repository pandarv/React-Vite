import React from "react";
import { useState } from "react";

const LoginForm = () => {
    const [formState, setFormState] = useState({
        userName: "",
        password: "",
    });

    const handleChange = (e) => {
        console.log(e.target.value);
    };
    return (
        <form>
            <div>
                <label htmlFor="userName"></label>
                <input type="text" name="userName" id="userName" placeholder="User Name" onChange={handleChange} />
                <ul>
                    <li>Between 8 - 16 characters.</li>
                    <li>Have letters and numbers.</li>
                    <li>No space in middle of User Name.</li>
                </ul>
            </div>
            <div>
                <label htmlFor="password"></label>
                <input type="password" name="password" id="password" placeholder="Password" />
                <ul>
                    <li>Between 8 - 16 characters.</li>
                    <li>At least 1 small letter.</li>
                    <li>At least 1 capital letter.</li>
                    <li>Mixture of letters and numbers.</li>
                    <li>Inclusion of at least on special character, e.g.?@#$!.</li>
                </ul>
            </div>
        </form>
    );
};

export default LoginForm;

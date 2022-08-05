import React from "react";
import { useState } from "react";

const pattern = {
    digit: /[\d]+/g,
    lowerLetter: /[a-z]/g,
    capLetter: /[A-Z]/g,
    spacialChar: /[?@#!$]/g,
};
const LoginForm = () => {
    const [formState, setFormState] = useState({
        userName: "",
        password: "",
    });
    let newUserName = formState.userName.replace(/\s/g, "");
    console.log(newUserName.trim());
    const handleChange = (e) => {
        // console.log(e.target.name + ": " + e.target.value);
        // console.log(e.target.type);
        setFormState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value.replace(/\s/g, ""),
        }));
    };
    const validate = () => {
        return regEx.test(input);
    };
    const submitHandle = (e) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={submitHandle}>
            <div>
                <label htmlFor="userName"></label>
                <input type="text" name="userName" id="userName" placeholder="User Name" onChange={handleChange} value={formState.userName} />
                <ul>
                    <li className={formState.userName.length >= 8 && formState.userName.length <= 16 ? "valid" : ""}>Between 8 - 16 characters.</li>
                    <li className={/[a-zA-Z]/g.test(formState.userName) && /[\d]+/g.test(formState.userName) ? "valid" : ""}>
                        Mixture of letters and numbers
                    </li>
                    <li className={/[_|.|-]/g.test(formState.userName) && /[\d\w.-]/g.test(formState.userName) ? "valid" : ""}>Optional of .-_ .</li>
                </ul>
            </div>
            <div>
                <label htmlFor="password"></label>
                <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} value={formState.password} />
                <ul>
                    <li className={formState.password.length >= 6 && formState.password.length <= 12 ? "valid" : ""}>Between 6 - 12 characters.</li>
                    <li className={/[a-z]/g.test(formState.password) && "valid"}>At least 1 small letter.</li>
                    <li className={/[A-Z]/g.test(formState.password) && "valid"}>At least 1 capital letter.</li>
                    <li className={/[\d]/g.test(formState.password) && "valid"}>At least 1 number.</li>
                    <li className={/[?@#!$]/g.test(formState.password) && "valid"}>Inclusion of at least on special character, e.g.?@#$!.</li>
                </ul>
            </div>
            <button type="submit">Enter</button>
        </form>
    );
};

export default LoginForm;
// /[\d|\w|.|-]\s/i.test(formState.userName) ||
// /[_|.|-]/g.test(formState.userName) &&

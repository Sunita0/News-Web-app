import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpass] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fname, lname, email, password);
        axios
            .post("http://localhost:3001/api/signup", {
                fname,
                lname,
                email,
                password,
            })
            .then((res) => {
                console.log(res.data);
                alert("Registration is successful");
                navigate("/signin");
            })
            .catch((error) => {
                console.error(error);
                alert("Registration failed. Please try again.");
            });
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="fname">First Name:</label>
                    <input
                        type="text"
                        id="fname"
                        value={fname}
                        onChange={(e) => setfname(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="lname">Last Name:</label>
                    <input
                        type="text"
                        id="lname"
                        value={lname}
                        onChange={(e) => setlname(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setpass(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "10px",
                        backgroundColor: "#007BFF",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default Signup;

import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post("http://localhost:3001/api/signin", {
        email,
        password,
      })
      .then((res) => {
        // handle success
        console.log(res.data);
        if (res.data === "success") {
          navigate("/news");
        }
      })
      .catch(function (error) {
        // handle error
        console.error(error);
      });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setpass(e.target.value)}
            style={{ width: "100%", padding: "10px", fontSize: "16px" }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;

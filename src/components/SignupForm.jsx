import { useState } from "react";
import { useNavigate } from "react-router-dom";

import postSignup from "../api/post-signup.js";

function SignupForm() {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });
  
    const handleChange = (event) => {
      const { id, value } = event.target;
      setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value,
      }));
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.email && credentials.password) {
            postSignup(
                credentials.username,
                credentials.email,
                credentials.password
            ).then((response) => {
                window.localStorage.setItem("token", response.token);
                navigate("/");
            });
        }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
            Sign Up
        </button>
      </form>
    );
  }
  
  export default SignupForm;
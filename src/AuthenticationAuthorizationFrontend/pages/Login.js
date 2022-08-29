// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// function App() {
//      const navigate=useNavigate()
// 	const [email, setEmail] = useState('')
// 	const [password, setPassword] = useState('')

// 	async function loginUser(event) {
// 		event.preventDefault()

// 		const response = await fetch('http://localhost:3001/api/login', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 			},
// 			body: JSON.stringify({
// 				email,
// 				password,
// 			}),
// 		})

// 		const data = await response.json()

// 		if (data.user) {
// 			localStorage.setItem('token', data.user)
// 			alert('Login successful')
// 			navigate('/dashboard')
// 		} else {
// 			alert('Please check your username and password')
// 		}
// 	}

// 	return (
// 		<div>
// 			<h1>Login</h1>
// 			<form onSubmit={loginUser}>
// 				<input
// 					value={email}
// 					onChange={(e) => setEmail(e.target.value)}
// 					type="email"
// 					placeholder="Email"
// 				/>
// 				<br />
// 				<input
// 					value={password}
// 					onChange={(e) => setPassword(e.target.value)}
// 					type="password"
// 					placeholder="Password"
// 				/>
// 				<br />
// 				<input type="submit" value="Login" />
// 			</form>
// 		</div>
// 	)
// }

// export default App

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [cookies] = useCookies([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          navigate("/");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className="container">
      <h2>Login to your Account</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Don't have an account ?<Link to="/register"> Register </Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
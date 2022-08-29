import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './AuthenticationAuthorizationFrontend/pages/Login'
import Register from './AuthenticationAuthorizationFrontend/pages/Register'
import Dashboard from './AuthenticationAuthorizationFrontend/pages/Dashboard'
const App = () => {
	return (
		<div>
			<BrowserRouter>
         <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
			</BrowserRouter>
		</div>
	)
}

export default App
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
const App = () => {
	return (
		<>
			<BrowserRouter>
				<AuthProvider>
					<Container
						className="d-flex align-items-center justify-content-center"
						style={{ height: "100vh" }}>
						<Routes>
							<Route
								exact
								path="/"
								element={<PrivateRoute />}>
								<Route
									exact
									path="/"
									element={<Dashboard />}
								/>
							</Route>
							<Route
								path="/signup"
								element={<Signup />}
							/>
							<Route
								path="/login"
								element={<Login />}
							/>
						</Routes>
					</Container>
				</AuthProvider>
			</BrowserRouter>
		</>
	);
};

export default App;

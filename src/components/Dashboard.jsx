import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import TodoList from "./Todo";
const Dashboard = () => {
	const [error, setError] = useState();
	const { logout } = useAuth();
	let navigate = useNavigate();
	async function handleLogout() {
		try {
			await logout();
			navigate("/login");
		} catch {
			setError("Error logging out");
		}
	}
	return (
		<>
			<div className="w-50">
				<Button variant="link" onClick={handleLogout}>
					Logout
				</Button>

				<TodoList />
			</div>
		</>
	);
};

export default Dashboard;

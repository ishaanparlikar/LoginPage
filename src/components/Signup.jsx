import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Col, Row } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
   const navigate = useNavigate()
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();
	const { signUp } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	async function handleSubmit(e) {
		e.preventDefault();
		if (
			passwordRef.current.value !== confirmPasswordRef.current.value
		) {
			setError("Passwords do not match");
			return;
		}
		try {
			setError("");
			setLoading(true);
			await signUp(
				emailRef.current.value,
				passwordRef.current.value,
			);
         navigate("/")
		} catch {
			setError("Error signing up");
		}
		setLoading(false);
	}
	return (
		<>
			<Row className="w-100">
				<Col xs={6} className="mx-auto">
					<Card className="w-100">
						<Card.Body>
							<Card.Title className="text-center">
								Signup
							</Card.Title>
							{error && (
								<Alert variant="danger">
									{error}
								</Alert>
							)}
							<Form onSubmit={handleSubmit}>
								<Form.Group id="email">
									<Form.Label>
										Email address
									</Form.Label>
									<Form.Control
										type="email"
										placeholder="Enter email"
										required
										ref={emailRef}
									/>
								</Form.Group>
								<Form.Group controlId="password">
									<Form.Label>
										Password
									</Form.Label>
									<Form.Control
										type="password"
										placeholder="Password"
										required
										ref={passwordRef}
									/>
								</Form.Group>
								<Form.Group controlId="confirmPassword">
									<Form.Label>
										Confirm Password
									</Form.Label>
									<Form.Control
										type="password"
										placeholder="Confirm Password"
										required
										ref={
											confirmPasswordRef
										}
									/>
								</Form.Group>
								<div className="w-50 mx-auto">
									<Button
										type="submit"
										className="mt-3 w-100"
										disabled={loading}>
										Signup
									</Button>
								</div>
							</Form>
						</Card.Body>
						<div className="w-100 text-center">
							Already have Account <Link to='/login'>Login</Link>
						</div>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default Signup;

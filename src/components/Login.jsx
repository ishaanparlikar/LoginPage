import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert, Col, Row } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link,useNavigate } from "react-router-dom";
const Signup = () => {
   let navigate = useNavigate()
	const emailRef = useRef();
	const passwordRef = useRef();
	const { login } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			setError("");
			setLoading(true);
			await login(
				emailRef.current.value,
				passwordRef.current.value,
			);
         navigate('/')
         console.log(emailRef.current.value,passwordRef.current.value);

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
								Login
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
								<div className="w-50 mx-auto">
									<Button
										type="submit"
										className="mt-3 w-100"
										disabled={loading}>
										Login
									</Button>
								</div>
							</Form>
						</Card.Body>
						<div className="w-100 text-center">
							Dont have Account <Link to='/signup'>Sign-up</Link>
						</div>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default Signup;

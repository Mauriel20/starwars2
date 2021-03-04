import { Card, Container, CardDeck, Button, Col, ButtonToolbar, Form } from "react-bootstrap";
import { Context } from "../store/appContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const Singup = () => {
	return (
		<Container>
			<Form id="form2">
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" required />
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" required />
				</Form.Group>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check id="checkbox" type="checkbox" label="Check me out" required />
				</Form.Group>
				<Button id="boton-login" variant="primary" type="submit">
					Login
				</Button>
				<Button id="boton-singup" variant="primary" type="submit" href="/principal">
					sing-up
				</Button>
			</Form>
		</Container>
	);
};

import { Card, Container, CardDeck, Button, Col, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
	return (
		<Container>
			<Card>
				<Card.Body>This is some text within a card body.</Card.Body>
			</Card>
		</Container>
	);
};

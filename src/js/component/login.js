import React, { useState, useContext } from "react";
import { Card, Container, CardDeck, Button, Col, ButtonToolbar } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const login = props => {
	return (
		<Container>
			<Card>
				<Card.Body>This is some text within a card body.</Card.Body>
			</Card>
		</Container>
	);
};

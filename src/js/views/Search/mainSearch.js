import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// react dom import
import { useHistory } from "react-router-dom";

//include the styles
//import "../../styles/mainMenu.css";
// import context
import { Context } from "../../store/appContext";

export const MainSearch = () => {
	// user the context
	const { store, actions } = useContext(Context);
	// react dom history
	const history = useHistory();

	return (
		<Container fluid className="mt-4">
			<InputGroup className="mb-3">
				<InputGroup.Text id="inputGroup-sizing-default">
					<FontAwesomeIcon icon="fas fa-search" size="lg" className="me-2" />
					Buscar
				</InputGroup.Text>
				<FormControl
					aria-label="Default"
					aria-describedby="inputGroup-sizing-default"
				/>
			</InputGroup>
		</Container>
	);
};

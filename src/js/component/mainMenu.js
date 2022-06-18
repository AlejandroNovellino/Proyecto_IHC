import React, { useState, useEffect } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//include the styles
import "../../styles/mainMenu.css";

// fixed-bottom

export const MainMenu = () => {
	return (
		<Container fluid className="mainMenu py-4">
			<Row className="justify-content-around">
				<Col className="text-center text-white">
					<FontAwesomeIcon icon="fas fa-tv-alt" size="lg" />
				</Col>
				<Col className="text-center text-white">
					<FontAwesomeIcon icon="fas fa-film" size="lg" />
				</Col>
				<Col className="text-center text-white">
					<FontAwesomeIcon icon="fas fa-search" size="lg" />
				</Col>
				<Col className="text-center text-white">
					<FontAwesomeIcon icon="fas fa-calendar" size="lg" />
				</Col>
				<Col className="text-center text-white">
					<FontAwesomeIcon icon="fas fa-user" size="lg" />
				</Col>
			</Row>
		</Container>
	);
};

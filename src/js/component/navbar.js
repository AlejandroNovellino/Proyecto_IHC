import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

//include the styles
import "../../styles/navbar.css";

export const Navbar = () => {
	const [activeView, setActiveView] = useState("Peliculas");

	return (
		<Container fluid className="navbar py-4">
			<Row>
				<Col xs={2}></Col>
				<Col xs={8}>
					<h2 className="m-0">{activeView}</h2>
				</Col>
				<Col xs={2}></Col>
			</Row>
		</Container>
	);
};

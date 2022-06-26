import React, { useContext } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
// import context
import { Context } from "../store/appContext";

//include the styles
import "../../styles/navbar.css";

export const Navbar = () => {
	// user the context
	const { store, actions } = useContext(Context);

	return (
		<Container fluid className="navbar py-4">
			<Row>
				<Col xs={2}></Col>
				<Col xs={8}>
					<h2 className="m-0">{actions.getActiveView()}</h2>
				</Col>
				<Col xs={2}></Col>
			</Row>
		</Container>
	);
};

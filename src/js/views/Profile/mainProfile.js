import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// react dom import
import { useHistory } from "react-router-dom";
// import image
import img1 from "../../../img/chibi_saber.png";
//include the styles
import "../../../styles/mainProfile.css";
import "../../../styles/utilities.css";
// import context
import { Context } from "../../store/appContext";

export const MainProfile = () => {
	// user the context
	const { store, actions } = useContext(Context);
	// react dom history
	const history = useHistory();

	return (
		<Container fluid className="mt-5 text-white">
			<Row className="mb-4">
				<Col xs={12} className="text-center">
					<Image src={img1} roundedCircle thumbnail className="customImage" />
				</Col>
			</Row>
			{/* list button */}
			<Row className="mb-4 justify-content-center">
				<Col xs={10}>
					<div className="d-grid">
						<Button variant="primary" size="lg" className="customButton">
							Mis listas
						</Button>
					</div>
				</Col>
			</Row>
			{/* mail row */}
			<Row className="justify-content-center">
				<Col xs={3} className="pt-3">
					<FontAwesomeIcon
						className="d-block mx-auto"
						icon="fas fa-envelope"
						size="3x"
					/>
				</Col>
				<Col xs={7} className="">
					<Form>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Correo</Form.Label>
							<Form.Control
								type="email"
								value="alfonzo@gmail.com"
								disabled
								className="customInput"
							/>
						</Form.Group>
					</Form>
				</Col>
			</Row>
			{/* user name row */}
			<Row className="justify-content-center">
				<Col xs={3} className="pt-3">
					<FontAwesomeIcon
						className="d-block mx-auto"
						icon="fas fa-user"
						size="3x"
					/>
				</Col>
				<Col xs={7} className="">
					<Form>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Nombre de usuario</Form.Label>
							<Form.Control
								type="text"
								value="alGt1990"
								disabled
								className="customInput"
							/>
						</Form.Group>
					</Form>
				</Col>
			</Row>
			{/* list created row */}
			<Row className="justify-content-center">
				<Col xs={3} className="pt-3">
					<FontAwesomeIcon
						className="d-block mx-auto"
						icon="fas fa-list"
						size="3x"
					/>
				</Col>
				<Col xs={7} className="">
					<Form>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Listas creadas</Form.Label>
							<Form.Control
								type="number"
								value="25"
								disabled
								className="customInput"
							/>
						</Form.Group>
					</Form>
				</Col>
			</Row>
			{/* seen series row */}
			<Row className="justify-content-center">
				<Col xs={3} className="pt-3">
					<FontAwesomeIcon
						className="d-block mx-auto"
						icon="fas fa-tv-alt"
						size="3x"
					/>
				</Col>
				<Col xs={7} className="">
					<Form>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Series vistas</Form.Label>
							<Form.Control
								type="number"
								value="55"
								disabled
								className="customInput"
							/>
						</Form.Group>
					</Form>
				</Col>
			</Row>
			{/* seen movies row */}
			<Row className="justify-content-center">
				<Col xs={3} className="pt-3">
					<FontAwesomeIcon
						className="d-block mx-auto"
						icon="fas fa-film"
						size="3x"
					/>
				</Col>
				<Col xs={7} className="">
					<Form>
						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Peliculas vistas</Form.Label>
							<Form.Control
								type="number"
								value="88"
								disabled
								className="customInput"
							/>
						</Form.Group>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

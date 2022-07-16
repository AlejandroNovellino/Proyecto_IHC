import React, { useState, useEffect, useContext } from "react";
import {
	Container,
	Row,
	Col,
	Form,
	Button,
	Modal,
	Carousel,
	Card,
} from "react-bootstrap";
import Image from "react-bootstrap/Image";
// import custom components
import { ListCarousel } from "../../component/listsCarousel";
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

// import variables of the info to display
import { userListProfile } from "../../variables/userList";

export const MainProfile = () => {
	// user the context
	const { store, actions } = useContext(Context);
	// react dom history
	const history = useHistory();
	// modal variables
	const [fullscreen, setFullscreen] = useState(true);
	const [show, setShow] = useState(false);

	// handle the modal
	function handleShow(breakpoint) {
		setFullscreen(breakpoint);
		setShow(true);
	}

	// handle click on the card
	const handleClickOnCard = list => {
		actions.setInList(true);
		history.push("/list-info", { list: list });
	};

	return (
		<>
			{/* modal */}
			<Modal
				className="lightBlueBackground"
				show={show}
				fullscreen={fullscreen}
				onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>
						<h2 className="mx-3 my-2">Mis listas</h2>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Container>
						<Row className="mb-4">
							{userListProfile.map((list, index) => {
								return (
									<Col xs={6} key={index} className="my-2 p-1">
										<Card className="customCard p-0">
											<Carousel indicators={false} controls={true} className="">
												{list?.elements.map((element, k) => {
													return (
														<Carousel.Item
															key={k}
															onClick={() => handleClickOnCard(list)}>
															<Card
																className="customCard p-0"
																onClick={() => {}}>
																<Card.Img variant="top" src={element?.src} />
															</Card>
														</Carousel.Item>
													);
												})}
											</Carousel>
											<Card.Body>
												<Card.Text>{list?.name}</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								);
							})}
						</Row>
					</Container>
				</Modal.Body>
			</Modal>
			{/* user information */}
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
							<Button
								variant="primary"
								size="lg"
								className="customButton"
								onClick={handleShow}>
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
		</>
	);
};

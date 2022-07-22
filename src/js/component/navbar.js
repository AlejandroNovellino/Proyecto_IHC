import React, { useState, useContext } from "react";
import {
	Container,
	Row,
	Col,
	Carousel,
	Modal,
	Card,
	Button,
} from "react-bootstrap";
// react dom import
import { useHistory, useLocation } from "react-router-dom";
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import context
import { Context } from "../store/appContext";

// import variables of the info to display
import { userListProfile } from "../variables/userList";

//include the styles
import "../../styles/customNavbar.css";

export const Navbar = () => {
	// user the context
	const { store, actions } = useContext(Context);
	// react dom history
	const history = useHistory();
	// react dom location
	const location = useLocation();
	// modal variables
	const [fullscreen, setFullscreen] = useState(true);
	const [show, setShow] = useState(false);
	// variables to set selected item
	const [selectedElementIndex, setSelectedElementIndex] = useState(0);

	// back handler
	const handleBack = _ => {
		// empty the info to display movie
		if (history.location?.pathname != "/serie/info") {
			actions.emptyElementToDisplay();
		}
		// back in the history
		history.goBack();
	};

	//handle back from the list
	const handleBackFromList = _ => {
		actions.setInList(false);
		history.goBack();
	};

	// handle the modal
	function handleShow(breakpoint) {
		setFullscreen(breakpoint);
		setShow(true);
	}

	// handle the buttons in the modal
	function handleModalButton(breakpoint) {
		setShow(false);
	}

	// handle click on the card
	const handleClickOnCard = (e, index) => {
		console.log(index);
		setSelectedElementIndex(index);
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
									<Col
										xs={6}
										key={index}
										className={
											index == selectedElementIndex
												? "my-2 p-1 selectedColumn"
												: "my-2 p-1"
										}>
										<Card
											className={
												index == selectedElementIndex
													? "customCard p-0 selectedCard"
													: "customCard p-0"
											}>
											<Carousel indicators={false} controls={true} className="">
												{list?.elements.map((element, k) => {
													return (
														<Carousel.Item
															key={k}
															onClick={e => handleClickOnCard(e, index)}>
															<Card className="customCard p-0">
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
						<Row className="justify-content-evenly mb-4">
							<Col xs={5}>
								<div className="d-grid">
									<Button
										variant="danger"
										size="lg"
										onClick={handleModalButton}>
										Cancelar
									</Button>
								</div>
							</Col>
							<Col xs={5}>
								<div className="d-grid">
									<Button
										variant="primary"
										size="lg"
										onClick={handleModalButton}>
										Confirmar
									</Button>
								</div>
							</Col>
						</Row>
					</Container>
				</Modal.Body>
			</Modal>
			{/*navbar info*/}
			<Container fluid className="customNavbar p-4">
				{store?.inList && !store?.elementToDisplay && (
					<Row>
						<Col xs={2}>
							<FontAwesomeIcon
								icon="fas fa-angle-left"
								size="2x"
								className="d-block mx-auto pt-1"
								onClick={handleBackFromList}
							/>
						</Col>
						<Col xs={10}>
							<h2 className="m-0 text-center">
								{"Lista: " + location.state?.list?.name}
							</h2>
						</Col>
					</Row>
				)}
				{store?.elementToDisplay && (
					<Row>
						<Col xs={2}>
							<FontAwesomeIcon
								icon="fas fa-angle-left"
								size="2x"
								className="d-block mx-auto pt-1"
								onClick={handleBack}
							/>
						</Col>
						<Col xs={8}>
							<h2 className="m-0 text-center">
								{store.activeViewIndex !== 0
									? store.elementToDisplay?.name
									: null}
							</h2>
						</Col>
						<Col xs={2} onClick={handleShow}>
							<FontAwesomeIcon
								icon="fas fa-plus-square"
								size="2x"
								className="d-block mx-auto pt-1"
							/>
						</Col>
					</Row>
				)}
				{!store?.elementToDisplay && !store?.inList && (
					<Row>
						<Col xs={10}>
							<h2 className="m-0">{actions.getActiveView()}</h2>
						</Col>
						<Col xs={2}></Col>
					</Row>
				)}
			</Container>
		</>
	);
};

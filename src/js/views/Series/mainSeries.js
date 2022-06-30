import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Navbar, Card } from "react-bootstrap";
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// react dom import
import { Redirect, Switch, useHistory } from "react-router-dom";

//include the styles
//import "../../styles/mainMenu.css";
// import context
import { Context } from "../../store/appContext";
import { Route } from "react-router";
import img1 from "../../../img/wandaBanner.jpg";
import img2 from "../../../img/darkBanner.jpg";
import img3 from "../../../img/kenobiBanner.jpg";
import img4 from "../../../img/deathnoteBanner.jpg";
import img5 from "../../../img/euphoriaBanner.jpg";
import img6 from "../../../img/strangerBanner.jpg";

export const MainSeries = () => {
	// user the context
	const { store, actions } = useContext(Context);
	// react dom history
	const history = useHistory();
	const cardInfoViendo = [
		{
			image: img1,
			title: "WandaVision",
			text: "T01 - E07. Abajo la cuarta pared. Quedan por ver: +2",
		},
		{
			image: img6,
			title: "Stranger Things",
			text: "T04 - E01. El club Hellfire. Quedan por ver: +6",
		},
		{
			image: img2,
			title: "Dark",
			text: "T01 - E03. Pasado y presente. Quedan por ver: +7",
		},
	];

	const cardInfoSin = [
		{ image: img3, title: "Obiwan Kenobi", text: "Episodio 1 - Parte 1" },
		{ image: img4, title: "Death Note", text: "Episodio 1 - Renacimiento" },
		{ image: img5, title: "Euphoria", text: "Episodio 1 - Piloto" },
	];

	const renderCard = (card, index) => {
		return (
			<Card
				style={{
					marginBottom: "20%",
					marginLeft: "2%",
					marginRight: "2%",
					width: "22.5rem",
					cursor: "pointer",
					backgroundColor: "#081826",
				}}
				key={index}
				className="box">
				<Card.Img variant="top" src={card.image} />
				<Card.Body>
					<Card.Title>{card.title}</Card.Title>
					<Card.Text>{card.text}</Card.Text>
				</Card.Body>
			</Card>
		);
	};

	return (
		<Container fluid className="mt-4 text-white">
			{/*tittle of watching series*/}
			<Row>
				<Col xs={12}>
					<h3 className="ms-1">Viendo</h3>
				</Col>
			</Row>
			{/*row of watching series*/}
			<Row className="my-3">
				<Col xs={6}>{cardInfoViendo.map(renderCard)}</Col>
			</Row>
			{/*tittle of without starting series*/}
			<Row>
				<Col xs={12}>
					<h3 className="ms-1">Sin comenzar</h3>
				</Col>
			</Row>
			{/*row of without starting series*/}
			<Row className="my-3">
				<Col xs={6}>{cardInfoSin.map(renderCard)}</Col>
			</Row>
		</Container>
	);
};

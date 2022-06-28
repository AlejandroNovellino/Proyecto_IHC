import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Image from "react-bootstrap/Image";
// react dom import
import { useHistory } from "react-router-dom";
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import context
import { Context } from "../../store/appContext";

//include the styles
import "../../../styles/utilities.css";

export const MovieInfo = () => {
	// user the context
	const { store, actions } = useContext(Context);
	const movie = store.elementToDisplay;
	// react dom history
	const history = useHistory();

	return (
		<Container fluid className="mt-4 text-white">
			{/*movie image*/}
			<Row className="mb-4">
				<Col xs={12}>
					<Image src={movie?.src} fluid className="customImage" />
				</Col>
			</Row>
			{/*movie synopsis*/}
			<Row className="px-2">
				<Col xs={12} className="synopsisContainer p-3">
					<p className="text-center m-0">{movie?.synopsis}</p>
				</Col>
			</Row>
			{/*movie info*/}
			<Row className="justify-content-center my-3">
				<Col xs={3}>
					<p className="text-center m-0">{movie?.year}</p>
				</Col>
				<Col xs={4}>
					<p className="text-center m-0">{movie?.gender}</p>
				</Col>
				<Col xs={3}>
					<p className="text-center m-0">{movie?.duration}</p>
				</Col>
			</Row>
			{/*movie score*/}
			<Row className="justify-content-center my-2">
				<Col xs={4} className="pe-0">
					<p className="text-end">Puntuacion</p>
				</Col>
				<Col xs={1}>
					<FontAwesomeIcon icon="fas fa-star" size="lg" />
				</Col>
				<Col xs={1}>
					<FontAwesomeIcon icon="fas fa-star" size="lg" />
				</Col>
				<Col xs={1}>
					<FontAwesomeIcon icon="fas fa-star" size="lg" />
				</Col>
				<Col xs={1}>
					<FontAwesomeIcon icon="fas fa-star" size="lg" />
				</Col>
				<Col xs={1}>
					<FontAwesomeIcon icon="fas fa-star" size="lg" />
				</Col>
				<Col xs={3}>
					<p>5 stars</p>
				</Col>
			</Row>
			{/*where to see the movie*/}
			<Row className="justify-content-center mt-1 mb-3">
				<Col xs={12} className="text-center">
					<h4>Donde verla?</h4>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col xs={3}>
					<p>o1</p>
				</Col>
				<Col xs={3}>
					<p>o2</p>
				</Col>
				<Col xs={3}>
					<p>o2</p>
				</Col>
			</Row>
		</Container>
	);
};

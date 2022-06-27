import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import custom components
import { CustomCarousel } from "../../component/customCarousel";
// import variables of the info to display
import { mainMovies } from "../../variables/mainMenuVariables.js";

//include the styles
import "../../../styles/utilities.css";

export const MainMovie = () => {
	return (
		<Container fluid className="mt-4 text-white">
			{/*tittle of save films*/}
			<Row>
				<Col xs={12}>
					<h3 className="ms-1">Guardadas</h3>
				</Col>
			</Row>
			{/*row of saved films*/}
			<Row className="my-3">
				<Col xs={12}>
					<CustomCarousel infoToDisplay={mainMovies} />
				</Col>
			</Row>
			{/*tittle of recommended films*/}
			<Row className="my-4">
				<Col xs={12}>
					<h3 className="ms-1">Recomendaciones</h3>
				</Col>
			</Row>
			{/*row of recommended films*/}
			<Row className="my-3">
				<Col xs={12}>
					<CustomCarousel infoToDisplay={mainMovies} />
				</Col>
			</Row>
			{/*tittle of list*/}
			<Row className="my-4">
				<Col xs={12}>
					<h3 className="ms-1">Mis listas</h3>
				</Col>
			</Row>
			{/*row of saved lists*/}
			<Row className="my-3">
				<Col xs={12}>
					<CustomCarousel infoToDisplay={mainMovies} />
				</Col>
			</Row>
		</Container>
	);
};

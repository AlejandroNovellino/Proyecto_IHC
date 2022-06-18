import React, { useState, useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CustomCarousel } from "./customCarousel";

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
					<CustomCarousel />
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
					<CustomCarousel />
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
					<CustomCarousel />
				</Col>
			</Row>
		</Container>
	);
};

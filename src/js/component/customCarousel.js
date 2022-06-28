import React, { useState, useEffect, useContext } from "react";
import {
	Container,
	Row,
	Col,
	Carousel,
	Card,
	CardGroup,
} from "react-bootstrap";
// react dom import
import { useHistory } from "react-router-dom";
// import context
import { Context } from "../store/appContext";
//include the styles
import "./../../styles/customCarousel.css";

export const CustomCarousel = props => {
	// user the context
	const { store, actions } = useContext(Context);
	// react dom history
	const history = useHistory();
	// info to display
	const infoToDisplay = props.infoToDisplay;

	const handleClickOnCard = movie => {
		actions.setElementToDisplay(movie);
		history.push("/movie/info");
	};

	return (
		<Carousel indicators={false} controls={false} className="">
			{infoToDisplay.map((parentElement, i) => {
				return (
					<Carousel.Item key={i}>
						<Row xs={2} className="g-1">
							{parentElement.map((childElement, j) => {
								return (
									<Col xs={6} key={childElement.id}>
										<Card
											className="customCard p-0"
											onClick={_ => handleClickOnCard(childElement)}>
											<Card.Img variant="top" src={childElement?.src} />
											<Card.Body>
												<Card.Text>{childElement?.name}</Card.Text>
											</Card.Body>
										</Card>
									</Col>
								);
							})}
						</Row>
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};

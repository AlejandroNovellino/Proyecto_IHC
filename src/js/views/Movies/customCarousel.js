import React, { useState, useEffect } from "react";
import {
	Container,
	Row,
	Col,
	Carousel,
	Card,
	CardGroup,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { infoToDisplay } from "../../variables.js";

//include the styles
import "./../../../styles/customCarousel.css";

export const CustomCarousel = () => {
	return (
		<Carousel indicators={false} controls={false} className="">
			{infoToDisplay.map((parentElement, i) => {
				return (
					<Carousel.Item key={i}>
						<Row xs={2} className="g-1">
							{parentElement.map((childElement, j) => {
								return (
									<Col xs={6} key={j}>
										<Card className="customCard p-0">
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

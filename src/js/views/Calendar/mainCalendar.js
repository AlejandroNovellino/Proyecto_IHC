import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// font awesome import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// react dom import
import { useHistory } from "react-router-dom";

// imports for the calendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

//include the styles
import "../../../styles/utilities.css";
// import context
import { Context } from "../../store/appContext";

// import user events
import { userEvents } from "../../variables/userEvents";
import { calendarMovies } from "../../variables/calendarMovies";

export const MainCalendar = () => {
	// user the context
	const { store, actions } = useContext(Context);
	// react dom history
	const history = useHistory();

	return (
		<Container fluid className="text-white mb-4">
			<Row>
				<Col xs={12} className="my-4">
					<h2 className="ms-3">Calendario de cartelera</h2>
				</Col>
			</Row>
			<Row>
				{calendarMovies.map((month, i) => {
					return (
						<Container fluid className="text-white" key={i}>
							<Row className="backgroundHelper">
								<Card className="backgroundHelper p-2">
									<Card.Img src={month.image} alt="Card image" />
								</Card>
							</Row>
							{month.days.map((day, j) => {
								return (
									<Card key={j} className="backgroundHelper my-4">
										<Card.Body className="py-0">
											<Row key={j} className="my-4">
												<Col xs={3}>
													<p class="fs-3 fw-bold ms-4 mt-2">{day.day}</p>
												</Col>
												<Col xs={9}>
													<Row>
														<Col xs={12}>
															<p class="fs-3 m-0">{day.movie}</p>
														</Col>
														<Col xs={12}>{day.cinema}</Col>
													</Row>
												</Col>
											</Row>
										</Card.Body>
									</Card>
								);
							})}
						</Container>
					);
				})}
			</Row>
		</Container>
	);
};

/*
<Container fluid className="text-white mb-4" key={i}>
							<Row className="p-3 ps-4 backgroundHelper">
								<h3>{month.month}</h3>
							</Row>
							{month.days.map((day, j) => {
								return (
									<Row key={j} className="my-4">
										<Col xs={2}>
											<p class="fs-1 fw-bold ms-2 mt-2">{day.day}</p>
										</Col>
										<Col xs={10}>
											<Row>
												<Col xs={12}>
													<p class="fs-1 m-0">{day.movie}</p>
												</Col>
												<Col xs={12}>{day.cinema}</Col>
											</Row>
										</Col>
									</Row>
								);
							})}
						</Container>
*/

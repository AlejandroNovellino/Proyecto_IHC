import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
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
import "../../../styles/customCalendar.css";
// import context
import { Context } from "../../store/appContext";

// import user events
import { userEvents } from "../../variables/userEvents";

export const MainCalendar = () => {
	// user the context
	const { store, actions } = useContext(Context);
	// react dom history
	const history = useHistory();

	return (
		<Container fluid className="text-white mb-4">
			<Row>
				<Col xs={12} className="my-4">
					<h2 className="ms-1">Peliculas en cartelera</h2>
				</Col>
			</Row>
			<Row>
				<div className="customCalendar py-4 px-3">
					<FullCalendar
						height={600}
						headerToolbar={{
							left: "title",
							right: "prev,next today",
							center: "",
						}}
						/*footerToolbar={{
							center: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
						}}*/
						plugins={[
							dayGridPlugin,
							bootstrap5Plugin,
							interactionPlugin,
							timeGridPlugin,
							listPlugin,
						]}
						initialView="timeGridDay"
						themeSystem="bootstrap5"
						selectable={true}
						events={userEvents}
					/>
				</div>
			</Row>
		</Container>
	);
};

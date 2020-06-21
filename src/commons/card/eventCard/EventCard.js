import React from "react";
import "./EventCard.scss";
import {faCheck} from "@fortawesome/free-solid-svg-icons"
import { faClock as faClockRegular, faCalendarAlt as faCalendarAltRegular } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EventCard = () => {
  return (
    <div className="event-card-item">
      <div className="event-date">
        <h5>Daily grooming assistance</h5>
        <div className="date-details">
            <FontAwesomeIcon
            className="clock-icon"
            icon={faClockRegular}
            size="1x"
            />
            <div className="d-content">
                <p>Dec</p>
                <p>Daily</p>
            </div>
        </div>
      </div>
      <div className="event-note">
        <FontAwesomeIcon className="calendar-icon" icon={faCalendarAltRegular} size="1x" />
        <p>assist with daily grooming activities such as bathing, teeth, hair</p>
      </div>
      <div className="event-confirm">
        <button className="confirm">
        <FontAwesomeIcon className="check" icon={faCheck} size="1x" />
        done
        </button>
        <div className="confirm-details">
            <img src={require('../../../assets/images/layer_9_copy.png')} alt='user'/>
            <div className="confirm-info">
                <p>Derek Smith completed</p>
                <p>Mar 23 3:23p</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

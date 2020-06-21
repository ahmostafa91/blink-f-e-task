import React from "react";
import "./Contactitems.scss";

const ContactItems = ({ data }) => {
  // console.log(new Date(data.date).toLocaleString(undefined, { month: 'long', day: 'numeric' }))
  return (
    <li className="contact-item">
      <div className="contact-image">
        <img src={require("../../assets/images/sk.png")} alt="user" />
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h5>{data.name}</h5>
        </div>
        <div className="contact-message">
          <span>{data.message}</span>
        </div>
      </div>
      <div className="contact-date-new">
        <div className="date">
          {new Date(data.date).toLocaleString(undefined, {
            month: "long",
            day: "numeric",
          })}
        </div>
        <div className={data.newMessage > 0 ? "new" : "new hide"}>
          {data.newMessage}
        </div>
      </div>
    </li>
  );
};

export default ContactItems;

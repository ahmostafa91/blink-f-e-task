import React from "react";
import ContactItems from "../../commons/contactItems/ContactItems";
import data from "../../assets/data";
import "./Contacts.scss";
import NavButton from "../../commons/navButton/NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments as faCommentsRegular } from "@fortawesome/free-regular-svg-icons";


const getData = data.map((data, index) => {
  return <ContactItems data={data} key={index} />;
});

const Contacts = () => {

  return (
    <>
      <div className="contacts-header">
        <h3>Conversation</h3>
        <NavButton
          buttonIcon={<FontAwesomeIcon icon={faCommentsRegular} size="3x" />}
        />
      </div>
      <section className="contacts-container">
        <ul className="contacts-list">{getData}</ul>
      </section>
    </>
  );
};

export default Contacts;

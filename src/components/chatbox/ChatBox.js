import React from "react";
import "./ChatBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavButton from "./../../commons/navButton/NavButton";
import {
  faFilter,
  faSearch,
  faUserFriends,
  faPlus,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";
import Card from "../../commons/card/chatCard/Card";
import EventCard from "../../commons/card/eventCard/EventCard";
import ChatButton from "../../commons/chatButton/ChatButton";

const Chatbox = () => {
  return (
    <section className="chatbox-container">
      <div className="chatbox-header">
        <h3>Stephanie Kem</h3>
        <div className="chatbox-option">
          <NavButton
            buttonIcon={<FontAwesomeIcon icon={faUserFriends} size="3x" />}
          />
          <NavButton
            buttonIcon={<FontAwesomeIcon icon={faFilter} size="3x" />}
          />
          <NavButton
            buttonIcon={<FontAwesomeIcon icon={faSearch} size="3x" />}
          />
        </div>
      </div>
      <div className="chatbox">
        <div className="event-card">
          <div className="card-contact-info">
            <p>12:20p</p>
            <img
              src={require("../../assets/images/layer_9_copy.png")}
              alt="user"
            />
          </div>
          <EventCard />
        </div>
        <div className="chat-date-info">
          <p>9:12a</p>
        </div>
        <div className="chat-card">
          <Card>
            <p>
              I moved Karen’s knitting kit from the study upstairs to the the
              living room.
            </p>
          </Card>
          <div className="chat-contact-info">
            <img src={require("../../assets/images/sk.png")} alt="user" />
            <p>S K</p>
            <p>12:20p</p>
          </div>
        </div>
        <div className="reply-chat-card">
          <Card>
            <p>
            That’s a good call. I’ll be stopping by later to have dinner with her. Pizza for everyone! Join us. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a lorem enim. Praesent accumsan feugiat lorem et finibus. Vestibulum scelerisque id eros dignissim tincidunt. Morbi id tortor egestas, feugiat massa viverra, posuere nisl.
            </p>
          </Card>
          <div className="chat-contact-info">
            <img src={require("../../assets/images/layer_9_copy.png")} alt="user" />
            <p>12:20p</p>
            <p>me</p>
          </div>
        </div>
      </div>
      <div className="send-input">
        <div className="add">
          <ChatButton icon={<FontAwesomeIcon icon={faPlus} size="2x" />} />
        </div>
        <div className="input">
          <input type="text" placeholder="message" />
        </div>
        <div className="send">
          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
        </div>
      </div>
    </section>
  );
};

export default Chatbox;

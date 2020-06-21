import React from 'react';
import './ChatButton.scss';

const ChatButton = ({ icon }) => {
    return (
        <div className="chat-button">{icon}</div>
    );
};

export default ChatButton;
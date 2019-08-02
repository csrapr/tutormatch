import React from "react";

const WelcomeMessage = () => {
  return (
    <div>
      <div className="ui container">
        <div className="navbar">
          <div className="top-left-corner">
            <img
              alt="tutormatch logo"
              src={
                process.env.PUBLIC_URL + "/assets/images/tutormatch-logo.svg"
              }
            />
          </div>
          <div className="top-right-corner">
            <p id="sign-up-link">Become a tutor</p>
            <button className="ui button">Sign in</button>
          </div>
        </div>
      </div>
      <div className="ui container">
        <h1 className="ui center header">
          The place where students and tutors meet
        </h1>
        <p id="header-subtitle">
          Find out who can help you take your education to the next level.
        </p>
        <div className="ui column centered grid">
          <button id="get-started-button" className="ui green button">
            Get started now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;

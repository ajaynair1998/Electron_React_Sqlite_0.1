import React from "react";

function Investigation(props) {
  return (
    <div className="single_entry">
      <div className="labels">
        <p>{props.investigationtype}</p>
      </div>
      <div className="input_rows">
        <a
          id="open_investigation_file"
          className={props.index}
          href={`file:///${props.href}`}
          target="_blank"
        >
          Open File
        </a>
      </div>
      <div className="date">
        <p>{props.date}</p>
      </div>
      <div className="delete_button">
        <button
          id="delete_button_investigation"
          className={props.index}
          onClick={props.handleClickInvestigation}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Investigation;

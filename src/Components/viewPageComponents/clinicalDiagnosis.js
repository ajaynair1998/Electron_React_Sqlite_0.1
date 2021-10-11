import React from "react";

function ClinicalDiagnosis(props) {
  return (
    <div className="single_entry">
      <div className="labels">
        <p>Diagnosis</p>
      </div>
      <div className="input_rows">
        <p>{props.clinicaldiagnosis}</p>
      </div>
      <div className="date">
        <p>{props.date}</p>
      </div>
      <div className="delete_button">
        <button
          id="delete_button_clinical_diagnosis"
          className={props.index}
          onClick={props.handleClickClinicalDiagnosis}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ClinicalDiagnosis;

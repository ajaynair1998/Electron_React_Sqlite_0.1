import React from 'react'


function TreatmentPlan(props)
{
    return(
            <div className='single_entry'>
                        <div className='labels'>
                            <p>Treatment Plan:</p>
                            <p>Treatment:</p>
                            

                        </div>
                        <div className='input_rows'>
                            <p>{props.treatmentplan}</p>
                            
                            <p>{props.treatment}</p>

                        </div>
                        <div className='date'>
                            <p>{props.date}</p>

                        </div>
                        <div className="delete_button">
                            <button id='delete_button_treatment_plan'
                            className={props.index}
                            onClick={props.handleClickTreatmentPlan}>Delete</button>

                        </div>
                        <div>

                        </div>

                    </div>
    )
}

export default TreatmentPlan
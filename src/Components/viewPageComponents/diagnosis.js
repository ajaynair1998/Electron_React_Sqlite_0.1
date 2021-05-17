import React from 'react'

function Diagnosis(props)
{
    return (
        <div className='single_entry'>
                            <div className='labels'>
                                <p>Diagnosis:</p>
                                    

                            </div>
                            <div className='input_rows'>
                               <p>{props.diagnosis}</p>

                            </div>
                            <div className='date'>
                                <p>{props.date}</p>

                            </div>
                            <div className="delete_button">
                                <button id='delete_button_diagnosis' 
                                className={props.index}
                                onClick={props.handleClickDiagnosis}>Delete</button>

                            </div>
                            

                        </div>
    )
}

export default Diagnosis
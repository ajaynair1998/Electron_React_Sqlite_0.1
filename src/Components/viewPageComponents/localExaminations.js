import React from 'react'

function LocalExamination(props)
{
    return (
            <div className='single_entry'>
                            <div className='labels'>
                                <p>Extra Oral:</p>
                                <p>Intra Oral:</p>

                            </div>
                            <div className='input_rows'>
                                <p>{props.extraoral}</p>
                                
                                <p>{props.intraoral}</p>

                            </div>
                            <div className='date'>
                                <p>{props.date}</p>

                            </div>
                            <div className="delete_button">
                                <button id='delete_button_local_examination' 
                                onClick={props.handleClickLocalExamination}
                                className={props.index}>Delete</button>

                            </div>
                            <div>

                            </div>

                        </div>
    )
}

export default LocalExamination
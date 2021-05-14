import React from 'react'

function GeneralExamination(props)
{
    return (
        <div className='single_entry'>
                                <p>{props.bp}</p>
                                <p>{props.temperature}</p>
                                <p>{props.oxygensaturation}</p>
                                <p>{props.date}</p>
                                <button id='delete_button_General_Examination' className={props.index}>Delete</button>

        </div>
    )
}

export default GeneralExamination
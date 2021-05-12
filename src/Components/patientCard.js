import React from 'react'

function PatientCard(props)
{
    return (
        <div className='patient'>
                        <div className='name' ><h2>{props.patientName ? props.patientName : 'No Name'}</h2></div>
                        <div className='patient_id'><p>{props.patientId }</p></div>
                        {/* <div className='patient_button'> <button className={props.patientId}>Edit</button></div> */}
                        <div className='patient_button'> <button className={props.patientId} onClick={
                            () => {props.handleClickViewButton(props.patientId)}
                        }>View</button></div>

        </div>
    )
}

export default PatientCard
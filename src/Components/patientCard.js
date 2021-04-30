import React from 'react'

function PatientCard(props)
{
    return (
        <div className='patient'>
                        <div className='name' ><h2>{props.patientName}</h2></div>
                        <div className='patient_id'><p>{props.patientId}</p></div>
                        <div className='patient_button' > <button>Edit</button></div>
                        <div className='patient_button'> <button>View</button></div>

        </div>
    )
}

export default PatientCard
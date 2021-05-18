import React from 'react'

function Medicine(props)
{
    return(
        <div className='single_entry'>
                            <div className='labels'>
                                <p>{props.medicinetype}</p>
                                    

                            </div>
                            <div className='input_rows'>
                                <p>{props.medicine}</p>

                            </div>
                            <div className='date'>
                                <p>{props.date}</p>

                            </div>
                            <div className="delete_button">
                                <button id='delete_button_medicine'
                                onClick={props.handleClickMedicine} 
                                className={props.index}>Delete</button>

                            </div>
                            

                        </div>
    )
}

export default Medicine
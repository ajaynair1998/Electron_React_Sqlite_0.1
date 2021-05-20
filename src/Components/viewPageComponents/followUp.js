import React from 'react'

function FollowUp(props)
{
    return(
        <div className='single_entry'>
                            <div className='labels'>
                                <p>Entry {props.index}:</p>
                                    

                            </div>
                            <div className='input_rows'>
                                <p className='follow_up_text'>{props.followuptext}</p>
                               <p className='follow_up_date'>{props.followupdate}</p>

                            </div>
                            
                            <div className="delete_button">
                                <button id='delete_button_follow_up'
                                className={props.index}
                                onClick={props.handleClickFollowUp}>Delete</button>

                            </div>
                            

                        </div>
    )
}
export default FollowUp
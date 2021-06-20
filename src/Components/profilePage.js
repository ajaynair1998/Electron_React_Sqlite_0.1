import React,{Component} from 'react'
import{Link} from 'react-router-dom'

import ViewMode from './profilePageComponents/viewMode'
import EditMode from './profilePageComponents/editMode'

import '../stylesProfilePage.css'

let Patient_id
let Patient_Name
let stateDataOnMount

class ProfilePage extends Component{
    constructor()
    {
        super()
        this.state={mode:'viewMode',loaded:false}

        // handleClicks
        this.handleClickSubmit=this.handleClickSubmit.bind(this)
        this.handleClickControls=this.handleClickControls.bind(this)
        this.handleClickCounter=this.handleClickCounter.bind(this)
        this.handleClickDelete=this.handleClickDelete.bind(this)
    }

    componentDidMount()
    {
        Patient_id =this.props.match.params.patientId

        // get the profile information from ipc main
        window.ipcRenderer.send('Give-Profile-Data',Patient_id)

        window.ipcRenderer.on('Profile-Data-From-Electron',(event,args) =>
        {
            // Save the state data to temporary variables so it remains unchanged on view Page even when 
            // it is being changed on edit page

            // use spread operator to create a copy not a reference
            stateDataOnMount={...args[0]}

            this.setState(prevState =>
                {
                    return {...prevState,data:args[0],loaded:true,changes:0}
                })
            Patient_Name=args[0].Patient_Name
        })


    }

    // Delete button actions and (not only delete but prompts tooo)  when pressed
    handleClickDelete(event)
    {
        // if the delete button is pressed
        if(event.target.id==='delete_button')
        {
            this.setState(prevState =>
                {
                    return {...prevState,mode:'deleteMode'}
                })
        }

        else if(event.target.className==='yesbuttonlink')
        {
            window.ipcRenderer.send('Delete-Profile',[Patient_id,Patient_Name])
            console.log('yes pressed')
        }

        else if(event.target.className === 'nobutton')
        {
            this.setState(prevState =>
                {
                    return {...prevState,mode:'editMode'}
                })
                console.log('No pressed')
        }

    }








    // Submit button MAIN
    handleClickSubmit(event)
    {
        if(event.target.id === 'save_button')
        {
            window.ipcRenderer.send('Edited-Profile-Data-From-React',[Patient_id,this.state.data])
        }
    }

    // to Change to View or Edit Mode
    handleClickControls(event)
    {   

        // change to edit mode
        if (event.target.id ==='changemodetoeditbutton')
        {
            this.setState(prevState =>
                {
                    return {...prevState,mode:'editMode'}
                })
        }

        // change to view Mode
        if(event.target.id === 'changemodetoviewbutton')
        {
            this.setState(prevState =>
                {
                    return {...prevState,mode:'viewMode'}
                })
        }
    }

    handleClickCounter(event)
    {
        let counter=this.state.changes
        this.setState(prevState =>
            {
                return {...prevState , changes: counter+1}
            })
    }
    
    
    render()

    

    {
        // Helper Rendering Methods

        // For Control Section
        let controlsRender=() =>    
            {
                // if in view Mode
                if(this.state.mode ==='viewMode')
                {
                    return (
                        <ControlsViewMode handleClickControls={this.handleClickControls} />
                    )

                }

                // else if in edit mode
                else if(this.state.mode === 'editMode')
                {
                    // Render  controls if in edit mode
                    return(
                        <ControlsEditMode handleClickControls={this.handleClickControls} 
                        handleClickSubmit={this.handleClickSubmit} changes={this.state['changes']} 
                        handleClickDelete={this.handleClickDelete}/>
                    )
                }

                // If in delete Mode
                else if(this.state.mode === 'deleteMode')
                {

                    // Render no controls
                    return(<div id='controls'>

                    </div>

                    )
                }
                
            }
        
        
        // Main Section Rendering
        let mainSectionRender =() =>
        {
            if (this.state.loaded)
            {
                // IMPORTANT !!

                // Statedata  it is a REFERANCE
                // statedataonMount is a copy 
                let stateData=this.state.data
                    // if in viewMode
                    if(this.state.mode === 'viewMode')
                    {
                        return (
                            <ViewMode data={stateDataOnMount}  />
                        )
                    }
                    // if in edit mode
                    else if(this.state.mode==='editMode')
                    {
                        return(
                            <EditMode data={stateData} handleClickCounter={this.handleClickCounter} />
                        )
                    }
                    // if in delete mode
                    else if(this.state.mode ==='deleteMode')
                    {
                        return(
                            <DeleteMode handleClickDelete={this.handleClickDelete} />
                        )
                    }
            }
        } 





            return(
                <div id='Profile'>

                    {/* NAVBAR */}
                        <div id='navbar'>
                                <nav className="navbar">
                        <div className="navbar__container">
                            <Link to="/" id="navbar__logo">
                            Patient Database
                            </Link>
                            <div className="navbar__toggle" id="mobile-menu">
                            <span className="bar"></span> <span className="bar"></span>
                            <span className="bar"></span>
                            </div>
                            <ul className="navbar__menu">
                            <li className="navbar__item">
                                <Link to="/" className="navbar__links" id="home-page">
                                Home
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link to="/Register" className="navbar__links" id="about-page">
                                Register
                                </Link>
                            </li>
                            <li className="navbar__item">
                                <Link
                                to="/Records"
                                className="navbar__links"
                                id="services-page"
                                >
                                Records
                                </Link>
                            </li>
                            <li className="navbar__btn">
                                <Link to="/" className="button" id="signup">
                                Sign Out
                                </Link>
                            </li>
                            </ul>
                        </div>
                            </nav>
                            </div>
                        
                                {/* MODE CHANGING AND SAVE BUTTON */}
                            {controlsRender()}


                                {/* Render Main view and edit Sections */}

                            {mainSectionRender()}






                            </div>
                            
        )
    }
}

// Control component
function ControlsViewMode(props)
{
        return(
            <div id='controls'>

                    {/* <h2 id='backbutton' onClick={props.handleClickControls}
                    >  Go Back </h2> */}

                    <h2 onClick={props.handleClickControls} id='changemodetoeditbutton'
                    > Change To Edit Mode </h2>
                    
               
            </div>

        )
}

// if in edit mode Controls
function ControlsEditMode(props)
{
    return(
        <div id='controls'>
                
                    <h2 onClick={props.handleClickControls} id='backbutton'
                    > Unsaved Changes: {props.changes} </h2>

                    <h2 onClick={props.handleClickDelete} id='delete_button'>
                        Delete
                    </h2>

                    <h2 onClick={props.handleClickControls} id='changemodetoviewbutton'
                    > Change To View Mode </h2>
                
                
                    <h2 id='save_button' onClick={props.handleClickSubmit}
                    >Save</h2>
               
            </div>
    )
}

// Delete Mode Component
function DeleteMode(props)
{
    return(
        <div id='Main_Container_Delete_Mode'>
        <div id='Delete_Mode_Container'>
            <div class='infodeletemode'>
                <h2>
                    <p>Deleting this profile is irreversible</p>
                    <p>Continue?</p>
                </h2>
            </div>
            <div class='deletemodeaction'>
                <div>
                <button class='yesbutton' >
                    <Link class='yesbuttonlink' onClick={props.handleClickDelete} to='/'>Yes</Link>
                    </button>
                </div>

                <div>
                <button class='nobutton' onClick={props.handleClickDelete}>
                    No
                    </button>
                </div>

            </div>
        </div>
        </div>

    )
}


export default ProfilePage
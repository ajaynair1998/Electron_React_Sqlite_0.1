import React,{Component} from 'react'
import{Link} from 'react-router-dom'

import ViewMode from './profilePageComponents/viewMode'
import EditMode from './profilePageComponents/editMode'

import '../stylesProfilePage.css'

let Patient_id

class ProfilePage extends Component{
    constructor()
    {
        super()
        this.state={mode:'viewMode'}

        // handleClicks
        this.handleClickSubmit=this.handleClickSubmit.bind(this)
        this.handleClickControls=this.handleClickControls.bind(this)
    }

    componentDidMount()
    {
        Patient_id =17

        // get the profile information from ipc main
        window.ipcRenderer.send('Give-Profile-Data',Patient_id)

        window.ipcRenderer.on('Profile-Data-From-Electron',(event,args) =>
        {
            this.setState(prevState =>
                {
                    return {...prevState,data:args[0]}
                })
        })


    }
    // Submit button MAIN
    handleClickSubmit(event)
    {
        if(event.target.id === 'save_button')
        {
            console.log('save pressed')
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
                        handleClickSubmit={this.handleClickSubmit}/>
                    )
                }
                
            }
        
        
        // Main Section Rendering
        





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








                            </div>
                            
        )
    }
}

// Control component
function ControlsViewMode(props)
{
        return(
            <div id='controls'>

                    <h2 id='backbutton' onClick={props.handleClickControls}
                    >  Go Back </h2>

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
                    > Go Back </h2>

                    <h2 onClick={props.handleClickControls} id='changemodetoviewbutton'
                    > Change To View Mode </h2>
                
                
                    <h2 id='save_button' onClick={props.handleClickSubmit}
                    >Save</h2>
               
            </div>
    )
}


export default ProfilePage
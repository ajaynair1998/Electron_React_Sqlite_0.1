import React,{Component} from 'react'

import PatientCard from './patientCard'

class Records extends Component{
    constructor(){
        super()
        this.state={screen:'all',keyword:'',loaded:'true'}
    }

    
    
    
    //Recieve all the patients that have been registered from the database
    componentDidMount()
    {
      //on load
      // request main electron application for the patient (name and id)
      window.ipcRenderer.send('give_patient_data')


      
      
      
      // on recieving patient (id,name) from electron
      window.ipcRenderer.on('got_patient_data',(event,arg) =>
      {
        //save our [array containing{Patient_id,Patient_Name}] to the state
        this.setState(prevState=>
          {
            return {...prevState,data:arg}
          })
        
      })

    }

    





    render(){

      let patientCardsToRender=()=>
      {
          //get the html cards into this variable so we can change the 
          //portion according if screen is set to 'all','filter','byDate'


          // if screen is set to show all patients
          if(this.state.screen == 'all')
          {

            this.state.


          }

      }







        return(
            <div id='Records'>
                <div id='navbar'>
                <nav className="navbar">
          <div className="navbar__container">
            <a href="#home" id="navbar__logo">
              Patient Database
            </a>
            <div className="navbar__toggle" id="mobile-menu">
              <span className="bar"></span> <span class="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className="navbar__menu">
              <li className="navbar__item">
                <a href="#home" className="navbar__links" id="home-page">
                  Home
                </a>
              </li>
              <li className="navbar__item">
                <a href="#about" className="navbar__links" id="about-page">
                  Register
                </a>
              </li>
              <li className="navbar__item">
                <a
                  href="#services"
                  className="navbar__links"
                  id="services-page"
                >
                  Records
                </a>
              </li>
              <li className="navbar__btn">
                <a href="#sign-up" className="button" id="signup">
                  Sign Out
                </a>
              </li>
            </ul>
          </div>
        </nav>

                </div>
                <div id='controls_and_records'>
                    <div id='controls'>

                    </div>



                    <div id='chart'>
                      <div className='patient'>
                        <div className='name' ><h2>Ajay</h2></div>
                        <div className='patient_id'><p>4323</p></div>
                        <div className='patient_button'> <button>Edit</button></div>
                        <div className='patient_button'> <button>View</button></div>

                      </div>
                                
                    </div>

                </div>

            </div>
        )
    }
}

export default Records
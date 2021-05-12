import React,{Component} from 'react'

import PatientCard from './patientCard'

const date= new Date();

class Records extends Component{
    constructor(){
        super()
        this.state={screen:'all',keyword:'',loading:true}

        
        this.handleClick=this.handleClick.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.handleClickViewButton=this.handleClickViewButton.bind(this)
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
            return {...prevState,data:arg,loading:false}
          })
          console.log(this.state.data)
        
      })

    }


    //to change screen type on button click (all,today,bykeyword)
    handleClick(event){
        // display all patients
        if(event.target.id === 'all')
        {
            this.setState(prevState =>
              {
                return {...prevState,screen:'all'}
              })
        }

        //display today's patient records
        else if(event.target.id === 'today')
        {
            this.setState(prevState =>
              {
                return {...prevState,screen:'today'}
              })
        }

        else if(event.target.id === 'search')
        {
            this.setState(prevState =>
              {
                return {...prevState,screen:'bykeyword'}
              })
        }

        
    }


    //to change keyword parameter on typing in search parameter
    handleChange(event)
    {
      if(event.target.id =='keywordinput')
      {
        //when keyword input is changed
        this.setState(prevState =>
          {
            return {...prevState,keyword:event.target.value}
          })
      }

    }


    handleClickViewButton(id)
    {
      //this function is passed to view button to fire when clicked to get the id when pressed

      console.log(id)
      window.location.href=`/viewPage/${id}`
    }
    





    render(){

      let patientCardsToRender=()=>
      
      {

        //make sure this is rendered after we get patient-data from electron
        if(this.state.loading === false)
        {
          //get the html cards into this variable so we can change the 
          //portion according if screen is set to 'all','filter','byDate'


          // if screen is set to show all patients
          if(this.state.screen === 'all')
          {
            let tempForStorage=
            this.state.data.map(item =>
            {
               
              return (< PatientCard patientName={item[1]} patientId={item[0]} key={item[0]} handleClickViewButton={this.handleClickViewButton} />)
              
            })
            console.log(tempForStorage)
            return(
              <div id='chart'>
                    {tempForStorage}
              </div>
            )
           


          }

          // if screen is set to only show todays patients
          else if(this.state.screen==='today')
          {
                //getting date so we can compare with the dates in records to get todays records
                let todaysDate=`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
                console.log(todaysDate)
                let tempForStorage=this.state.data.map(item =>
                  {
                    if(item[2]===`${todaysDate}`)
                    {
                      //if date field in each record equal to todays date we will return it to our temporary variable
                      // to render it later
                      console.log(item)
                      return (< PatientCard patientName={item[1]} patientId={item[0]} key={item[0]}  handleClickViewButton={this.handleClickViewButton}/>)

                    }

                    else{
                      // else then leave that record
                    }
                  })
                  
                  // then render that selected records in charts 
                  return(
                    <div id='chart'>
                          {tempForStorage}
                    </div>
                  )


            

          }

          else if(this.state.screen === 'bykeyword')
          {
            let tempForStorage = this.state.data.map(item =>
              {
                //get the keyword from state and compare with id and name if it matches
                let keyword=new RegExp(`${this.state.keyword}`)
                console.log(keyword)
                
                
                //check using regex
                
                if ( keyword.test(item[1] ? item[1] :'empty' ) || (item[0].toString().match(keyword)) )
                {
                  return (< PatientCard patientName={item[1]} patientId={item[0]} key={item[0]} handleClickViewButton={this.handleClickViewButton}/>)
                }
                else
                {
                  //leave the record
                }
              })

              return(
                <div id='chart'>
                      {tempForStorage}
                </div>
              )


          }
          

        }

        else if(this.state.loading === true)
        {
          return null
        }

      }







        return(
            <div id='Records'>
                <div id='navbar'>
                <nav className="navbar">
          <div className="navbar__container">
            <a href="/" id="navbar__logo">
              Patient Database
            </a>
            <div className="navbar__toggle" id="mobile-menu">
              <span className="bar"></span> <span class="bar"></span>
              <span className="bar"></span>
            </div>
            <ul className="navbar__menu">
              <li className="navbar__item">
                <a href="/" className="navbar__links" id="home-page">
                  Home
                </a>
              </li>
              <li className="navbar__item">
                <a href="/Register" className="navbar__links" id="about-page">
                  Register
                </a>
              </li>
              <li className="navbar__item">
                <a
                  href="/Records"
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
                      {/* buttons for different type of displays -(all,today,keyword) */}
                      <div id='screen'>
                        <button id='all' onClick={this.handleClick}> All</button>
                        <button id ='today' onClick={this.handleClick}>Today's</button>
                        <button id= 'search' onClick={this.handleClick}>Search</button>

                      </div>
                      {/* search by id or name */}
                      <div id='keyword'>
                      <input  placeholder='Search' id='keywordinput' onChange={this.handleChange}></input>
                      </div>
                      <div>

                      </div>
                    </div>



                    
                      {patientCardsToRender()}
                      
                      
                                
                    

                </div>

            </div>
        )
    }
}

export default Records
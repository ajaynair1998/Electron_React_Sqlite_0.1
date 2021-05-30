import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Webcam from 'react-webcam'

// Creating a date variable
const date=new Date

// creating an element to hold the picture referance
let picture_element

class Register extends Component{

    constructor(){
        super()
        //setting the default values as states early in advance
        this.state={data:{'Nationality':'India','Gender':'Not Selected',"Marital_Status":'Not Selected',
        'Blood_Group':'Not Selected','Doctor_Name':'Dr Arun Babu','Purpose':'Consultation'},captureMode:true}

        // reference to picture 
        this.picture_input=React.createRef()
        
        
        
        //handle change when each form spaces are edited
        this.handleChange=this.handleChange.bind(this)

        //handle click if submit or loggout is pressed
        this.handleClick=this.handleClick.bind(this)

        // handleCLick gor capturing scrrenshot
        this.handleClickCaptureImage=this.handleClickCaptureImage.bind(this)
    }

    componentDidMount(){
      
      //ipcRenderer testing
      // this.props.ipcRenderer.send('ping')
      
      // connect the input referance to the element we declared
      picture_element=this.picture_input

      // setting time and date at the time of load
      let time_field=document.getElementById('Time')

      // change time to am pm before rendering
      let hours=date.getHours()
      let amPm=hours >= 12 ? 'PM' : 'AM'
      hours= hours >= 12 ? hours-12 : hours
      
      
      time_field.value=`${hours}:${date.getMinutes()} ${amPm}`


      //setting date
      let date_field=document.getElementById('Date')
      date_field.value=`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`


      //get the default values inside state since it wont get updated on handleChange

      this.setState(prevState =>
        {
          return {data:{'Date':date_field.value,'Time':time_field.value,'Nationality':'India',
          'Gender':'Not Selected',"Marital_Status":'Not Selected',
        'Blood_Group':'Not Selected','Doctor_Name':'Dr Arun Babu',
        'Purpose':'Consultation'}}
        })

      

        
      
    }

    //handlechange gets the values of the form and changes state
    handleChange(event){
      

      //getting the id,name,value from the change event
      let {value,id} =event.target
      //adding these values to state so we send it to database
      let currentStateData=this.state.data

      currentStateData[id]=value

      this.setState((prevstate) =>
      {
        
        return  {...prevstate,data:currentStateData}
      })

      // for Debugging
      // console.log(this.state)
      
      
      

      
    }

    //handleclick for recieving submit and log out events
    handleClick(event)
    {
      event.preventDefault()
      let {id}=event.target
      
      if(id=='Submit')
      {
        
          
        // if we are not in capture mode we can save the existing image into our data property
          if(this.state.captureMode===false)
          {
            let tempData=this.state.data
            
            // make a new property image and add our image to it
            tempData.Image=this.state.image
            this.setState(prevState =>
              {
                return {...prevState,data:tempData}
              })
          }
         // If we are still in capture mode we dont have an image yet so we should change that field to null
         else if(this.state.captureMode === true)
         {
           let tempData=this.state.data
            
            // make a new property image and make it null
            tempData.Image=null
            this.setState(prevState =>
              {
                return {...prevState,data:tempData}
              })
         }
        
         // debugg mode
        // console.log(this.state.data)
         
        
        //if the button that was pressed is submit
        window.ipcRenderer.send('form-data',this.state.data)
       
      }
    }

    handleClickCaptureImage(event)
    {
      // if in capture mode
      if(this.state.captureMode)
      {
              event.preventDefault()
              let imageSrc=picture_element.current.getScreenshot()

              this.setState(prevState =>
                {
                  return {...prevState,image:imageSrc,captureMode:false}
                })
      }

      else
      {
        event.preventDefault()
        this.setState(prevState =>
          {
            return {...prevState,image:null,captureMode:true}
          })
      }
    }


    

    
    
    
    
    render(){

      let ImageFieldRender =() =>
      {
        // if in capture mode
        if(this.state.captureMode)
        {
          return(
              <div id='Image_and_Button' className='data_field'>
                    <Webcam id='avatar'
                        audio={false}
                        height={720}
                        ref={this.picture_input}
                        screenshotFormat="image/jpeg"
                        width={1280}
                      
                      />
                      <button id="Capture_Image_Button"
                      onClick={this.handleClickCaptureImage}>Capture</button>

                    </div>
          )
        }
        // if not in capture mode
        else if(this.state.captureMode === false)
        {
          return (
            <div id='Image_and_Button' className='data_field'>
                    <img src={this.state.image}  id='avatar'></img>
                      <button id="Capture_Image_Button"
                      onClick={this.handleClickCaptureImage}>Retake</button>

                    </div>
          )

        }
      }
      
        return(


            <div id="Register">
        <nav className="navbar">
          <div className="navbar__container">
            <Link to="/" id="navbar__logo">
              Patient Database
            </Link>
            <div className="navbar__toggle" id="mobile-menu">
              <span className="bar"></span> <span class="bar"></span>
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

        <div id="contents">
            <form class="signup-form" action="/register" method="post">
                {/* <!-- form header --> */}
                <div class="form-header">
                    <h1>Register New patient</h1>
                </div>

                <div id='Picture_Container'>
                    {ImageFieldRender()}
                </div>
                
               
                {/* <!-- form body --> */}
                <div class="form-container">
                    <div class='form-body'>

                    <div className='data_field'>
                        <label for='Date'>Date:</label>
                        <input id ='Date' type='text' onChange={this.handleChange} ></input>
                    </div>


                    <div className='data_field'>
                        <label for='Time'>Time:</label>
                        <input id ='Time' type='text' onChange={this.handleChange}></input>
                    </div>
                    <div className='data_field'>
                        <label for='Patient_id'>Patient ID:</label>
                        <input id ='Patient_id' placeholder='Id will be autogenerated' type='text' onChange={this.handleChange}></input>
                    </div>

                    <div className='data_field'>
                        <label for='Patient_Name'>Patient Name:</label>
                        <input id ='Patient_Name' type='text' onChange={this.handleChange}></input>
                        
                    </div>

                    <div className='data_field'>
                        <label for='Nationality'>Nationality:</label>
                        <input id ='Nationality' type='text' defaultValue='India' onChange={this.handleChange}></input>
                    </div>

                    <div className='data_field'>
                        <label for='Age'>Age:</label>
                        <input id ='Age' type='text' onChange={this.handleChange}></input>
                    </div>

                    <div className='data_field'>
                        <label for='DOB'>Date of Birth:</label>
                        <input id ='DOB' type='date' onChange={this.handleChange}></input>
                    </div>

                    <div className='data_field'>
                    <label for='Gender'>Gender :</label>
                    <select id="Gender" name="Gender" onChange={this.handleChange}>
                    <option value="Not Selected">Not Selected</option>  
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    
                    </select>
  
                    </div>

                    <div className='data_field'>
                        <label for='Address'>Address:</label>
                        <textarea id='Address' placeholder='Enter address Here' onChange={this.handleChange}></textarea>
                    </div>


                    <div className='data_field'>
                    <label for='Blood_Group'>Blood Group:</label>
                    <select id="Blood_Group" name="Blood_Group" onChange={this.handleChange}>
                    <option value="Not Selected">Not Selected</option>
                    <option value="A+">A+</option>
                    <option value="O+">O+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="A-">A-</option>
                    <option value="O-">O-</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                    </select>
                    </div>


                    <div className='data_field'>
                        <label for='Phone_Number'>Phone Number:</label>
                        <input id ='Phone_Number' type='text' onChange={this.handleChange}></input>
                    </div>



                    <div className='data_field'>
                        <label for='Mobile_Number'>Mobile Number:</label>
                        <input id ='Mobile_Number' type='text' onChange={this.handleChange}></input>
                    </div>


                    <div className='data_field'>
                        <label for='Email'>Email:</label>
                        <input id ='Email' type='text' onChange={this.handleChange}></input>
                    </div>


                    <div className='data_field'>
                    <label for='Marital_Status'>Marital Status:</label>
                    <select id="Marital_Status" name="Marital_Status" onChange={this.handleChange}>
                    <option value="Not Selected">Not Selected</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    </select>
  
                    </div>

                    <div className='data_field'>
                        <label for='Occupation'>Occupation:</label>
                        <input id ='Occupation' type='text' onChange={this.handleChange}></input>
                    </div>


                    <div className='data_field'>
                        <label for='Doctor_Name'>Doctor Name:</label>
                        <input id ='Doctor_Name' type='text' defaultValue='Dr Arun Babu' onChange={this.handleChange}></input>
                    </div>

                    <div className='data_field'>
                        <label for='Purpose'>Purpose:</label>
                        <input id ='Purpose' type='text' defaultValue='Consultation' onChange={this.handleChange}></input>
                    </div>

                    <div className='data_field'>
                        <label for='Reffered_By'>Reffered By:</label>
                        <input id ='Reffered_By' type='text' onChange={this.handleChange}></input>
                    </div>
                    </div>

                
                
                
                
                
                
                
                
                
                
                
                
                </div>
                
                
                
                
                
                {/* <!-- form footer --> */}
                <div class="form-footer">

                
                  <button id='Submit' onClick={this.handleClick}>Register</button>
                
                </div>
            
            
            
            
            
            </form>
          
        </div>
      </div>
    
        )
    }
}

//prompt when submit is pressed
// function prompt(){
//   let temp=window.confirm('The form will be sumbitted, Check before continuing')
//   return temp
// }



export default Register
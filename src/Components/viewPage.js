import React,{Component} from 'react'

class ViewPage extends Component{
    constructor(props){
        super(props)

        //Referance of all the data that will be recieved from electron for future Referance
        this.state={loading:true,
                    data:{
            "Patient_id": null,
            "Patient_Name": null,
            "Chief_Complaint": null,
            "Past_Medical_History": null,
            "Past_Dental_History": null,
            "Drug_Allergy": null,
            "General_Examination": null,
            "Local_Examination": null,
            "Clinical_Diagnosis": null,
            "Investigation": null,
            "Treatment_Plan": null,
            "Medicines": null,
            "Diagnosis":null,
            "Follow_Up":null
        }
    }


        //functions custom
        this.handleClick=this.handleClick.bind(this)

    }

    // will fire when trying to load
    componentDidMount()
    {

        // getting the patient id from the records page
        const {patientId} =this.props.match.params
        
        // sending this id to electron so that electron can send back the viewPage Profile Data 
        // for the Patient
        window.ipcRenderer.send('View-Page-Data',patientId)


        // on Recieving the ProfileData
        window.ipcRenderer.on('Data-From-Electron',(event,args) =>
        {
            this.setState(prevState =>
                {
                    return {loading:false,data:args[0]}
                })
                  
        })
        


    }

    handleClick(event){
        // show state when GoTo is pressed for Devolopment
        if(event.target.id ==='GoToButton') console.log(this.state)
        


    }


    render()
    {
        //function to render each Components

        //chief Complaint Component rendering Section
        let ChiefComplaints=() =>
        {

        }









        //the html content
        return(

    <div id='view'>
     <div id='navbar'>
            <nav className="navbar">
      <div className="navbar__container">
        <a href="/" id="navbar__logo">
          Patient Database
        </a>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span> <span className="bar"></span>
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

        
        <div id='contents'>
            <div id='controls'>
                
                    <h2 onClick={this.handleClick} id='GoToButton'> Go To </h2>
                
                
                    <h2 id='save_button'>Save</h2>
               
            </div>
            <div id='main'>
                {/* <!-- cheif complaints section --> */}



                <div id='chief_complaint'>
                    <div className='label'>
                        <h2>Chief Complaint:</h2>

                    </div>
                    <div className='dataarea'>
                        <div className='input_entry'>
                            <div className='labels'>
                                <p>Complaint:</p>
                                <p>H/O Complaint:</p>

                            </div>
                            <div className='input_rows'>
                                <input placeholder='Complaint' className='input_extraoral'></input>
                                <input placeholder='History of This Complaint' className='input_intraoral'></input>

                            </div>
                            <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div className="add_button">
                                <button id='add_button_chief_Complaint'>Add</button>

                            </div>
                            <div>

                            </div>

                        </div>

                        <div className='single_entry'>
                            <div className='labels'>
                                <p>Chief Complaint:</p>
                                <p>H/O Complaint:</p>

                            </div>
                            <div className='input_rows'>
                                <p>chief complaint</p>
                                
                                <p>H/O Chief Complaint</p>

                            </div>
                            <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div className="delete_button">
                                <button className='delete_button_chief_complaint'>Delete</button>

                            </div>
                            <div>

                            </div>

                        </div>

                    </div>

                

                </div>



                    {/* <!-- chief complaints done --> */}




                    {/* <!-- past medical history section --> */}
                
                <div id='past_medical_history'>
                    <div className='label'>
                    <h2>Past medical History:</h2>
                    </div>
                    <div className='dataarea'>
                    <textarea placeholder="No Past medical History Yet"></textarea>
                    <button>Edit</button>
                    </div>       
                </div>


                    {/* <!-- past medical History Done --> */}






                    {/* <!-- past Dental History --> */}

                

                    <div id='past_dental_history'>
                        <div className='label'>
                        <h2>Past Dental History:</h2>
                        </div>
                        <div className='dataarea'>
                        <textarea placeholder="No Past Dental History"></textarea>
                        <button>Edit</button>
                        </div>       
                    </div>

                    {/* <!-- past dental history done --> */}



                    {/* <!-- drug alergy section start --> */}

                    <div id ='drug_allergy'>
                        <div className='label'>
                            <h2>Drug Allergy:</h2>
                        </div>
                        <div className='dataarea'>
                            {/* <!-- <div className='buttons'>
                            <button className='yes_button'> Yes</button>
                            <button className='no_button'>No</button>
                            </div> --> */}
                            <div className='drug_allergy_input'>
                            <textarea id='drug_allergy_input' placeholder="No Drug Allergies Found Yet"></textarea>
                            </div>
                        </div>


                    </div>

                    {/* <!-- drug allergy sectiion Completed --> */}



                    {/* <!-- General Examination Section --> */}

                    <div id='general_examination'>
                        <div className='label'>
                            <h2>General Examination:</h2>

                        </div>
                        <div className='dataarea'>
                            <div className='labels'>
                                <p>BP</p>
                                <p>Temperature</p>
                                <p>Oxygen Saturation</p>
                                <p>Date Of Entry</p>

                            </div>
                            <div className='single_input'>
                                <div><input id='bp' placeholder="BP"></input></div>
                                <div><input id='temperature' placeholder="Temperature"></input></div>
                                <div><input id='o2_saturation' placeholder="O2"></input></div>
                                <div><button>Add</button></div>
                            </div>
                            <div className='single_entry'>
                                <p>120/80</p>
                                <p>98 F</p>
                                <p>70%</p>
                                <p>27-09-2007</p>

                            </div>

                        </div>

                    </div>


                    {/* <!-- General Examination Done --> */}

                    {/* <!-- Starting Local Examination --> */}

                <div id='local_examination'>
                    <div className='label'>
                        <h2>Local Examination:</h2>

                    </div>
                    <div className='dataarea'>
                        <div className='input_entry'>
                            <div className='labels'>
                                <p>Extra Oral:</p>
                                <p>Intra Oral:</p>

                            </div>
                            <div className='input_rows'>
                                <input placeholder='Extra Oral' className='input_extraoral'></input>
                                <input placeholder='Intra Oral' className='input_intraoral'></input>

                            </div>
                            <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div className="add_button">
                                <button id='add_button_local_examination'>Add</button>

                            </div>
                            <div>

                            </div>

                        </div>

                        <div className='single_entry'>
                            <div className='labels'>
                                <p>Extra Oral:</p>
                                <p>Intra Oral:</p>

                            </div>
                            <div className='input_rows'>
                                <p>Something about Extra Oral</p>
                                
                                <p>Something about Intra Oral</p>

                            </div>
                            <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div className="delete_button">
                                <button className='delete_button_local_examination'>Delete</button>

                            </div>
                            <div>

                            </div>

                        </div>

                    </div>

                </div>





                {/* <!-- local Examination Section DONE --> */}




                {/* <!-- STARTING Clinical Diagnosis --> */}


                

           <div id='clinical_diagnosis'>
                <div className='label'>
                    <h2>Clinical Diagnosis:</h2>

                </div>
                <div className='dataarea'>
                    <div className='input_entry'>
                            <div className='labels'>
                                <p>New:</p>

                            </div>
                            <div className='input_rows'>
                                <input placeholder='Add Clinical Diagnosis'></input>

                            </div>
                            <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div className="add_button">
                                <button id='add_button_clinical_diagnosis'>Add</button>

                            </div>
                            

                        </div>
                        


                        <div className='single_entry'>
                            <div className='labels'>
                                <p>Diagnosis</p>
                                    

                            </div>
                            <div className='input_rows'>
                               <p>Something Diagnosed</p>

                            </div>
                            <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div className="delete_button">
                                <button className='delete_button_clinical_diagnosis'>Delete</button>

                            </div>
                            

                        </div>

                </div>
                

            </div>




            {/* <!-- Clinical Diagnosis Done --> */}


            {/* <!-- starting investigation --> */}


            <div id='investigation'>
                <div className='label'>
                    <h2>Investigation:</h2>

                </div>
                <div className='dataarea'>
                    <div className='input_entry'>
                            <div className='labels'>
                                <select name="investigations" id="investigations">
                                    <option value="Blood">Blood</option>
                                    <option value="X-Ray">X-Ray</option>
                                    <option value="CT">CT</option>
                                    <option value="MRI">MRI</option>
                                    <option value="Ultrasound">Ultrasound</option>
                                </select>
                                    

                            </div>
                            <div className='input_rows'>
                                <button id='select_file'>Select File</button>

                            </div>
                            <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div className="add_button">
                                <button id='add_button_investigation'>Add</button>

                            </div>
                            

                        </div>
                        


                        <div className='single_entry'>
                            <div className='labels'>
                                <p>Blood</p>
                                    

                            </div>
                            <div className='input_rows'>
                                <button >Open File</button>

                            </div>
                            <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div className="delete_button">
                                <button className='delete_button_investigation'>Delete</button>

                            </div>
                            

                        </div>

                </div>
                

            </div>


            {/* <!-- Investigation Over --> */}

            {/* <!-- Diagnosis section start --> */}


                <div id='diagnosis'>
                <div className='label'>
                    <h2>Diagnosis:</h2>

                </div>
                <div className='dataarea'>
                    <div className='input_entry'>
                            <div className='labels'>
                                <p>New:</p>

                            </div>
                            <div className='input_rows'>
                                <input placeholder='Add Diagnosis'></input>

                            </div>
                            <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div className="add_button">
                                <button id='add_button_diagnosis'>Add</button>

                            </div>
                            

                        </div>
                        


                        <div className='single_entry'>
                            <div className='labels'>
                                <p>Diagnosis:</p>
                                    

                            </div>
                            <div className='input_rows'>
                               <p>Older Diagnosis displayed in a list here</p>

                            </div>
                            <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div className="delete_button">
                                <button className='delete_button_clinical_diagnosis'>Delete</button>

                            </div>
                            

                        </div>

                </div>
                

            </div>






            {/* <!-- diagnosis section end --> */}

            {/* <!-- starting Treatment Plan  --> */}

            <div id='treatment_plan'>
                <div className='label'>
                    <h2>Treatment Plan:</h2>

                </div>
                <div className='dataarea'>
                    <div className='input_entry'>
                        <div className='labels'>
                            <p>Treatment Plan:</p>
                            <p>Treatment:</p>
                            

                        </div>
                        <div className='input_rows'>
                            <input placeholder='Treatment Plan' className='input_treatment_plan'></input>
                            <input placeholder='Treatment' className='input_treatment'></input>

                        </div>
                        <div className='date'>
                            <p>xx/xx/xxxx</p>

                        </div>
                        <div className="add_button">
                            <button id='add_button_treatment_plan'>Add</button>

                        </div>
                        <div>

                        </div>

                    </div>

                    <div className='single_entry'>
                        <div className='labels'>
                            <p>Treatment Plan:</p>
                            <p>Treatment:</p>
                            

                        </div>
                        <div className='input_rows'>
                            <p>Something about Treatment Plan</p>
                            
                            <p>Something about Treatment</p>

                        </div>
                        <div className='date'>
                            <p>xx/xx/xxxx</p>

                        </div>
                        <div className="delete_button">
                            <button className='delete_button_treatment_Plan'>Delete</button>

                        </div>
                        <div>

                        </div>

                    </div>

                </div>

            </div>


            {/* <!-- treatment plan Done --> */}


            {/* <!-- Starting Medicines --> */}


             <div id='medicine'>
                <div className='label'>
                    <h2>Medicine:</h2>

                </div>
                <div className='dataarea'>
                    <div className='input_entry'>
                            <div className='labels'>
                                <select name="medicines" id="medicine_type">
                                    <option value="Tablet">Tablet</option>
                                    <option value="Capsule">Capsule</option>
                                    <option value="Syrup">Syrup</option>
                                    <option value="Topical">Topical</option>
                                    <option value="Injection">Injection</option>
                                </select>
                                    

                            </div>
                            <div className='input_rows'>
                                <input placeholder='Medicine Name' id='medicine_name'></input>

                            </div>
                            <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div className="add_button">
                                <button id='add_button_medicine'>Add</button>

                            </div>
                            

                        </div>
                        


                        <div className='single_entry'>
                            <div className='labels'>
                                <p>Tablet</p>
                                    

                            </div>
                            <div className='input_rows'>
                                <p>Medicine x</p>

                            </div>
                            <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div className="delete_button">
                                <button className='delete_button_medicine'>Delete</button>

                            </div>
                            

                        </div>

                </div>
                

            </div>

            {/* <!-- medicine Styling Done --> */}

            {/* <!-- Follow-Up Section --> */}
            



            <div id='diagnosis'>
                <div className='label'>
                    <h2>Follow Up:</h2>

                </div>
                <div className='dataarea'>
                    <div className='input_entry'>
                            <div className='labels'>
                                <p>New:</p>

                            </div>
                            <div className='input_rows'>
                                <input type='date' placeholder='Add Diagnosis'></input>

                            </div>
                            
                            <div className="add_button">
                                <button id='add_button_follow_up'>Add</button>

                            </div>
                            

                        </div>
                        


                        <div className='single_entry'>
                            <div className='labels'>
                                <p>Date:</p>
                                    

                            </div>
                            <div className='input_rows'>
                               <p>xx/xx/xxxx</p>

                            </div>
                            
                            <div className="delete_button">
                                <button className='delete_button_follow_up'>Delete</button>

                            </div>
                            

                        </div>

                </div>
                

            </div>





            










            </div>

        </div>

    </div>
    
  </div>)
    }
}


export default ViewPage
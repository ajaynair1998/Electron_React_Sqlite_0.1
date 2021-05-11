import React,{Component} from 'react'

class ViewPage extends Component{
    constructor(){
        super()
        this.state={}

    }


    render()
    {
        return(

    <div id='view'>
     <div id='navbar'>
            <nav class="navbar">
      <div class="navbar__container">
        <a href="#home" id="navbar__logo">
          Patient Database
        </a>
        <div class="navbar__toggle" id="mobile-menu">
          <span class="bar"></span> <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="navbar__menu">
          <li class="navbar__item">
            <a href="#home" class="navbar__links" id="home-page">
              Home
            </a>
          </li>
          <li class="navbar__item">
            <a href="#about" class="navbar__links" id="about-page">
              Register
            </a>
          </li>
          <li class="navbar__item">
            <a
              href="#services"
              class="navbar__links"
              id="services-page"
            >
              Records
            </a>
          </li>
          <li class="navbar__btn">
            <a href="#sign-up" class="button" id="signup">
              Sign Out
            </a>
          </li>
        </ul>
      </div>
        </nav>

        
        <div id='contents'>
            <div id='controls'>
                
                    <h2> Go To </h2>
                
                
                    <h2 id='save_button'>Save</h2>
               
            </div>
            <div id='main'>
                {/* <!-- cheif complaints section --> */}



                <div id='chief_complaint'>
                    <div class='label'>
                        <h2>Chief Complaint:</h2>

                    </div>
                    <div class='dataarea'>
                        <div class='input_entry'>
                            <div class='labels'>
                                <p>Complaint:</p>
                                <p>H/O Complaint:</p>

                            </div>
                            <div class='input_rows'>
                                <input placeholder='Complaint' class='input_extraoral'></input>
                                <input placeholder='History of This Complaint' class='input_intraoral'></input>

                            </div>
                            <div class='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div class="add_button">
                                <button id='add_button_chief_Complaint'>Add</button>

                            </div>
                            <div>

                            </div>

                        </div>

                        <div class='single_entry'>
                            <div class='labels'>
                                <p>Chief Complaint:</p>
                                <p>H/O Complaint:</p>

                            </div>
                            <div class='input_rows'>
                                <p>chief complaint</p>
                                
                                <p>H/O Chief Complaint</p>

                            </div>
                            <div class='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div class="delete_button">
                                <button class='delete_button_local_examination'>Delete</button>

                            </div>
                            <div>

                            </div>

                        </div>

                    </div>

                

                </div>



                    {/* <!-- chief complaints done --> */}




                    {/* <!-- past medical history section --> */}
                
                <div id='past_medical_history'>
                    <div class='label'>
                    <h2>Past medical History:</h2>
                    </div>
                    <div class='dataarea'>
                    <textarea placeholder="No Past medical History Yet"></textarea>
                    <button>Edit</button>
                    </div>       
                </div>


                    {/* <!-- past medical History Done --> */}






                    {/* <!-- past Dental History --> */}

                

                    <div id='past_dental_history'>
                        <div class='label'>
                        <h2>Past Dental History:</h2>
                        </div>
                        <div class='dataarea'>
                        <textarea placeholder="No Past Dental History"></textarea>
                        <button>Edit</button>
                        </div>       
                    </div>

                    {/* <!-- past dental history done --> */}



                    {/* <!-- drug alergy section start --> */}

                    <div id ='drug_allergy'>
                        <div class='label'>
                            <h2>Drug Allergy:</h2>
                        </div>
                        <div class='dataarea'>
                            {/* <!-- <div class='buttons'>
                            <button class='yes_button'> Yes</button>
                            <button class='no_button'>No</button>
                            </div> --> */}
                            <div class='drug_allergy_input'>
                            <textarea id='drug_allergy_input' placeholder="No Drug Allergies Found Yet"></textarea>
                            </div>
                        </div>


                    </div>

                    {/* <!-- drug allergy sectiion Completed --> */}



                    {/* <!-- General Examination Section --> */}

                    <div id='general_examination'>
                        <div class='label'>
                            <h2>General Examination:</h2>

                        </div>
                        <div class='dataarea'>
                            <div class='labels'>
                                <p>BP</p>
                                <p>Temperature</p>
                                <p>Oxygen Saturation</p>
                                <p>Date Of Entry</p>

                            </div>
                            <div class='single_input'>
                                <div><input id='bp' placeholder="BP"></input></div>
                                <div><input id='temperature' placeholder="Temperature"></input></div>
                                <div><input id='o2_saturation' placeholder="O2"></input></div>
                                <div><button>Add</button></div>
                            </div>
                            <div class='single_entry'>
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
                    <div class='label'>
                        <h2>Local Examination:</h2>

                    </div>
                    <div class='dataarea'>
                        <div class='input_entry'>
                            <div class='labels'>
                                <p>Extra Oral:</p>
                                <p>Intra Oral:</p>

                            </div>
                            <div class='input_rows'>
                                <input placeholder='Extra Oral' class='input_extraoral'></input>
                                <input placeholder='Intra Oral' class='input_intraoral'></input>

                            </div>
                            <div class='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div class="add_button">
                                <button id='add_button_local_examination'>Add</button>

                            </div>
                            <div>

                            </div>

                        </div>

                        <div class='single_entry'>
                            <div class='labels'>
                                <p>Extra Oral:</p>
                                <p>Intra Oral:</p>

                            </div>
                            <div class='input_rows'>
                                <p>Something about Extra Oral</p>
                                
                                <p>Something about Intra Oral</p>

                            </div>
                            <div class='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div class="delete_button">
                                <button class='delete_button_local_examination'>Delete</button>

                            </div>
                            <div>

                            </div>

                        </div>

                    </div>

                </div>





                {/* <!-- local Examination Section DONE --> */}




                {/* <!-- STARTING Clinical Diagnosis --> */}


                

           <div id='clinical_diagnosis'>
                <div class='label'>
                    <h2>Clinical Diagnosis:</h2>

                </div>
                <div class='dataarea'>
                    <div class='input_entry'>
                            <div class='labels'>
                                <p>New:</p>

                            </div>
                            <div class='input_rows'>
                                <input placeholder='Add Clinical Diagnosis'></input>

                            </div>
                            <div class='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div class="add_button">
                                <button id='add_button_clinical_diagnosis'>Add</button>

                            </div>
                            

                        </div>
                        


                        <div class='single_entry'>
                            <div class='labels'>
                                <p>Diagnosis</p>
                                    

                            </div>
                            <div class='input_rows'>
                               <p>Something Diagnosed</p>

                            </div>
                            <div class='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div class="delete_button">
                                <button class='delete_button_clinical_diagnosis'>Delete</button>

                            </div>
                            

                        </div>

                </div>
                

            </div>




            {/* <!-- Clinical Diagnosis Done --> */}


            {/* <!-- starting investigation --> */}


            <div id='investigation'>
                <div class='label'>
                    <h2>Investigation:</h2>

                </div>
                <div class='dataarea'>
                    <div class='input_entry'>
                            <div class='labels'>
                                <select name="investigations" id="investigations">
                                    <option value="Blood">Blood</option>
                                    <option value="X-Ray">X-Ray</option>
                                    <option value="CT">CT</option>
                                    <option value="MRI">MRI</option>
                                    <option value="Ultrasound">Ultrasound</option>
                                </select>
                                    

                            </div>
                            <div class='input_rows'>
                                <button id='select_file'>Select File</button>

                            </div>
                            <div class='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div class="add_button">
                                <button id='add_button_investigation'>Add</button>

                            </div>
                            

                        </div>
                        


                        <div class='single_entry'>
                            <div class='labels'>
                                <p>Blood</p>
                                    

                            </div>
                            <div class='input_rows'>
                                <button >Open File</button>

                            </div>
                            <div class='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div class="delete_button">
                                <button class='delete_button_investigation'>Delete</button>

                            </div>
                            

                        </div>

                </div>
                

            </div>


            {/* <!-- Investigation Over --> */}

            {/* <!-- Diagnosis section start --> */}


                <div id='diagnosis'>
                <div class='label'>
                    <h2>Diagnosis:</h2>

                </div>
                <div class='dataarea'>
                    <div class='input_entry'>
                            <div class='labels'>
                                <p>New:</p>

                            </div>
                            <div class='input_rows'>
                                <input placeholder='Add Diagnosis'></input>

                            </div>
                            <div class='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div class="add_button">
                                <button id='add_button_diagnosis'>Add</button>

                            </div>
                            

                        </div>
                        


                        <div class='single_entry'>
                            <div class='labels'>
                                <p>Diagnosis:</p>
                                    

                            </div>
                            <div class='input_rows'>
                               <p>Older Diagnosis displayed in a list here</p>

                            </div>
                            <div class='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div class="delete_button">
                                <button class='delete_button_clinical_diagnosis'>Delete</button>

                            </div>
                            

                        </div>

                </div>
                

            </div>






            {/* <!-- diagnosis section end --> */}

            {/* <!-- starting Treatment Plan  --> */}

            <div id='treatment_plan'>
                <div class='label'>
                    <h2>Treatment Plan:</h2>

                </div>
                <div class='dataarea'>
                    <div class='input_entry'>
                        <div class='labels'>
                            <p>Treatment Plan:</p>
                            <p>Treatment:</p>
                            

                        </div>
                        <div class='input_rows'>
                            <input placeholder='Treatment Plan' class='input_treatment_plan'></input>
                            <input placeholder='Treatment' class='input_treatment'></input>

                        </div>
                        <div class='date'>
                            <p>xx/xx/xxxx</p>

                        </div>
                        <div class="add_button">
                            <button id='add_button_treatment_plan'>Add</button>

                        </div>
                        <div>

                        </div>

                    </div>

                    <div class='single_entry'>
                        <div class='labels'>
                            <p>Treatment Plan:</p>
                            <p>Treatment:</p>
                            

                        </div>
                        <div class='input_rows'>
                            <p>Something about Treatment Plan</p>
                            
                            <p>Something about Treatment</p>

                        </div>
                        <div class='date'>
                            <p>xx/xx/xxxx</p>

                        </div>
                        <div class="delete_button">
                            <button class='delete_button_treatment_Plan'>Delete</button>

                        </div>
                        <div>

                        </div>

                    </div>

                </div>

            </div>


            {/* <!-- treatment plan Done --> */}


            {/* <!-- Starting Medicines --> */}


             <div id='medicine'>
                <div class='label'>
                    <h2>Medicine:</h2>

                </div>
                <div class='dataarea'>
                    <div class='input_entry'>
                            <div class='labels'>
                                <select name="medicines" id="medicine_type">
                                    <option value="Tablet">Tablet</option>
                                    <option value="Capsule">Capsule</option>
                                    <option value="Syrup">Syrup</option>
                                    <option value="Topical">Topical</option>
                                    <option value="Injection">Injection</option>
                                </select>
                                    

                            </div>
                            <div class='input_rows'>
                                <input placeholder='Medicine Name' id='medicine_name'></input>

                            </div>
                            <div class='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div class="add_button">
                                <button id='add_button_medicine'>Add</button>

                            </div>
                            

                        </div>
                        


                        <div class='single_entry'>
                            <div class='labels'>
                                <p>Tablet</p>
                                    

                            </div>
                            <div class='input_rows'>
                                <p>Medicine x</p>

                            </div>
                            <div class='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div class="delete_button">
                                <button class='delete_button_medicine'>Delete</button>

                            </div>
                            

                        </div>

                </div>
                

            </div>

            {/* <!-- medicine Styling Done --> */}

            {/* <!-- Follow-Up Section --> */}
            



            <div id='diagnosis'>
                <div class='label'>
                    <h2>Follow Up:</h2>

                </div>
                <div class='dataarea'>
                    <div class='input_entry'>
                            <div class='labels'>
                                <p>New:</p>

                            </div>
                            <div class='input_rows'>
                                <input type='date' placeholder='Add Diagnosis'></input>

                            </div>
                            
                            <div class="add_button">
                                <button id='add_button_follow_up'>Add</button>

                            </div>
                            

                        </div>
                        


                        <div class='single_entry'>
                            <div class='labels'>
                                <p>Date:</p>
                                    

                            </div>
                            <div class='input_rows'>
                               <p>xx/xx/xxxx</p>

                            </div>
                            
                            <div class="delete_button">
                                <button class='delete_button_follow_up'>Delete</button>

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
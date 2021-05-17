import React,{Component} from 'react'

// import varies viewpage Components

import ChiefComplaint from './viewPageComponents/chiefComplaints'
import GeneralExamination from './viewPageComponents/generalExaminations'
import LocalExamination from './viewPageComponents/localExaminations'
import ClinicalDiagnosis from './viewPageComponents/clinicalDiagnosis'
import Diagnosis from './viewPageComponents/diagnosis'
import TreatmentPlan from './viewPageComponents/treatmentPlan'



// defining date variable
let date=new Date()
let todaysDate=`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`


// input elements are going to be defined globally
let chief_complaint_element
let complaint_history_input_element
let bp_element
let temperature_element
let oxygensaturation_element
let extra_oral_element
let intra_oral_element
let clinical_diagnosis_element
let diagnosis_element
let treatment_plan_element
let treatment_element



class ViewPage extends Component{
    constructor(props){
        super(props)



        // adding referance to access the inputs in react
        this.chief_complaint_input=React.createRef()
        this.complaint_history_input=React.createRef()
        this.bp_input=React.createRef()
        this.temperature_input=React.createRef()
        this.oxygensaturation_input=React.createRef()
        this.extra_oral_input=React.createRef()
        this.intra_oral_input=React.createRef()
        this.clinical_diagnosis_input=React.createRef()
        this.diagnosis_input=React.createRef()
        this.treatment_plan_input=React.createRef()
        this.treatment_input=React.createRef()



        //Referance of all the data that will be recieved from electron for future Referance
        this.state={loading:false,
                    data:{
            "Patient_id": null,
            "Patient_Name": null,
            "Chief_Complaint": "[[2,'27-07-1992','lorem','ipsum'],[1,'27-07-1992','bad','man']]",
            "Past_Medical_History": null,
            "Past_Dental_History": null,
            "Drug_Allergy": null,
            "General_Examination": "[[2,'27-98-9876','120/80','80F','20%'],[1,'27-98-9876','130/80','90F','30%']]",
            "Local_Examination": "[[1,'25-34-9876','extraoral something','intra oral something']]",
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
        this.handleClickChiefComplaint=this.handleClickChiefComplaint.bind(this)
        this.handleClickGeneralExamination=this.handleClickGeneralExamination.bind(this)
        this.handleClickLocalExamination=this.handleClickLocalExamination.bind(this)
        this.handleClickClinicalDiagnosis=this.handleClickClinicalDiagnosis.bind(this)
        this.handleClickDiagnosis=this.handleClickDiagnosis.bind(this)
        this.handleClickTreatmentPlan=this.handleClickTreatmentPlan.bind(this)

        // handlechange functions for text areas
        // Past medical History,Past Dental History,Drug Allergy
        this.handleChangeTextAreas=this.handleChangeTextAreas.bind(this)
        

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
        // window.ipcRenderer.on('Data-From-Electron',(event,args) =>
        // {
        //     this.setState(prevState =>
        //         {
        //             return {loading:false,data:args[0]}
        //         })
                  
        // })
        
        // 



        // we can assign refs only inside lifecycle methods
        // VERY IMPORTANT
        complaint_history_input_element=this.complaint_history_input
        chief_complaint_element=this.chief_complaint_input
        bp_element=this.bp_input
        oxygensaturation_element=this.oxygensaturation_input
        temperature_element=this.temperature_input
        extra_oral_element=this.extra_oral_input
        intra_oral_element=this.intra_oral_input
        clinical_diagnosis_element=this.clinical_diagnosis_input
        diagnosis_element=this.diagnosis_input
        treatment_plan_element=this.treatment_plan_input
        treatment_element=this.treatment_input


    }

    handleClick(event){
        // show state when GoTo is pressed for Devolopment
        if(event.target.id ==='GoToButton') console.log(this.state)



        

        

        
        


    }

   
   
   
    //  button click for chief complaint section----------------------------
    handleClickChiefComplaint(event)
    {
        // when add button in chief complaint is pressed
        if(event.target.id ==='add_button_chief_Complaint')
        {
            console.log('pressed add button chief complaint')
            // if there are no chief complaints yet
            
            
            if(this.state.data.Chief_Complaint === null)
            {


                let entryone

                // using the refs to get value
                let chiefComplaint=chief_complaint_element.current.value
                let historyOfComplaint=complaint_history_input_element.current.value
                
                let date = todaysDate
                
                // taking the entry
                entryone=JSON.stringify(['1',date,chiefComplaint,historyOfComplaint])

                let data=this.state.data
                data.Chief_Complaint=entryone

                this.setState(prevState =>
                    {
                        return {...prevState,data}
                    })
            }

            // if there are chief complaints in there
            else{
                
                let entry

                // using refs to get value
                let chiefComplaint=chief_complaint_element.current.value
                let historyOfComplaint=complaint_history_input_element.current.value
                let date = todaysDate

                
                
                //creating the entry to unshift into chief complaint array
                
                // getting the data in state and editing it
                let data=this.state.data
                let oldEntries=eval(data.Chief_Complaint)

                entry=[parseInt(oldEntries.length+1),date,chiefComplaint,historyOfComplaint]

                // add the new entry to first position
                oldEntries.unshift(entry)
                
                data.Chief_Complaint=JSON.stringify(oldEntries)
               
                
                
                this.setState(prevState =>
                    {
                        return {...prevState,data:data}
                    })
                

                
                

            }




        }

        // when an entry's delete button is pressed
        else if(event.target.id === 'delete_button_chief_complaint')
        {
            // get the index of the delete buttton that fired
            let index=event.target.className
            // get the current entries
            let data=this.state.data

            // filter out the entries so we have only the remaining entries
            let entries=eval(data.Chief_Complaint)

            entries=entries.filter(item =>
                {
                    if(item[0] != index)
                    {
                        return item
                    }
                })
          
            // turn it back to string
            entries=JSON.stringify(entries)

            
            //add this to data
            data.Chief_Complaint=entries 
           
          
            // Now make this the new state
                this.setState(prevState =>
                {
                    return {...prevState,data:data}
                })
            

        }
    }


    //chief complaint section buttons are done ---------------------------------- 



    
    
    // general Examination click buttons start
    handleClickGeneralExamination(event)
    {
        // get value of inputs using refs
        

        // if add button is pressed
        if(event.target.id === 'general_examination_add_button')
        {

            // getting all 3 input field values
            let bp=bp_element.current.value
            let temperature=temperature_element.current.value
            let oxygensaturation=oxygensaturation_element.current.value

            // now add this into our state

            
            
            // if current state is empty
            if(this.state.data.General_Examination === null )
            {
                let data =this.state.data
                data.General_Examination =JSON.stringify([[1,todaysDate,bp,temperature,oxygensaturation]])

                this.setState(prevState =>
                    {
                        return {...prevState,data:data}
                    })
            }
            
            
            // if the state is non empty we have to add the entry to the first position
            else
            {

                let data=this.state.data
                let entries=eval(data.General_Examination)

                // putting current values to an array
                let currentEntry =[entries.length+1,todaysDate,bp,temperature,oxygensaturation]

                // now add this to first position in entries
                entries.unshift(currentEntry)
                
                // now change this to string
                entries=JSON.stringify(entries)

                // now add new propert to data object
                data.General_Examination=entries

                console.log(data)
                // now add this to state
                this.setState(prevState =>
                    {
                        return {...prevState,data:data}
                    })
                


            }
            
        }


        // if delete button of a general examination is pressed
        else if(event.target.id === 'delete_button_General_Examination')
        {   
            console.log('deete pressed')
            let data=this.state.data
            let entries=eval(data.General_Examination)
            let index=event.target.className

            entries=entries.filter(item =>
                {
                    if(item[0] != index)
                    {
                        return item
                    }
                })
            
            data.General_Examination=JSON.stringify(entries)

            this.setState(prevState =>
                
                {
                    return {...prevState,data:data}
                })

        }
    }

    // General Examination handleClicks done
    // -------------------------------------------------------------------------------------



    // Local Examination Handle CLicks Section start
    // --------------------------------------------------------------------------------------
    


    handleClickLocalExamination(event)
    {
        // if add button is pressed
        if(event.target.id === "add_button_local_examination")
        {
            // if there is no local examination yet
            if(this.state.data.Local_Examination === null)
            {
                let extraOralValue =extra_oral_element.current.value
                let intraOralValue=intra_oral_element.current.value

                let data=this.state.data

                let currentEntry = [[1,todaysDate,extraOralValue,intraOralValue]]
                data.Local_Examination=JSON.stringify(currentEntry)

                this.setState(prevState =>
                    {
                        return {...prevState,data:data}
                    })

            }

            // if there is existing local Examinations
            else
            {
                // get the values from input fields
                let extraOralValue =extra_oral_element.current.value
                let intraOralValue=intra_oral_element.current.value

                // get current entries
                let data=this.state.data

                let entries=eval(data.Local_Examination)
                let currentEntry = [entries.length+1,todaysDate,extraOralValue,intraOralValue]
                
                // add new entry to first position
                entries.unshift(currentEntry)

                // convert to string  and add to state
                data.Local_Examination=JSON.stringify(entries)

                this.setState(prevState =>
                    {
                        return {...prevState,data:data}
                    })
            }
        }

        // if delete is pressed
        else if(event.target.id === 'delete_button_local_examination')
        {
            
            let data=this.state.data
            let entries=eval(data.Local_Examination)
            let index=event.target.className

            entries=entries.filter(item =>
                {
                    if(item[0] != index)
                    {
                        return item
                    }
                })
            
            data.Local_Examination=JSON.stringify(entries)

            this.setState(prevState =>
                
                {
                    return {...prevState,data:data}
                })


        }

    }


    // Local Examination handleclicks is done
    // -------------------------------------------------------------------------
    // Clinical Diagnosis HandleClicks next

    handleClickClinicalDiagnosis(event)
    {
          // if add button is pressed
          if(event.target.id === "add_button_clinical_diagnosis")
          {
              // if there is no clinical Diagnosis yet
              if(this.state.data.Clinical_Diagnosis === null)
              {
                  let clinicalDiagnosisValue =clinical_diagnosis_element.current.value
                  
  
                  let data=this.state.data
  
                  let currentEntry = [[1,todaysDate,clinicalDiagnosisValue]]
                  data.Clinical_Diagnosis=JSON.stringify(currentEntry)
  
                  this.setState(prevState =>
                      {
                          return {...prevState,data:data}
                      })
  
              }
  
              // if there is existing clinical Diagnosis
              else
              {
                  // get the values from input fields
                  let clinicalDiagnosisValue =clinical_diagnosis_element.current.value
                  
  
                  // get current entries
                  let data=this.state.data
  
                  let entries=eval(data.Clinical_Diagnosis)
                  let currentEntry = [entries.length+1,todaysDate,clinicalDiagnosisValue]
                  
                  // add new entry to first position
                  entries.unshift(currentEntry)
  
                  // convert to string  and add to state
                  data.Clinical_Diagnosis=JSON.stringify(entries)
  
                  this.setState(prevState =>
                      {
                          return {...prevState,data:data}
                      })
              }
          }
  
          // if delete is pressed
          else if(event.target.id === 'delete_button_clinical_diagnosis')
          {
              let data=this.state.data
              let entries=eval(data.Clinical_Diagnosis)
              let index=event.target.className
  
              entries=entries.filter(item =>
                  {
                      if(item[0] != index)
                      {
                          return item
                      }
                  })
              
              data.Clinical_Diagnosis=JSON.stringify(entries)
  
              this.setState(prevState =>
                  
                  {
                      return {...prevState,data:data}
                  })
  
  
          }
  
    }

    // handleclicks for clinical diagnosis done
    // -----------------------------------------------------------------------

    // Diagnosis HandleClicks start
    // -----------------------------------------------------------------------

    handleClickDiagnosis(event)
    {
          // if add button is pressed
          if(event.target.id === "add_button_diagnosis")
          {
              // if there is no Diagnosis yet
              if(this.state.data.Diagnosis === null)
              {
                  let diagnosisValue =diagnosis_element.current.value
                  
  
                  let data=this.state.data
  
                  let currentEntry = [[1,todaysDate,diagnosisValue]]
                  data.Diagnosis=JSON.stringify(currentEntry)
  
                  this.setState(prevState =>
                      {
                          return {...prevState,data:data}
                      })
  
              }
  
              // if there is existing Diagnosis
              else
              {
                  // get the values from input fields
                  let diagnosisValue =diagnosis_element.current.value
                  
  
                  // get current entries
                  let data=this.state.data
  
                  let entries=eval(data.Diagnosis)
                  let currentEntry = [entries.length+1,todaysDate,diagnosisValue]
                  
                  // add new entry to first position
                  entries.unshift(currentEntry)
  
                  // convert to string  and add to state
                  data.Diagnosis=JSON.stringify(entries)
  
                  this.setState(prevState =>
                      {
                          return {...prevState,data:data}
                      })
              }
          }
  
          // if delete is pressed
          else if(event.target.id === 'delete_button_diagnosis')
          {
              let data=this.state.data
              let entries=eval(data.Diagnosis)
              let index=event.target.className
  
              entries=entries.filter(item =>
                  {
                      if(item[0] != index)
                      {
                          return item
                      }
                  })
              
              data.Diagnosis=JSON.stringify(entries)
  
              this.setState(prevState =>
                  
                  {
                      return {...prevState,data:data}
                  })
  
  
          }
  
    }



    // diagnosis handleCLicks Done
    // -----------------------------------------------------------------------------

    // handleClicks for treatment Plan ---------------------------------------------

    handleClickTreatmentPlan(event)
    {
        // if add button is pressed
        if(event.target.id === "add_button_treatment_plan")
        {
            // if there is no treatment plan yet
            if(this.state.data.Treatment_Plan === null)
            {
                let treatmentPlanValue =treatment_plan_element.current.value
                let treatmentValue=treatment_element.current.value

                let data=this.state.data

                let currentEntry = [[1,todaysDate,treatmentPlanValue,treatmentValue]]
                data.Treatment_Plan=JSON.stringify(currentEntry)

                this.setState(prevState =>
                    {
                        return {...prevState,data:data}
                    })

            }

            // if there is existing Treatment Plans
            else
            {
                // get the values from input fields
                let treatmentPlanValue =treatment_plan_element.current.value
                let treatmentValue=treatment_element.current.value

                // get current entries
                let data=this.state.data

                let entries=eval(data.Treatment_Plan)
                let currentEntry = [entries.length+1,todaysDate,treatmentPlanValue,treatmentValue]
                
                // add new entry to first position
                entries.unshift(currentEntry)

                // convert to string  and add to state
                data.Treatment_Plan=JSON.stringify(entries)

                this.setState(prevState =>
                    {
                        return {...prevState,data:data}
                    })
            }
        }

        // if delete is pressed
        else if(event.target.id === 'delete_button_treatment_plan')
        {
            
            let data=this.state.data
            let entries=eval(data.Treatment_Plan)
            let index=event.target.className

            entries=entries.filter(item =>
                {
                    if(item[0] != index)
                    {
                        return item
                    }
                })
            
            data.Treatment_Plan=JSON.stringify(entries)

            this.setState(prevState =>
                
                {
                    return {...prevState,data:data}
                })


        }

    }


    // Handleclicks for Treatment plan done ----------------------------------------



    // handleChange for textAreas

    handleChangeTextAreas(event)
    {
        // change their respective dataarea in state to current input

        // get the current data state
        let data=this.state.data

        // now change this datastate with the entry that was edited
        let currentEntry= event.target.id
        let currentValue=event.target.value

        // adding the newly added data into the data property
        data[currentEntry]=currentValue

        this.setState(prevState =>
            {
                return {...prevState,data:data}
            })
        
    }

    // textareas sections done -----------------------------------------------------------------------






    render()
    {
        

       
        //function to render each Components



        //chief Complaint Component rendering Section
        let ChiefComplaints=() =>
        {   
            // if there is no chief complaint yet
                if(this.state.data.Chief_Complaint === null)
                {

                   
                    return(
                        <div className='dataarea'>

                            <div className='input_entry'>
                            <div className='labels'>
                                <p>Complaint:</p>
                                <p>H/O Complaint:</p>

                            </div>
                            <div className='input_rows'>
                                <input placeholder='Complaint' id='chief_complaint_input' ref={this.chief_complaint_input} ></input>
                                <input placeholder='History of This Complaint' id='history_of_complaint_input' ref={this.complaint_history_input}></input>

                            </div>
                            <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div className="add_button">
                                <button id='add_button_chief_Complaint' onclick={this.handleClickChiefComplaint}>Add</button>

                            </div>
                            <div>

                            </div>

                        </div>


                        </div>
                    )

                }

                else
                {
                     // first Make a temporary variable hold all the already entered Components
                    let tempChiefComplaints= () =>
                    {

                        
                        let complaints=eval(this.state.data.Chief_Complaint)
                        return complaints=complaints.map(item =>
                            {
                                return (
                                    <ChiefComplaint key={item[0]} index={item[0]} date={item[1]} chiefComplaint={item[2]} 
                                        historyOfComplaint={item[3]} handleClickChiefComplaint={this.handleClickChiefComplaint} />
                                )
                            })
                        
                    }
                    return (

                        <div className='dataarea'>

                            <div className='input_entry'>
                            <div className='labels'>
                                <p>Complaint:</p>
                                <p>H/O Complaint:</p>

                            </div>
                            <div className='input_rows'>
                                <input placeholder='Complaint' className='chief_complaint' ref={this.chief_complaint_input}></input>
                                <input placeholder='History of This Complaint' className='history_of_complaint' ref={this.complaint_history_input}></input>

                            </div>
                            <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div>
                            <div className="add_button">
                                <button id='add_button_chief_Complaint' onClick={this.handleClickChiefComplaint}>Add</button>

                            </div>
                            <div>

                            </div>

                        </div>
                        
                            {tempChiefComplaints()}

                        </div>
                    )
                    
                }
        }

        // chief complaint Section Rendering Done -----------------------

        // Starting General Examination Rendering Section   -----------------------

        let generalExaminations = () =>
        {
            // if there is no General Examination Yet
            if(this.state.data.General_Examination === null)
            {
                return (
                    <div className='dataarea'>
                            <div className='single_input'>
                                <div><input id='bp' placeholder="BP" ref={this.bp_input}></input></div>
                                <div><input id='temperature' placeholder="Temperature" ref={this.temperature_input}></input></div>
                                <div><input id='o2_saturation' placeholder="O2" ref={this.oxygensaturation_input}></input></div>
                                <div><button id='general_examination_add_button' onClick={this.handleClickGeneralExamination}>Add</button></div>
                            </div>
                            <div className='labels'>
                                <p>BP</p>
                                <p>Temperature</p>
                                <p>Oxygen Saturation</p>
                                <p>Date Of Entry</p>

                            </div>
                            
                            
                            

                        </div>

                )
            }
            // if there is existing general examination entries
            else{
                // temperoray variable for storing internal input entries before passing them
                // to parent div dataarea
                let tempGeneralExaminations= () =>
                {
                    // convert the string of general examinations into array of arrays
                    let generalExamination = eval(this.state.data.General_Examination)
                  

                    return generalExamination.map(item =>
                        {
                            return(
                                <GeneralExamination key={item[0]} index={item[0]} date={item[1]}
                                bp={item[2]} temperature={item[3]} oxygensaturation={item[4]} handleClickGeneralExamination={this.handleClickGeneralExamination}/>
                            )
                        })


                }

                return (

                    <div className='dataarea'>
                            <div className='single_input'>
                                <div><input id='bp' placeholder="BP" ref={this.bp_input}></input></div>
                                <div><input id='temperature' placeholder="Temperature" ref={this.temperature_input}></input></div>
                                <div><input id='o2_saturation' placeholder="O2" ref={this.oxygensaturation_input}></input></div>
                                <div><button id='general_examination_add_button' onClick={this.handleClickGeneralExamination}>Add</button></div>
                            </div>
                            <div className='labels'>
                                <p>BP</p>
                                <p>Temperature</p>
                                <p>Oxygen Saturation</p>
                                <p>Date Of Entry</p>

                            </div>
                            
                            {tempGeneralExaminations()}
                            

                        </div>

                )

            }
        }

        // General Examinations Sections Rendering Done
        // --------------------------



        // Starting Local Examination Rendering Section --------------------------------------

        let localExaminations = () =>
        {
            // when the state is null ie ; no examinations yet
            if(this.state.data.Local_Examination === null)
            {
                return (
                    <div className='dataarea'>
                        <div className='input_entry'>
                            <div className='labels'>
                                <p>Extra Oral:</p>
                                <p>Intra Oral:</p>

                            </div>
                            <div className='input_rows'>
                                <input placeholder='Extra Oral' className='input_extraoral' ref={this.extra_oral_input}></input>
                                <input placeholder='Intra Oral' className='input_intraoral' ref={this.intra_oral_input}></input>

                            </div>
                            
                            <div className="add_button">
                                <button id='add_button_local_examination' onClick={this.handleClickLocalExamination}>Add</button>

                            </div>
                            <div>

                            </div>

                        </div>

                     

                    </div>
                )
            }

            // if there is existing local examinations in state
            else
            {
                // get the current local examinations
                let tempLocalExaminations= () =>
                {
                    let localExaminations= eval(this.state.data.Local_Examination)

                    return localExaminations.map(item =>
                        {
                            return (
                                <LocalExamination key={item[0]} index={item[0]} date={item[1]}
                                extraoral ={item[2]} intraoral={item[3]} 
                                handleClickLocalExamination={this.handleClickLocalExamination}/>
                            )
                        })
                }

                return(
                    <div className='dataarea'>
                        <div className='input_entry'>
                            <div className='labels'>
                                <p>Extra Oral:</p>
                                <p>Intra Oral:</p>

                            </div>
                            <div className='input_rows'>
                                <input placeholder='Extra Oral' className='input_extraoral' ref={this.extra_oral_input}></input>
                                <input placeholder='Intra Oral' className='input_intraoral' ref={this.intra_oral_input}></input>

                            </div>
                            
                            <div className="add_button">
                                <button id='add_button_local_examination' onClick={this.handleClickLocalExamination}>Add</button>

                            </div>
                            

                        </div>
                        {tempLocalExaminations()}

                     

                    </div>
                )

            }
        }
        
        // local examination Rendering done -----------------------------------------------------
        





        // Starting clinical diagnosis Rendering Section
        let clinicalDiagnosis = () =>
        {
            if(this.state.data.Clinical_Diagnosis === null)
            {
                return (
                    <div className='dataarea'>
                    <div className='input_entry'>
                            <div className='labels'>
                                <p>New:</p>

                            </div>
                            <div className='input_rows'>
                                <input placeholder='Add Clinical Diagnosis' ref={this.clinical_diagnosis_input}></input>

                            </div>
                            {/* <div className='date'>
                                <p>{todaysDate}</p>

                            </div> */}
                            <div className="add_button">
                                <button id='add_button_clinical_diagnosis' 
                                onClick={this.handleClickClinicalDiagnosis}>Add</button>

                            </div>
                            

                        </div>
                </div>
                        


                        

                )
            }
            // if there is existing clinical Diagnosis in state.data.Clinical_Diagnosis
            else
            {
                // temporarily store the existing diagnosis before adding to data area
                let tempClinicalDiagnosis= () =>
                {
                    let clinicalDiagnosis=eval(this.state.data.Clinical_Diagnosis)

                    return clinicalDiagnosis.map(item =>
                       {
                           return (
                               <ClinicalDiagnosis  key={item[0]} index={item[0]} date={item[1]}
                               handleClickClinicalDiagnosis={this.handleClickClinicalDiagnosis}
                               clinicaldiagnosis={item[2]}/>
                           )
                       } 
                    )
                }

                return(
                    <div className='dataarea'>
                    <div className='input_entry'>
                            <div className='labels'>
                                <p>New:</p>

                            </div>
                            <div className='input_rows'>
                                <input placeholder='Add Clinical Diagnosis' ref={this.clinical_diagnosis_input}></input>

                            </div>
                            {/* <div className='date'>
                                <p>{todaysDate}</p>

                            </div> */}
                            <div className="add_button">
                                <button id='add_button_clinical_diagnosis' 
                                onClick={this.handleClickClinicalDiagnosis}>Add</button>

                            </div>
                            

                        </div>

                        {tempClinicalDiagnosis()}
                </div>
                )

            }
        }

        // clinicalDiagnosis rendering done -------------------------------------------
        
        // Starting Diagnosis Rendering Section ---------------------------------------

        let diagnosis = () =>
        {
            if(this.state.data.Diagnosis === null)
            {
                return (
                    <div className='dataarea'>
                    <div className='input_entry'>
                            <div className='labels'>
                                <p>New:</p>

                            </div>
                            <div className='input_rows'>
                                <input placeholder='Add Diagnosis' ref={this.diagnosis_input}></input>

                            </div>
                            {/* <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div> */}
                            <div className="add_button">
                                <button id='add_button_diagnosis' 
                                onClick={this.handleClickDiagnosis}>Add</button>

                            </div>
                            

                        </div>

                </div>
                        


                        

                )
            }
            // if there is existing  Diagnosis in state.data.Diagnosis
            else
            {
                // temporarily store the existing diagnosis before adding to data area
                let tempDiagnosis= () =>
                {
                    let diagnosislist=eval(this.state.data.Diagnosis)

                    return diagnosislist.map(item =>
                       {
                           return (
                               <Diagnosis  key={item[0]} index={item[0]} date={item[1]}
                               handleClickDiagnosis={this.handleClickDiagnosis}
                               diagnosis={item[2]}/>
                           )
                       } 
                    )
                }

                return(
                    <div className='dataarea'>
                    <div className='input_entry'>
                            <div className='labels'>
                                <p>New:</p>

                            </div>
                            <div className='input_rows'>
                                <input placeholder='Add Diagnosis' ref={this.diagnosis_input}></input>

                            </div>
                            {/* <div className='date'>
                                <p>xx/xx/xxxx</p>

                            </div> */}
                            <div className="add_button">
                                <button id='add_button_diagnosis' 
                                onClick={this.handleClickDiagnosis}>Add</button>

                            </div>
                            

                        </div>
                            {tempDiagnosis()}
                </div>
                )

            }
        }

        // Diagnosis Rendering Section Done------------------------------------------


        // starting treatment plan rendering section --------------------------------

        let TreatmentPlanRender=() =>
        {   
            // if there is no Treatment plan yet yet
                if(this.state.data.Treatment_Plan === null)
                {

                   
                    return(
                        <div className='dataarea'>
                    <div className='input_entry'>
                        <div className='labels'>
                            <p>Treatment Plan:</p>
                            <p>Treatment:</p>
                            

                        </div>
                        <div className='input_rows'>
                            <input placeholder='Treatment Plan' className='input_treatment_plan' 
                            ref={this.treatment_plan_input}></input>
                            <input placeholder='Treatment' className='input_treatment'
                            ref={this.treatment_input}></input>

                        </div>
                        {/* <div className='date'>
                            <p>xx/xx/xxxx</p>

                        </div> */}
                        <div className="add_button">
                            <button id='add_button_treatment_plan'
                            onClick={this.handleClickTreatmentPlan}>Add</button>

                        </div>
                        <div>

                        </div>

                    </div>

                    

                </div>
                    )

                }

                else
                {
                     // first Make a temporary variable hold all the already entered Components
                    let tempTreatmentPlan= () =>
                    {

                        
                        let treatmentplans=eval(this.state.data.Treatment_Plan)
                        return treatmentplans=treatmentplans.map(item =>
                            {
                                return (
                                    <TreatmentPlan key={item[0]} index={item[0]} date={item[1]} treatmentplan={item[2]} 
                                        treatment={item[3]} handleClickTreatmentPlan={this.handleClickTreatmentPlan} />
                                )
                            })
                        
                    }
                    return (

                        <div className='dataarea'>
                        <div className='input_entry'>
                            <div className='labels'>
                                <p>Treatment Plan:</p>
                                <p>Treatment:</p>
                                
    
                            </div>
                            <div className='input_rows'>
                                <input placeholder='Treatment Plan' className='input_treatment_plan' 
                                ref={this.treatment_plan_input}></input>
                                <input placeholder='Treatment' className='input_treatment'
                                ref={this.treatment_input}></input>
    
                            </div>
                            {/* <div className='date'>
                                <p>xx/xx/xxxx</p>
    
                            </div> */}
                            <div className="add_button">
                                <button id='add_button_treatment_plan'
                                onClick={this.handleClickTreatmentPlan}>Add</button>
    
                            </div>
                            <div>
    
                            </div>
    
                        </div>
                        {tempTreatmentPlan()}
    
                        
    
                    </div>
                    )
                    
                }
        }


        // treatment plan rendering section done


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
                    {ChiefComplaints()}

                

                </div>



                    {/* <!-- chief complaints done --> */}




                    {/* <!-- past medical history section --> */}
                
                <div id='past_medical_history'>
                    <div className='label'>
                    <h2>Past medical History:</h2>
                    </div>
                    <div className='dataarea'>
                    <textarea id='Past_Medical_History' placeholder="No Past medical History Yet" onChange={this.handleChangeTextAreas}></textarea>
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
                        <textarea id="Past_Dental_History" placeholder="No Past Dental History" onChange={this.handleChangeTextAreas}></textarea>
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
                            <textarea id='Drug_Allergy' placeholder="No Drug Allergies Found Yet" onChange={this.handleChangeTextAreas}></textarea>
                            </div>
                        </div>


                    </div>

                    {/* <!-- drug allergy sectiion Completed --> */}



                    {/* <!-- General Examination Section --> */}

                    <div id='general_examination'>
                        <div className='label'>
                            <h2>General Examination:</h2>

                        </div>
                        
                        {generalExaminations()}

                    </div>


                    {/* <!-- General Examination Done --> */}

                    {/* <!-- Starting Local Examination --> */}

                <div id='local_examination'>
                    <div className='label'>
                        <h2>Local Examination:</h2>

                    </div>
                            {localExaminations()}

                </div>





                {/* <!-- local Examination Section DONE --> */}




                {/* <!-- STARTING Clinical Diagnosis --> */}


                

           <div id='clinical_diagnosis'>
                <div className='label'>
                    <h2>Clinical Diagnosis:</h2>

                </div>
                {clinicalDiagnosis()}
                

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
                {diagnosis()}
                

            </div>






            {/* <!-- diagnosis section end --> */}

            {/* <!-- starting Treatment Plan  --> */}

            <div id='treatment_plan'>
                <div className='label'>
                    <h2>Treatment Plan:</h2>

                </div>
                {TreatmentPlanRender()}

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
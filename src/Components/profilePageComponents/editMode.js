import React from 'react'

import Webcam from 'react-webcam'

class EditMode extends React.Component{
    constructor(props)
    {
        super()
        this.state={loaded:false}

        // custom functions
        this.handleChange=this.handleChange.bind(this)
    }

    componentDidMount()
    {
        // add the passed on value from props to data
        this.setState(prevState =>
            {
                return {...prevState,data:this.props.data,loaded:true}
            })
        
        
            //Decide if we want to start in capture mode or not
        
        let image=this.props.data['Image']

        if(image !== null && image !== '' && image !== "null")
        {
            this.setState(prevState =>
                {
                    return {...prevState,captureMode:false}
                })
        }
        else
        {
            this.setState(prevState =>
                {
                    return {...prevState,captureMode:true}
                })
        }
        

        
    }

    // handleChange for dataFields
    handleChange(event)
    {
        // Change the current data property in state when any input fields are changed
        let {id,value} =event.target
        let editedData=this.state['data']

        editedData[id]=value
        this.setState(prevState=>
            {
                return{...prevState,data:editedData}
            })


        
        

    }

    render()
    {
         // Render the various data fields

         let dataFieldsRender =() =>
         {
            if(this.state.loaded)
            {
            let data=this.state.data
            console.log(data)
            let holdTheRenderedArray=[]
            let keys=Object.keys(data)

            // render according to which datafield it is
            keys.forEach(item =>
                {
                    // tries to render everything except for Image Property
                    if(item !== 'Image')
                    {
                        // Render the select options first since they have to be specific
                        if(item === 'Gender')
                        {
                            let valueIfSelected = data['Gender'] ? data['Gender'] : "Not Selected"
                            
                            holdTheRenderedArray.push(
                                <div className='data_field'>
                                        <label for='Gender'>Gender :</label>
                                        <select id="Gender" name="Gender" onChange={this.handleChange} value={valueIfSelected}>
                                        <option value="Not Selected" 
                                        >Not Selected</option>  
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                        
                                        </select>
                    
                                 </div>
                            )
                        }

                        else if(item === 'Blood_Group')
                        {
                            let valueIfSelected =data['Blood_Group'] ? data['Blood_Group'] : 'Not Selected'

                            holdTheRenderedArray.push(
                                <div className='data_field'>
                                        <label for='Blood_Group'>Blood Group:</label>
                                        <select id="Blood_Group" name="Blood_Group" onChange={this.handleChange} value={valueIfSelected}>
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
                            )
                        }

                        else if(item === 'Marital_Status')
                        {
                            let valueIfSelected = data[item] ? data[item] : "Not Selected"

                            holdTheRenderedArray.push(
                                <div className='data_field'>
                                    <label for='Marital_Status'>Marital Status:</label>
                                    <select id="Marital_Status" name="Marital_Status" onChange={this.handleChange} value={valueIfSelected}>
                                    <option value="Not Selected">Not Selected</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                    </select>
                
                                </div>
                            )
                        }

                        else if(item === 'DOB')
                        {
                            let valueIfSelected =data[item] ? data[item] : ''

                            holdTheRenderedArray.push(
                                <div className='data_field'>
                                    <label for='DOB'>Date of Birth:</label>
                                    <input id ='DOB' type='date' onChange={this.handleChange} defaultValue={valueIfSelected}></input>
                                </div>
                            )
                        }

                        else if(item ==='Address')
                        {
                            let valueIfSelected=data[item] ? data[item] : ''

                            holdTheRenderedArray.push(
                                 <div className='data_field'>
                                    <label for='Address'>Address:</label>
                                    <textarea id='Address' onChange={this.handleChange}
                                    defaultValue={valueIfSelected}></textarea>
                                </div>
                            )
                        }
                        // rest simple data fields
                        else
                        {
                            let valueIfSelected= data[item] ? data[item] : ''
                            let itemNameWithoutUnderScore =item.replaceAll('_'," ")

                            holdTheRenderedArray.push(
                                <div className='data_field'>
                                    <label for={item}>{itemNameWithoutUnderScore} :</label>
                                    <input id ={item}  type='text' onChange={this.handleChange} defaultValue={valueIfSelected}
                                    ></input>
                                </div>
                            )
                        }


                    }

                    


                })
            
            // Finally return the array holding all the datafields
            return (holdTheRenderedArray)

            }

         }

        let imageFieldRender =() =>
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
            <div id='mainContainerEditMode'>
                {/* contain the image */}
                <div id='imageContainerEditMode'>
                        {imageFieldRender()}
                </div>
                <div id='contentContainer'>
                    {/* contents contains the data fields */}
                    <div id='contents'>
                            {dataFieldsRender()}
                    </div>
                </div>

            </div>
        )
    }
}



export default EditMode
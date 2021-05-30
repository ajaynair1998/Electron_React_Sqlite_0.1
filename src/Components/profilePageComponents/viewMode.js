import React,{Component} from 'react'

class ViewMode extends Component{
    constructor(props)
    {
        super()
        this.state ={loaded:false}

    }

    componentDidMount()
    {
        console.log(this.props)
        // DO nothing
        this.setState(prevState =>
            {
                return {...prevState,loaded:true,data:this.props.data}
            })
    }

    render()
    {
        // Render data fields only if there is any data in them
        let dataFieldsRender =() =>
        {
            if(this.state.loaded === true)
            {

            
            let allData=this.state.data
            
            let holdTheRenderedArray=[]
            
            // temp key for iterating the DAtafield component
            let tempKey=0
            
            // render the data fields only if there are any values in them else dont render them
            for (let key of Object.keys(allData))
            {
                let value=allData[key]
                console.log(key)
                
                if (value !== null && value !== "" && key !== "Image")
                {
                    // remove the underscore
                    key=key.replaceAll('_'," ")    
                    
                    holdTheRenderedArray.push(
                        <DataField key={tempKey} id={key}  value={value} />
                    )
                }
                tempKey++
            }
            console.log(this.props.data)

            return (holdTheRenderedArray)
        }
        }

        let imageFieldRender=() =>
        {
            if(this.state.loaded ===true)
            {
                let image=this.state.data.Image

                // Renders the image only if state contains image
                if(image !== null && image !== '' && image !== undefined && image !== 'null')
                {
                    return (
                        <div id='Image_and_Comment' className='data_field'>
                    <img src={image}  id='avatar'></img>
                    <h3>Profile Picture</h3>
                      

                    </div>
                    )
                }
                // else this component will just render no Image
                else
                {
                    return(
                    
                    <div id='Image_and_Comment' className='data_field'>
                    <h3   id='avatar'>No Profile Picture </h3>
                    </div>
                      


                    )
                }
            }
        }






        return(
            <div id='mainContainerViewMode'>
                {/* contain the image */}
                <div id='imageContainerViewMode'>
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

function DataField(props)
{
    return(
        <div className='data_field'>
                        <h3><label for={props.id}>{props.id}</label></h3>
                        <p id={props.id}>{props.value}</p>
        </div>  
    )
}

export default ViewMode
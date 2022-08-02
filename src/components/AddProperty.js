import React from "react";
import "../styles/add-property.css";
import { useState } from "react";

const AddProperty = () =>{
    const intialState = {
        title:"",
        city:"Manchester"
    }
    const [fields, setFields] = useState(intialState.fields)
    const handleAddProperty = (event) =>{
        event.preventDefault();
        console.log(fields);

    }

        const handleFieldChange = (event) => {
            const changedField = event.target.name;
            const newValue = event.target.value;
            setFields({ ...fields, [changedField]: newValue });
          };


    return(
<div className="add-property"> 
        <form onSubmit={handleAddProperty}>
        <label htmlFor="title">  </label>
            <input id="title" name="title" value={fields.title} onChange={handleFieldChange}>
            </input>
          
            <button type= "submit" >Add</button>
            
                <label html="city"></label>
                <select id="city" name="city" value={fields.city} onChange={handleFieldChange}>
                    <option value="Manchester"> Manchester</option>
                    <option value="Leeds"> Leeds</option>
                    <option value="Sheffield"> Sheffield</option>
                    <option value="Liverpool"> Liverpool</option>
                </select>     
                
         

        </form>



</div>
    );
};

export default AddProperty
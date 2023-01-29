import React from 'react'

const ShowScreen = () => {
    return (
        <div>
            Show Screen
            initialValues={{

            }}
            onSubmit={({ values }) => {
                console.log(values)
            }}
            {({ handleChange, handleSubmit, values }) => { 
                  <select name="country" value={values.country} onChange={handleChange} >
                  <option value="tr" >Turkey</option>
                  <option value="en" >England</option>
                  <option value="usa" >Usa</option>
              </select>

            }}

          
        </div>


    )
}

export default ShowScreen


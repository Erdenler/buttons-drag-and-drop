import React from 'react'

function Register() {
    return (
        <div className='Register'>
            <Formik
                initialValues={{
                    firstName: '',
                    gender: '',
                    country: ''

                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({ handleSubmit, handleChange }) => (
                    <form onSubmit={handleSubmit}>
                        <label className='firstName'> First Name</label>
                        <input

                            value={values.firstName}>
                            onChange={handleChange}

                        </input>
                        <input
                            type="radio"
                            name='gender'
                            value="male"
                            onChange={handleChange}
                            checked={values.gender === "male"}
                        ></input>
                        <select name='country' onChange={handleChange} value={values.country} >
                            <option value="tr">Türkiye</option>
                            <option value="en" >İngiltere</option>
                            <option value="usa" >Amerika</option>
                        </select>
                    </form>
                )}
            </Formik>

        </div>
    )
}

export default Register
className = 'Register'


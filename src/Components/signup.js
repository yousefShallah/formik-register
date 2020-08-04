import React from 'react';
import { Formik } from 'formik';

const required = <span className="required"> Required </span>

const Signup = () =>{
    return(
        <div className="continer">
            <h1>SIGNUP</h1>
            <Formik
                initialValues={{ name: '', email: '', password: '', phone: 0 }}
                validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = required;
                }else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                console.log("values", values);
                }}
            >
                {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
                
                }) => (
                <form className="form-continer" onSubmit={handleSubmit}>
                    <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Your name"
                    />
                    <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Email"
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Password"
                    />
                    <input
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    placeholder="phone number"
                    />
                    {errors.password && touched.password && errors.password}
                    <button type="submit">
                        SIGNUP
                    </button>
                </form>
                )}
            </Formik>
            <div className="signup-continer-link">
                <a href="/login"> Login </a>
            </div>
        </div>
    )
}

export default Signup;
import React from 'react';
import { Formik } from 'formik';
import './index.css';
const Login = () => {
    const required = <span className="required"> Required </span>

    return(
        <div className="continer">
          <h1>LOGIN</h1>
          <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
              const errors = {};
              if (!values.email) {
                errors.email = required;
              } else if (
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
                {errors.password && touched.password && errors.password}
                <button type="submit" disabled={isSubmitting}>
                  LOGIN
                </button>
              </form>
            )}
          </Formik>
          <div className="signup-continer-link">
              <a href="/signup"> Signup </a>
          </div>
        </div>
    )
}

export default Login;
import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const Adduser = () => (
    <div className='container mt-2 border d-flex justify-content-center align-items-center flex-column p-3'>
        <h1>Add User</h1>
        <Formik
            initialValues={{ name: '', email: '', password: '', contact: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.name) {
                    errors.name = 'Required';
                }
                if (!values.password) {
                    errors.password = 'Required';
                }
                if (!values.contact) {
                    errors.contact = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    axios.post("https://6714af1c690bf212c76213fb.mockapi.io/api/v1/users", values).then(res=> {
                        console.log(res)
                        Navigate("/users")
                    }).catch(err => console.log(err))
                    setSubmitting(false);
                }, 400);
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
                <form className='d-flex justify-content-center align-items-center flex-column' onSubmit={handleSubmit}>
                    <input className='mt-3 form-control'
                        type="text"
                        name="name"
                        placeholder='name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    <span className='text-danger'>{errors.name && touched.name && errors.name}</span>
                    <input className='mt-3 form-control'
                        type="email"
                        name="email"
                        placeholder='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    <span className='text-danger'>{errors.email && touched.email && errors.email}</span>
                    <input className='mt-3 form-control'
                        type="password"
                        name="password"
                        placeholder='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    <span className='text-danger'>{errors.password && touched.password && errors.password}</span>
                    <input className='mt-3 form-control'
                        type="number"
                        name="contact"
                        placeholder='contact'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    <span className='text-danger'>{errors.contact && touched.contact && errors.contact}</span>
                    <button className='btn btn-primary mt-3' type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    </div>
);

export default Adduser;
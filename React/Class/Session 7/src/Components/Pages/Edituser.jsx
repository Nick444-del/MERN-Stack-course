import React, { useEffect } from 'react'
import { Formik } from 'formik';
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edituser = () => {
    const { userid } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get('https://6714af1c690bf212c76213fb.mockapi.io/api/v1/users' + userid).then(res => {
            setUser(res.data)
        })
            .catch(err => console.log(err))
    }, [userid])
    return (
        <Container>
            <Row>
                <Col md={5}>
                    <Card className="p-4 m-5">
                        <h3>Edit User</h3>
                        <Formik
                            initialValues={{ name: user.name, email: user.email, password: user.password, contact: user.contact }}
                            enableReinitialize={true}
                            validate={(values) => {
                                const errors = {};
                                if (!values.name) {
                                    errors.name = "Name is required";
                                }
                                if (!values.email) {
                                    errors.email = "Email is required";
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = "Invalid email address";
                                }

                                if (!values.password) {
                                    errors.password = "Password is required";
                                }
                                if (!values.contact) {
                                    errors.contact = "Contact is required";
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    // update user api call
                                    axios.put("https://6714af1a690bf212c76213ee.mockapi.io/api/v1/users/" + userid, values)
                                        .then(res => {
                                            console.log(res)
                                            navigate("/users")
                                        })
                                        .catch(err => console.log(err))
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
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="name"
                                            className="form-control mt-3"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                        <span style={{ color: "red" }}>
                                            {errors.name && touched.name && errors.name}
                                        </span>
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="email"
                                            className="form-control mt-3"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        <span style={{ color: "red" }}>
                                            {errors.email && touched.email && errors.email}
                                        </span>
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="password"
                                            className="form-control mt-3"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                        <span style={{ color: "red" }}>
                                            {errors.password && touched.password && errors.password}
                                        </span>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="contact"
                                            placeholder="contact"
                                            className="form-control mt-3"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.contact}
                                        />
                                        <span style={{ color: "red" }}>
                                            {errors.contact && touched.contact && errors.contact}
                                        </span>
                                    </div>
                                    <div className="mt-3">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={isSubmitting}
                                        >
                                            Update
                                        </button>
                                    </div>
                                </form>
                            )}
                        </Formik>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Edituser
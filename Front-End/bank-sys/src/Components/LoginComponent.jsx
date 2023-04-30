import { Field, Form, Formik } from "formik";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import HeaderComponent from "./HeaderComponent";
import * as Yup from "yup";

export default function LoginComponent() {

    const customerId = null
    const password = null

    const schema = Yup.object().shape({
        email: Yup.string()
            .required("Email is a required field")
            .email("Invalid email format"),
        password: Yup.string()
            .required("Password is a required field")
            .min(8, "Password must be at least 8 characters"),
    });

    const AuthContext = useAuth()
    const login = AuthContext.login
    const isAuthenticated = AuthContext.isAuthenticated
    const navigate = useNavigate()

    const [errormsg, setErrormsg] = useState(false)

    function onSubmit(values) {
        const credentials = {
            id: null,
            customerId: values.customerId,
            password: values.password,
        }

        login(credentials)

        // if (isAuthenticated) {
        //     navigate(`/user/${values.customerId}/account`)
        // }

        // // console.log(customerId);
        // else {

        //     setErrormsg(true)
        //     navigate("/")
        // }

    }

    function goToSignup() {
        navigate("/signup")
    }

    return (
        <div className="container">
            <HeaderComponent />
            <br />
            <br />
            <br />
            <Formik
                initialValues={{ customerId, password }}
                enableReinitialize={true}
                onSubmit={onSubmit}
            >
                {
                    (props) => (
                        <Form>
                            {
                                errormsg && <div className="alert alert-warning">Customer Id or Password wrong</div>
                            }
                            <fieldset className="form-group m-2">
                                <label>Customer Id : </label>
                                <Field type="number" name="customerId" className="form-contol"></Field>
                            </fieldset>
                            <fieldset className="form-group m-2">
                                <label>Password : </label>
                                <Field type="password" name="password" className="form-contol"></Field>
                            </fieldset>
                            <div>
                                <button type="submit" className="btn btn-success mt-3" >login</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
            <br />
            <br />
            <button onClick={goToSignup} className="btn-success btn">Sign Up</button>
        </div>
    )
}
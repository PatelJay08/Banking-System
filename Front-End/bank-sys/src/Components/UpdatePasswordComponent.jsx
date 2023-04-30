import { Field, Form, Formik } from "formik";
import { useAuth } from "./security/AuthContext";
import HeaderComponent from "./HeaderComponent";
import { updateCredentials } from "./Api/ApiService";
import { useNavigate } from "react-router-dom";


export default function UpdatePasswordComponent(){

    const navigate = useNavigate()
    const AuthContext = useAuth()
    const customerId = AuthContext.customerId
    const password = null
    const passwordNew = null

    function onSubmit(values){
        const obj = {
            password:values.password,  
            passwordNew:values.passwordNew,
        }
        // console.log(obj);
        updateCredentials(customerId,obj)
        .then(
            response => {
                // console.log(response);
                navigate(`/user/${customerId}/account`)
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )

    }

    return(
        <>
             <div>
            <HeaderComponent />
            <Formik
                initialValues={{password,passwordNew }}
                enableReinitialize={true}
                onSubmit={onSubmit}
            >
                {
                    (props) => (
                        <Form>
                            <fieldset className="form-group m-2">
                                <label>Password Old: </label>
                                <Field type="text" name="password" className="form-contol"></Field>
                            </fieldset>
                            <fieldset className="form-group m-2">
                                <label>Password New : </label>
                                <Field type="text" name="passwordNew" className="form-contol"></Field>
                            </fieldset>
                            <div>
                                <button type="submit" className="btn btn-success mt-3" >Change</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
        </>
    )
}
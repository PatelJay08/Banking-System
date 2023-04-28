import { Field, Form, Formik } from "formik";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
    
    const customerId = 15001
    const password = 'Jay'


    const AuthContext = useAuth()
    const login = AuthContext.login
    const navigate = useNavigate()

    function onSubmit(values){
        if(login(values.customerId,values.password)){
            navigate(`/user/${values.customerId}/account`)
            // console.log(customerId);
        }
        else{
            navigate("/")
        }
    }

    return(
        <div>
            <Formik 
            initialValues={{customerId, password}}
            enableReinitialize={true}
            onSubmit={onSubmit}
            >
                {
                    (props) => (
                        <Form>
                            <fieldset className="form-group m-2">
                                <label>Customer Id : </label>
                                <Field type="number" name="customerId" className="form-contol"></Field>
                            </fieldset>
                            <fieldset className="form-group m-2">
                                <label>UserId : </label>
                                <Field type="password" name="password" className="form-contol"></Field>
                            </fieldset>
                            <div>
                                <button type="submit" className="btn btn-success mt-3">login</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
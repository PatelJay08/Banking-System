import { Field, Form, Formik } from "formik";
import { getAccountInfo, updateAccountInfo } from "./Api/ApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AccountInfoUpdateComponent(){

    const AuthContext = useAuth()
    const customerId = AuthContext.customerId

    const [firstName,setFirstname] = useState('fname')
    const [middleName,setMiddlename] = useState('mname')
    const [lastName,setLastname] = useState('lname')

    const[city,setCity] = useState('city')
    const[street,setStreet] = useState('street')
    const[state,setState] = useState('state')

    const[pincode,setPincode] =  useState(0)
    const[emailId,setEmailId] = useState('email')
    const[mobileNo,setMobileNo] = useState(0)



    const [accountNo,setAccountNo]= useState(0)
    const [dateOfBirth,setDateOfBirth] = useState("0000-00-00")
    const [accountType,setAccountType] = useState("type")
    
    const [accountStatus,setAccountStatus] = useState("status")
    const [accountActivationDate,setAccountActivationDate] = useState("0000-00-00")
    const [balance,setBalance] = useState(0)


    const navigate = useNavigate()

    function onSubmit(values){
        
        const accdetails = {
            firstName:values.firstName,
            middleName:values.middleName,
            lastName:values.lastName,
            city:values.city,
            street:values.street,
            state:values.state,
            pincode:values.pincode,
            emailId:values.emailId,
            mobileNo:values.mobileNo,

            customerId:customerId,
            accountNo:accountNo,
            dateOfBirth:dateOfBirth,
            accountType:accountType,
            accountStatus:accountStatus,
            accountActivationDate:accountActivationDate,
            balance:balance
        }

        updateAccountInfo(customerId,accdetails)
        .then(
            response =>{
                // console.log(response)
                navigate(`/user/${customerId}/account`)
                
            }
        )
        .catch(
            error => {
                console.log(error)
            }
        )

    }

    useEffect(
        ()=>getData(),[]
    )

    function getData(){
        getAccountInfo(customerId)
        .then(
            response => {
                // console.log(response.data);
                setFirstname(response.data.firstName)
                setMiddlename(response.data.middleName)
                setLastname(response.data.lastName)
                setCity(response.data.city)
                setState(response.data.state)
                setStreet(response.data.street)
                setPincode(response.data.pincode)
                setEmailId(response.data.emailId)
                setMobileNo(response.data.mobileNo)
                
                setAccountNo(response.data.accountNo)
                setAccountActivationDate(response.data.accountActivationDate)
                setDateOfBirth(response.data.dateOfBirth)
                setAccountType(response.data.accountType)
                setAccountStatus(response.data.accountStatus)
                setBalance(response.data.balance)


            }
        )
    }

    return(
        <div className="container">
            <Formik
            initialValues={{firstName,middleName,lastName,city,state,street,emailId,pincode,mobileNo}}
            enableReinitialize={true}
            onSubmit={onSubmit}
            >
                {
                    (props)=>(
                        <Form>
                            <fieldset>
                                <label>First Name</label>
                                <Field type="text" name="firstName" className="form-contol m-2"></Field>
                            </fieldset>
                            <fieldset>
                                <label>Middle Name</label>
                                <Field type="text" name="middleName" className="form-contol m-2"></Field>
                            </fieldset>
                            <fieldset>
                                <label>Last Name</label>
                                <Field type="text" name="lastName" className="form-contol m-2"></Field>
                            </fieldset>
                            <fieldset>
                                <label>City</label>
                                <Field type="text" name="city" className="form-contol m-2"></Field>
                            </fieldset>
                            <fieldset>
                                <label>Street</label>
                                <Field type="text" name="street" className="form-contol m-2"></Field>
                            </fieldset>
                            <fieldset>
                                <label>State</label>
                                <Field type="text" name="state" className="form-contol m-2"></Field>
                            </fieldset>
                            <fieldset>
                                <label>Pincode</label>
                                <Field type="number" name="pincode" className="form-contol m-2"></Field>
                            </fieldset>
                            <fieldset>
                                <label>Email</label>
                                <Field type="email" name="emailId" className="form-contol m-2"></Field>
                            </fieldset>
                            <fieldset>
                                <label>Mobile No</label>
                                <Field type="number" name="mobileNo" className="form-contol m-2"></Field>
                            </fieldset>
                            <div>
                                <button type="submit" className="btn btn-success mt-3">Save</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
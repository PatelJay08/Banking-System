import { Field, Form, Formik } from "formik";
import { getAccountInfo, updateAccountInfo } from "./Api/ApiService";
import { useAuth } from "./security/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AccountInfoUpdateComponent() {

    const AuthContext = useAuth()
    const customerId = AuthContext.customerId

    const [firstName, setFirstname] = useState('fname')
    const [middleName, setMiddlename] = useState('mname')
    const [lastName, setLastname] = useState('lname')

    const [city, setCity] = useState('city')
    const [street, setStreet] = useState('street')
    const [state, setState] = useState('state')

    const [pincode, setPincode] = useState(0)
    const [emailId, setEmailId] = useState('email')
    const [mobileNo, setMobileNo] = useState(0)



    const [accountNo, setAccountNo] = useState(0)
    const [dateOfBirth, setDateOfBirth] = useState("0000-00-00")
    const [accountType, setAccountType] = useState("type")

    const [accountStatus, setAccountStatus] = useState("status")
    const [accountActivationDate, setAccountActivationDate] = useState("0000-00-00")
    const [balance, setBalance] = useState(0)


    const navigate = useNavigate()

    function onSubmit(values) {

        const accdetails = {
            firstName: values.firstName,
            middleName: values.middleName,
            lastName: values.lastName,
            city: values.city,
            street: values.street,
            state: values.state,
            pincode: values.pincode,
            emailId: values.emailId,
            mobileNo: values.mobileNo,

            customerId: customerId,
            accountNo: accountNo,
            dateOfBirth: dateOfBirth,
            accountType: accountType,
            accountStatus: accountStatus,
            accountActivationDate: accountActivationDate,
            balance: balance
        }

        updateAccountInfo(customerId, accdetails)
            .then(
                response => {
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
        () => getData(), []
    )

    function getData() {
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

    return (
        <div className="container">
            <Formik
                initialValues={{ firstName, middleName, lastName, city, state, street, emailId, pincode, mobileNo }}
                enableReinitialize={true}
                onSubmit={onSubmit}
            >
                {
                    (props) => (
                        <Form>
                            <div className="container rounded bg-white mt-5 mb-5">
                                <div className="row">
                                    <div className="col-md-3 border-right">
                                        {/* <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div> */}
                                    </div>
                                    <div className="col-md-5 border-right">
                                        <div className="p-3 py-5">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h4 className="text-right">Update Profile</h4>
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-md-6"><label className="labels">First Name</label><Field name="firstName" type="text" className="form-control" placeholder="first name"></Field></div>
                                                <div className="col-md-6"><label className="labels">Last Name</label><Field name="lastName" type="text" className="form-control" placeholder="surname"></Field></div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-12"><label className="labels">Street</label><Field name="street" type="text" className="form-control" placeholder="enter phone number"></Field></div>
                                                <div className="col-md-12"><label className="labels">City</label><Field name="city" type="text" className="form-control" placeholder="enter address line 1"></Field></div>
                                                <div className="col-md-12"><label className="labels">State</label><Field name="state" type="text" className="form-control" placeholder="enter address line 2"></Field></div>
                                                <div className="col-md-12"><label className="labels">Pincode</label><Field name="pincode" type="number" className="form-control" placeholder="enter address line 2"></Field></div>
                                                <div className="col-md-12"><label className="labels">Mobile</label><Field name="mobileNo" type="number" className="form-control" placeholder="enter address line 2"></Field></div>
                                                <div className="col-md-12"><label className="labels">Email ID</label><Field name="emailId" type="email" className="form-control" placeholder="enter email id"></Field></div>
                                                {/* <div className="col-md-12"><label className="labels">Area</label><Field type="text" className="form-control" placeholder="enter address line 2"></Field></div>
                                                <div className="col-md-12"><label className="labels">Education</label><Field type="text" className="form-control" placeholder="education"></Field></div> */}
                                            </div>
                                            {/* <div className="row mt-3">
                                                <div className="col-md-6"><label className="labels">Country</label><Field type="text" className="form-control" placeholder="country" value=""></Field></div>
                                                <div className="col-md-6"><label className="labels">State/Region</label><Field type="text" className="form-control" value="" placeholder="state"></Field></div>
                                            </div> */}
                                            <div className="mt-5 text-center"><button type="submit" className="btn btn-primary profile-button">Save Profile</button></div>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-4">
                                        <div className="p-3 py-5">
                                            <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br />
                                            <div className="col-md-12"><label className="labels">Experience in Designing</label><Field type="text" className="form-control" placeholder="experience" value=""></Field></div> <br />
                                            <div className="col-md-12"><label className="labels">Additional Details</label><Field type="text" className="form-control" placeholder="additional details" value=""></Field></div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </Form>
                    )
                }
            </Formik>

        </div >
    )
}
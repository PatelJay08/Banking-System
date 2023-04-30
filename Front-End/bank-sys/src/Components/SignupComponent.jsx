import { Field, Form, Formik } from "formik";
import HeaderComponent from "./HeaderComponent";
import { addUser } from "./Api/ApiService";
import { useNavigate } from "react-router-dom";

export default function SignupComponent() {

    const navigate = useNavigate()
    function onSubmit(values) {
        // console.log(values.firstName);
        const userinfo = {
            firstName: values.firstName,
            middleName: values.middleName,
            lastName: values.lastName,
            dateOfBirth: values.dateOfBirth,
            street: values.street,
            city: values.city,
            state: values.state,
            pincode: values.pincode,
            emailId: values.emailId,
            mobileNo: values.mobileNo,
            accountType: values.accountType,
            accountStatus:'Active',
            accountActivationDate: null,
            balance: 0.0,
            accountNo: 0.0,
            customerId: 0,
        }
        console.log(userinfo);

        addUser(userinfo)
        .then(
            respone => {
                console.log(respone);
                navigate("/login")
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )
    }

    return (
        <div className="container">
            <HeaderComponent />
            <Formik
                initialValues={{}}
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
                                                <div className="col-md-6"><label className="labels">Middle Name</label><Field name="middleName" type="text" className="form-control" placeholder="middle name"></Field></div>
                                                <div className="col-md-6"><label className="labels">Last Name</label><Field name="lastName" type="text" className="form-control" placeholder="last name"></Field></div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-12"><label className="labels">Date of Birth</label><Field name="dateOfBirth" type="date" className="form-control" placeholder="enter date of birth"></Field></div>
                                                <div className="col-md-12"><label className="labels">Street</label><Field name="street" type="text" className="form-control" placeholder="enter street"></Field></div>
                                                <div className="col-md-12"><label className="labels">City</label><Field name="city" type="text" className="form-control" placeholder="enter city"></Field></div>
                                                <div className="col-md-12"><label className="labels">State</label><Field name="state" type="text" className="form-control" placeholder="enter state"></Field></div>
                                                <div className="col-md-12"><label className="labels">Pincode</label><Field name="pincode" type="number" className="form-control" placeholder="enter pincode"></Field></div>
                                                <div className="col-md-12"><label className="labels">Mobile</label><Field name="mobileNo" type="number" className="form-control" placeholder="enter mobile no"></Field></div>
                                                <div className="col-md-12"><label className="labels">Email Id</label><Field name="emailId" type="email" className="form-control" placeholder="enter email id"></Field></div>
                                                <div className="col-md-12"><label className="labels">Account Type</label><Field name="accountType" type="dropdown" className="form-control" placeholder="enter account type"></Field></div>
                                                {/* <div className="col-md-12"><label className="labels">Education</label><Field type="text" className="form-control" placeholder="education"></Field></div> */}
                                            </div>
                                            {/* <div className="row mt-3">
                                            <div className="col-md-6"><label className="labels">Country</label><Field type="text" className="form-control" placeholder="country" value=""></Field></div>
                                            <div className="col-md-6"><label className="labels">State/Region</label><Field type="text" className="form-control" value="" placeholder="state"></Field></div>
                                        </div> */}
                                            <div className="mt-5 text-center"><button type="submit" className="btn btn-primary profile-button">Sign Up</button></div>
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
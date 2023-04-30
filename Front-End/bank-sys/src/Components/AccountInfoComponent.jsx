import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAccountInfo } from "./Api/ApiService"
import { useAuth } from "./security/AuthContext"
import HeaderComponent from "./HeaderComponent"

export default function AccountInfoComponent() {

    // const userid = 15001

    const AuthContext = useAuth()
    const customerId = AuthContext.customerId
    const navigate = useNavigate()
    const [trxarr, setTrxarr] = useState([])

    useEffect(
        () => getData(),[]
    )

    function getData() {
        getAccountInfo(customerId)
            .then(
                response => {
                    setTrxarr(response.data)
                }
            )
            .catch(
                error => {
                    console.log(error);
                }
            )
    }

    function goToUpdateData() {
        navigate(`/user/${customerId}/account/update`)
    }

    function goToChangePassword(){
        navigate(`/user/${customerId}/account/update/password`)
    }

    return (
        <div className="container">
            <HeaderComponent />
            <div>
                <label>Account No : </label><input className="inp" value={trxarr.accountNo} readOnly={true} ></input>
            </div>
            <div>
                <label>First Name : </label><input className="inp" value={trxarr.firstName} readOnly={true} ></input>
            </div>
            <div>
                <label>Middle Name : </label><input className="inp" value={trxarr.middleName} readOnly={true} ></input>
            </div>
            <div>
                <label>Last Name : </label><input className="inp" value={trxarr.lastName} readOnly={true} ></input>
            </div>
            <div>
                <label>Account Activation Date : </label><input className="inp" value={trxarr.accountActivationDate} readOnly={true} ></input>
            </div>
        <br />
        <br />
            <button className="btn btn-success" onClick={goToUpdateData} >Update</button>
        <br />
        <br />
            <button className="btn btn-success" onClick={goToChangePassword} >Change Password</button>
        </div>
    )
}
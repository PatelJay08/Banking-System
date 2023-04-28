import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAccountInfo } from "./Api/ApiService"
import { useAuth } from "./security/AuthContext"

export default function AccountInfoComponent() {

    // const userid = 15001

    const AuthContext = useAuth()
    const customerId = AuthContext.customerId
    const navigate = useNavigate()

    // const [customerId, setCustomerId] = useState(15001)
    const [accountNo,setAccountNo] = useState(0)
    const [firstName,setFirstname] = useState('fname')
    const [middleName,setMiddlename] = useState('mname')
    const [lastName,setLastname] = useState('lname')
    const [dateOfBirth,setDateOfBirth] = useState("0000-00-00")
    const [accountActivationDate,setAccountActivationDate] = useState("0000-00-00")


    useEffect(
        () => getData(), []
    )

    function getData() {
        getAccountInfo(customerId)
            .then(
                response => {
                    console.log(response.data)
                    // setCustomerId(response.data.customerId)
                    setAccountNo(response.data.accountNo)
                    setMiddlename(response.data.middleName)
                    setLastname(response.data.lastName)
                    setDateOfBirth(response.data.dateOfBirth)
                    setFirstname(response.data.firstName)
                    setAccountActivationDate(response.data.accountActivationDate)
                }
            )
            .catch(
                error => {
                    console.log(error);
                }
            )
    }

    function goToUpdateData(){
        navigate(`/user/${customerId}/account/update`)
    }

    return (
        <div>
            <button className="btn btn-success" onClick={goToUpdateData} >Update</button>
        </div>
    )
}
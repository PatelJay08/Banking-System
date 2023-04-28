import { createContext, useContext, useState } from "react"
import { getAccountInfo } from "../Api/ApiService"

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [customerId, setCustomerId] = useState(15001)

    // const [firstName, setFirstname] = useState('fname')
    // const [middleName, setMiddlename] = useState('mname')
    // const [lastName, setLastname] = useState('lname')

    // const [city, setCity] = useState('city')
    // const [street, setStreet] = useState('street')
    // const [state, setState] = useState('state')

    // const [pincode, setPincode] = useState(0)
    // const [emailId, setEmailId] = useState('email')
    // const [mobileNo, setMobileNo] = useState(0)

    const [accountNo, setAccountNo] = useState(0.0)
    // const [dateOfBirth, setDateOfBirth] = useState("0000-00-00")
    // const [accountType, setAccountType] = useState("type")

    // const [accountStatus, setAccountStatus] = useState("status")
    // const [accountActivationDate, setAccountActivationDate] = useState("0000-00-00")
    // const [balance, setBalance] = useState(0)



    function login(customerId, password) {
        if (customerId === 15001 && password === 'Jay') {
            setIsAuthenticated(true)
            getAccountInfo(customerId)
            .then(
                response => {
                    setAccountNo(response.data.accountNo)
                }
            )
            return true
        }
        else {
            return false
        }
    }

    function logout() {
        setIsAuthenticated(false)
        setCustomerId(0)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, customerId, accountNo}}>
            {children}
        </AuthContext.Provider>
    )
}
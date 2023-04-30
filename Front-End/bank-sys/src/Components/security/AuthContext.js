import { createContext, useContext, useState } from "react"
import { authenticateUser, getAccountInfo } from "../Api/ApiService"
import { useNavigate } from "react-router-dom"

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [customerId, setCustomerId] = useState(0)
    const navigate = useNavigate()
    const [accountNo, setAccountNo] = useState(0.0)


    function login(credentials) {
        authenticateUser(credentials)
            .then(
                response => {
                    
                    
                    console.log(response.data);
                    setCustomerId(credentials.customerId)


                    if (response.data) {
                        setIsAuthenticated(true)
                        getAccountInfo(credentials.customerId)
                            .then(
                                response => {
                                    setAccountNo(response.data.accountNo)
                                }
                            )
                        navigate(`/user/${credentials.customerId}/account`)

                    }
                    else {
                        navigate("/")
                    }
                    console.log(isAuthenticated);
                }
            )
    }


    function logout() {
        setIsAuthenticated(false)
        setCustomerId(0)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, customerId, accountNo }}>
            {children}
        </AuthContext.Provider>
    )
}
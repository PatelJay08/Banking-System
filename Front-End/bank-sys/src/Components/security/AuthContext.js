import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider( {children} ){

    const[isAuthenticated,setIsAuthenticated] = useState(false)
    const[customerId,setCustomerId] = useState(15001)


    function login(customerId,password){
        if(customerId===15001 && password ==='Jay'){
            setIsAuthenticated(true)
            return true
        }
        else{
            return false
        }
    }

    function logout(){
        setIsAuthenticated(false)
        setCustomerId(0)
    }

    return(
        <AuthContext.Provider value={{isAuthenticated,login,logout,customerId}}>
        {children}
        </AuthContext.Provider>
    )
}
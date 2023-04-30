import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AccountInfoComponent from "./AccountInfoComponent";
import AccountInfoUpdateComponent from "./AccountInfoUpdateComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";
import LoginComponent from "./LoginComponent";
import ViewTransactionsComponent from "./ViewTransactionsComponent"
import DepositTransactionComponent from "./DepositTransactionComponent";

import './BankSysComponent.css'
import SignupComponent from "./SignupComponent";
import UpdatePasswordComponent from "./UpdatePasswordComponent";

export default function BankSysAppComponent() {

    function AuthenticatedRoute({ children }) {
        const authContext = useAuth()
        if (authContext.isAuthenticated)
            return children
        return <Navigate to="/" />
    }

    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<LoginComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/signup" element={<SignupComponent />} />
                        <Route path="/user/:customerId/account" element={
                            <AuthenticatedRoute>
                                <AccountInfoComponent />
                            </AuthenticatedRoute>
                        }></Route>
                        <Route path="/user/:customerId/account/update" element={
                            <AuthenticatedRoute>
                                <AccountInfoUpdateComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/user/:customerId/transactions/history" element={
                            <AuthenticatedRoute>
                                <ViewTransactionsComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/user/:customerId/transactions" element={
                            <AuthenticatedRoute>
                                <DepositTransactionComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/user/:customerId/account/update/password" element={
                            <AuthenticatedRoute>
                                <UpdatePasswordComponent />
                            </AuthenticatedRoute>
                        } />
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </>
    )
}
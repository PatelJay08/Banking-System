import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AccountInfoComponent from "./AccountInfoComponent";
import AccountInfoUpdateComponent from "./AccountInfoUpdateComponent";
import AuthProvider, { useAuth } from "./security/AuthContext";
import LoginComponent from "./LoginComponent";
import ViewTransactionsComponent from "./ViewTransactionsComponent"
import DepositTransactionComponent from "./DepositTransactionComponent";

export default function BankSysAppComponent() {
    function ProtectedRoutes({ chlidren }) {
        const AuthContext = useAuth()
        if (AuthContext.isAuthenticated) {
            return chlidren
        }
        else (
            <Navigate to="/" />
        )
    }

    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<LoginComponent />} />
                        <Route path="/user/:customerId/account" element={

                            <AccountInfoComponent />

                        }></Route>
                        <Route path="/user/:userid/account/update" element={

                            <AccountInfoUpdateComponent />

                        } />
                        <Route path="/user/:userid/transactions/history" element={
                            <ViewTransactionsComponent />
                        } />
                        <Route path="/user/:userid/transactions" element={
                            <DepositTransactionComponent />
                        } />
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </>
    )
}
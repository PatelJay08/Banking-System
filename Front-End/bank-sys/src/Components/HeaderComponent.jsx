import { Link, Navigate } from 'react-router-dom'
import { useAuth } from "./security/AuthContext";

export default function HeaderComponent() {

    const AuthContext = useAuth()
    const isAuthenticated = AuthContext.isAuthenticated
    const logout = AuthContext.logout
    const customerId = AuthContext.customerId


    function logoutFunction() {
        logout()
    }

    return (
        <div className="container">
            <header className='border-bottom border-light border-5 mb-2 p-2'>
                <div className='container'>
                    <div className='row'>
                        <nav className='navbar navbar-expand-lg'>
                            <a className='navbar-brand ms-2 fs-2 fw-bold text-black' href="https://google.com/">Banking System</a>
                            <div className='collapse navbar-collapse'>
                                <ul className='navbar-nav'>
                                    {
                                        // isAuthenticated && <li className='nav-item'><Link className='nav-link' to="/user/${customerId}/account">Account</Link></li>
                                        isAuthenticated && <li className='nav-item'><Link className='nav-link' to={`/user/${customerId}/account`} >Account</Link></li>
                                    }
                                    {

                                        isAuthenticated && <li className='nav-item'><Link className='nav-link' to={`/user/${customerId}/transactions`}>Trasaction</Link></li>
                                    }
                                    {

                                        isAuthenticated && <li className='nav-item'><Link className='nav-link' to={`/user/${customerId}/transactions/history`}>Trasaction History</Link></li>
                                    }
                                </ul>
                            </div>
                            <ul className='navbar-nav'>
                                {
                                    !isAuthenticated && <li className='nav-item'><Link className='nav-link' to="/login">Login</Link></li>
                                }
                                {
                                    isAuthenticated &&
                                    <li className='nav-item'><Link className='nav-link' to="/" onClick={logoutFunction}>Logout</Link></li>
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}
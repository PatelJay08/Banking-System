import { useEffect, useState } from "react"
import { getAllTransactionInfo } from "./Api/ApiService"
import { useAuth } from "./security/AuthContext"
import HeaderComponent from "./HeaderComponent"

export default function ViewTransactionsComponent() {

    const AuthContext = useAuth()
    const customerId = AuthContext.customerId

    const [trxarr, setTrxarr] = useState([])

    useEffect(
        () => getData()
    )

    function getData() {
        getAllTransactionInfo(customerId)
            .then(
                response => {
                    // console.log(response.data);
                    setTrxarr(response.data)
                }
            )
    }

    return (
        <div className="container">
            <HeaderComponent />
            <div className="table-responsive">
                <table className="table table-light table-bordered table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th>Account No</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Res. Account No</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trxarr.map(
                                arr => (
                                    <tr key={arr.id}>
                                        <td>{arr.accountNo}</td>
                                        <td>{arr.amount}</td>
                                        <td>{arr.type}</td>
                                        <td>{arr.recipientsaccountNo}</td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
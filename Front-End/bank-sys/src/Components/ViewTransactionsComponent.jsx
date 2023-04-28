import { useEffect, useState } from "react"
import { getAllTransactionInfo } from "./Api/ApiService"
import { useAuth } from "./security/AuthContext"

export default function ViewTransactionsComponent() {

    const AuthContext = useAuth()
    const customerId = AuthContext.customerId

    const [trxarr, setTrxarr] = useState([])

    useEffect(
        () => getData(), []
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
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Account No</th>
                        <th>Amount</th>
                        <th>Type</th>
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
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
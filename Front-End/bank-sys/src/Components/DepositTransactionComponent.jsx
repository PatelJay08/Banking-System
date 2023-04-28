import { Field, Form, Formik } from "formik";
import { useAuth } from "./security/AuthContext";
import { addTransactionInfo } from "./Api/ApiService";
import { useNavigate } from "react-router-dom";

export default function DepositTransactionComponent() {

    // const customerId = 15001

    const AuthContext = useAuth()

    const customerId = AuthContext.customerId
    const accountNo = AuthContext.accountNo
    const navigate = useNavigate()

    const amount = 1000.0

    function onDeposit(values){
        const trsaction = {
            customerId:customerId,
            accountNo:values.accountNo,
            amount:values.amount,
            id:null,
            type:"Deposit",
        }

        addTransactionInfo(customerId,trsaction)
        .then(
            respone => {
                console.log(respone);
                navigate(`/user/${customerId}/account`)
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )
    }

    function onWithdraw(values){
        const trsaction = {
            customerId:customerId,
            accountNo:values.accountNo,
            amount:values.amount,
            id:null,
            type:"Withdraw",
        }

        addTransactionInfo(customerId,trsaction)
        .then(
            respone => {
                console.log(respone);
                navigate(`/user/${customerId}/account`)
            }
        )
        .catch(
            error => {
                console.log(error);
            }
        )
    }

    return (
        <div className="container">
            <Formik
                initialValues={{accountNo,amount}}
                enableReinitialize={true}
                onSubmit={onDeposit}
            >
                {
                    (props) => (
                        <Form>
                            <fieldset className="form-group">
                                <label>Account No </label>
                                <Field name="accountNo" className="form-contol" type="number"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Amount </label>
                                <Field name="amount" className="form-contol" type="number"></Field>
                            </fieldset>
                            <div>
                                <button type="submit" className="btn btn-success" >Deposit</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
            <br />
            <br />
            <br />

            <Formik
                initialValues={{accountNo,amount}}
                enableReinitialize={true}
                onSubmit={onWithdraw}
            >
                {
                    (props) => (
                        <Form>
                            <fieldset className="form-group">
                                <label>Account No </label>
                                <Field name="accountNo" className="form-contol" type="number"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Amount </label>
                                <Field name="amount" className="form-contol" type="number"></Field>
                            </fieldset>
                            <div>
                                <button type="submit" className="btn btn-success" >Withdraw</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
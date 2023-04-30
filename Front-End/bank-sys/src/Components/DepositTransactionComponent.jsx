import { Field, Form, Formik } from "formik";
import { useAuth } from "./security/AuthContext";
import { addTransactionInfo, addTransferTransactionInfo } from "./Api/ApiService";
import { useNavigate } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";

export default function DepositTransactionComponent() {

    // const customerId = 15001

    const AuthContext = useAuth()
    const customerId = AuthContext.customerId
    const accountNo = AuthContext.accountNo

    const recipientsaccountNo = 0.0
    const navigate = useNavigate()

    const amount = 1000.0

    function onDeposit(values) {
        const trsaction = {
            customerId: customerId,
            accountNo: values.accountNo,
            amount: values.amount,
            id: null,
            type: "Deposit",
            recipientsaccountNo: null,
        }

        addTransactionInfo(customerId, trsaction)
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

    function onWithdraw(values) {
        const trsaction = {
            customerId: customerId,
            accountNo: values.accountNo,
            amount: values.amount,
            id: null,
            type: "Withdraw",
            recipientsaccountNo: null,
        }

        addTransactionInfo(customerId, trsaction)
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

    function onTransfer(values) {
        const trsaction = {
            customerId: customerId,
            accountNo: values.accountNo,
            amount: values.amount,
            id: null,
            type: "Transfer",
            recipientsaccountNo: values.recipientsaccountNo,
        }

        addTransferTransactionInfo(customerId, trsaction)
            .then(
                respone => {
                    // console.log(respone);
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
            <HeaderComponent />
            <br />
            <br />
            <Formik
                initialValues={{ accountNo, amount }}
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
                            <br />

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
                initialValues={{ accountNo, amount }}
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
                            <br />
                            <div>
                                <button type="submit" className="btn btn-success" >Withdraw</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
                <br />
                <br />
            <Formik
                initialValues={{ accountNo, amount, recipientsaccountNo }}
                enableReinitialize={true}
                onSubmit={onTransfer}
            >
                {
                    (props) => (
                        <Form>
                            <fieldset className="form-group">
                                <label>Account No </label>
                                <Field name="accountNo" className="form-contol" type="number"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Recipients Account No </label>
                                <Field name="recipientsaccountNo" className="form-contol" type="number"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Amount </label>
                                <Field name="amount" className="form-contol" type="number"></Field>
                            </fieldset>
                            <br />

                            <div>
                                <button type="submit" className="btn btn-success" >Transfer</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>

        </div>
    )
}
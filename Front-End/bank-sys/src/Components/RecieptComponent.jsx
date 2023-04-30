export default function RecieptComponent(customerId,trxarr){
    console.log(trxarr)
    return(
        <div>
            <div>customerId : {customerId}</div>
            <div>Account No: {trxarr.accountNo}</div>
        </div>
    )
}
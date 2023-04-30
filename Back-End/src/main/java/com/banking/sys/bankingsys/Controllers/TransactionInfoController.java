package com.banking.sys.bankingsys.Controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.banking.sys.bankingsys.model.TransactionInfo;
import com.banking.sys.bankingsys.repository.TransactionInfoRepository;

@RestController
public class TransactionInfoController {

    TransactionInfoRepository transactionInfoRepository;

    public TransactionInfoController(TransactionInfoRepository transactionInfoRepository) {
        this.transactionInfoRepository = transactionInfoRepository;
    }

    @GetMapping("user/{customerId}/transactions")
    public List<TransactionInfo> getAllTransactionsByCustomerId(@PathVariable Integer customerId) {
        return transactionInfoRepository.findByCustomerId(customerId);
    }

    @PostMapping("user/{customerId}/transactions")
    public TransactionInfo addTransaction(@PathVariable Integer customerId,
            @RequestBody TransactionInfo transactionInfo) {
        transactionInfo.setCustomerId(customerId);
        transactionInfo.setId(null);
        transactionInfo.setRecipientsaccountNo(null);
        return transactionInfoRepository.save(transactionInfo);
    }

    @PostMapping("user/{customerId}/transactions/transfer")
    public TransactionInfo transferFunds(@PathVariable Integer customerId,@RequestBody TransactionInfo transactionInfo){
        transactionInfo.setCustomerId(customerId);
        transactionInfo.setId(null);
        return transactionInfoRepository.save(transactionInfo);
    }

}
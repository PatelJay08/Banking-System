package com.banking.sys.bankingsys.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.banking.sys.bankingsys.model.AccountHoldersInfo;
import com.banking.sys.bankingsys.repository.AccountHoldersInfoRepository;

@RestController
public class AccountHoldersController {

    private AccountHoldersInfoRepository accountHoldersInfoRepository;

    public AccountHoldersController(AccountHoldersInfoRepository accountHoldersInfoRepository) {
        this.accountHoldersInfoRepository = accountHoldersInfoRepository;
    }

    @GetMapping("user/{customerId}/info")
    public AccountHoldersInfo getAccountHolderInfoById(@PathVariable Integer customerId) {
        AccountHoldersInfo acc = accountHoldersInfoRepository.findById(customerId).get();
        return acc;
    }

    @PutMapping("user/{customerId}/account/update")
    public AccountHoldersInfo updateAccountHoldersInfo(@PathVariable Integer customerId, @RequestBody AccountHoldersInfo accountHoldersInfo){
        accountHoldersInfoRepository.save(accountHoldersInfo);
        return null;
    }


}

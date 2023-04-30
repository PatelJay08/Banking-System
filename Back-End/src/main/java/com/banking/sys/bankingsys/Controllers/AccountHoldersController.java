package com.banking.sys.bankingsys.Controllers;

import java.time.LocalDate;
import java.util.Random;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.banking.sys.bankingsys.model.AccountHoldersInfo;
import com.banking.sys.bankingsys.model.CredentialsInfo;
import com.banking.sys.bankingsys.repository.AccountHoldersInfoRepository;
import com.banking.sys.bankingsys.repository.CredentialInfoRepository;

@RestController
public class AccountHoldersController {

    private Double accountNo = 200170107000.0;
    private Integer customerId = 15001;

    private AccountHoldersInfoRepository accountHoldersInfoRepository;
    private CredentialInfoRepository credentialInfoRepository;

    public AccountHoldersController(CredentialInfoRepository credentialInfoRepository,
            AccountHoldersInfoRepository accountHoldersInfoRepository) {
        this.credentialInfoRepository = credentialInfoRepository;
        this.accountHoldersInfoRepository = accountHoldersInfoRepository;
    }

    @GetMapping("user/{customerId}/info")
    public AccountHoldersInfo getAccountHolderInfoById(@PathVariable Integer customerId) {
        AccountHoldersInfo acc = accountHoldersInfoRepository.findById(customerId).get();
        return acc;
    }

    @PutMapping("user/{customerId}/account/update")
    public AccountHoldersInfo updateAccountHoldersInfo(@PathVariable Integer customerId,
            @RequestBody AccountHoldersInfo accountHoldersInfo) {
        accountHoldersInfoRepository.save(accountHoldersInfo);
        return null;
    }

    @PostMapping("/signup")
    public AccountHoldersInfo addNewUser(@RequestBody AccountHoldersInfo accountHoldersInfo) {

        String passString = generatePassword(8).toString();
        accountHoldersInfo.setAccountNo(accountNo);
        accountNo++;
        accountHoldersInfo.setCustomerId(customerId);

        CredentialsInfo credentialsInfo = new CredentialsInfo(null, passString, customerId);

        customerId++;
        LocalDate now = LocalDate.now();
        accountHoldersInfo.setAccountActivationDate(now);
        credentialInfoRepository.save(credentialsInfo);
        return accountHoldersInfoRepository.save(accountHoldersInfo);
    }

    private char[] generatePassword(int length) {
        String capitalCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
        String specialCharacters = "!@#$";
        String numbers = "1234567890";
        String combinedChars = capitalCaseLetters + lowerCaseLetters + specialCharacters + numbers;
        Random random = new Random();
        char[] password = new char[length];

        password[0] = lowerCaseLetters.charAt(random.nextInt(lowerCaseLetters.length()));
        password[1] = capitalCaseLetters.charAt(random.nextInt(capitalCaseLetters.length()));
        password[2] = specialCharacters.charAt(random.nextInt(specialCharacters.length()));
        password[3] = numbers.charAt(random.nextInt(numbers.length()));

        for (int i = 4; i < length; i++) {
            password[i] = combinedChars.charAt(random.nextInt(combinedChars.length()));
        }
        return password;
    }
}

package com.banking.sys.bankingsys.Controllers;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.banking.sys.bankingsys.model.CredentialsInfo;
import com.banking.sys.bankingsys.model.Pass;
import com.banking.sys.bankingsys.repository.CredentialInfoRepository;

@RestController
public class CredentialInfoController {

    private CredentialInfoRepository credentialInfoRepository;

    public CredentialInfoController(CredentialInfoRepository credentialInfoRepository) {
        this.credentialInfoRepository = credentialInfoRepository;
    }
    
    @PostMapping("/login")
    public Boolean addCreadential(@RequestBody CredentialsInfo credentialsInfo) {
        Integer customerId = credentialsInfo.getCustomerId();
        String password = credentialsInfo.getPassword();
        String pass = credentialInfoRepository.findByCustomerId(customerId).get(0).getPassword();
        if (password.equals(pass)) {
            return true;
        }
        return false;
    }

    @PostMapping("/user/{customerId}/account/update/password")
    public Boolean updateCredentials(@PathVariable Integer customerId, @RequestBody Pass pass) {
        CredentialsInfo credentialsInfo = credentialInfoRepository.findByCustomerId(customerId).get(0);
        String originalOldPass = credentialsInfo.getPassword();
        String gotOldpass = pass.getPassword();
        String gotNewpass = pass.getPasswordNew();
        if (originalOldPass.equals(gotOldpass)) {
            credentialsInfo.setPassword(gotNewpass);
            credentialInfoRepository.save(credentialsInfo);
            return true;
        }
        return false;
    }

}

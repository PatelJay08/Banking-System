package com.banking.sys.bankingsys.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.banking.sys.bankingsys.model.CredentialsInfo;


public interface CredentialInfoRepository extends JpaRepository<CredentialsInfo, Integer> {
    
    List<CredentialsInfo> findByCustomerId(Integer customerId);

}

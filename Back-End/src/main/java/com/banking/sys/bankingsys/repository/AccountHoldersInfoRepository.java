package com.banking.sys.bankingsys.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.banking.sys.bankingsys.model.AccountHoldersInfo;

public interface AccountHoldersInfoRepository extends JpaRepository<AccountHoldersInfo, Integer>{
    
}

package com.banking.sys.bankingsys.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.banking.sys.bankingsys.model.TransactionInfo;

public interface TransactionInfoRepository extends JpaRepository<TransactionInfo,Integer> {
    List<TransactionInfo>findByCustomerId(Integer customerId);
}

package com.banking.sys.bankingsys.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class TransactionInfo {

    @Id
    @GeneratedValue
    private Integer id;

    private int customerId;
    private double accountNo;
    private Double recipientsaccountNo;
    private double amount;
    private String type;

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public double getAccountNo() {
        return accountNo;
    }

    public void setAccountNo(double accountNo) {
        this.accountNo = accountNo;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    
    public Double getRecipientsaccountNo() {
        return recipientsaccountNo;
    }

    public void setRecipientsaccountNo(Double recipientsaccountNo) {
        this.recipientsaccountNo = recipientsaccountNo;
    }

    public TransactionInfo() {

    }

    public TransactionInfo(Integer id, int customerId, double accountNo, double recipientsaccountNo, double amount,
            String type) {
        this.id = id;
        this.customerId = customerId;
        this.accountNo = accountNo;
        this.recipientsaccountNo = recipientsaccountNo;
        this.amount = amount;
        this.type = type;
    }

}

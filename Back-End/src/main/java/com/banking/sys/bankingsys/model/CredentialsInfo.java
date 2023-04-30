package com.banking.sys.bankingsys.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class CredentialsInfo {
    
    @Id
    @GeneratedValue
    private Integer id;

    private String password;
    private Integer customerId;


    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public Integer getCustomerId() {
        return customerId;
    }
    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public CredentialsInfo(Integer id, String password, Integer customerId) {
        this.id = id;
        this.password = password;
        this.customerId = customerId;
    }
    public CredentialsInfo() {
    }
    
}

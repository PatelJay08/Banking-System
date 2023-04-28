package com.banking.sys.bankingsys.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class AccountHoldersInfo {
    
    @Id
    private int customerId;
    
    private double accountNo;
    private String firstName;
    private String middleName;
    private String lastName;
    private LocalDate dateOfBirth;
    private String street;
    private String city;
    private String state;
    private int pincode;
    private String emailId;
    private double mobileNo;
    private String accountType;
    private String accountStatus;
    private LocalDate accountActivationDate;
    private Double balance;


    public int getCustomerId() {
        return customerId;
    }
    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }
    public double getAccountNo() {
        return accountNo;
    }
    public void setAccountNo(double accountNo) {
        this.accountNo = accountNo;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getMiddleName() { 
        return middleName;
    }
    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }
    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
    public String getStreet() {
        return street;
    }
    public void setStreet(String street) {
        this.street = street;
    }
    public String getCity() {
        return city;
    }
    public void setCity(String city) {
        this.city = city;
    }
    public String getState() {
        return state;
    }
    public void setState(String state) {
        this.state = state;
    }
    public int getPincode() {
        return pincode;
    }
    public void setPincode(int pincode) {
        this.pincode = pincode;
    }
    public String getEmailId() {
        return emailId;
    }
    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }
    public double getMobileNo() {
        return mobileNo;
    }
    public void setMobileNo(double mobileNo) {
        this.mobileNo = mobileNo;
    }
    public String getAccountType() {
        return accountType;
    }
    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }
    public String getAccountStatus() {
        return accountStatus;
    }
    public void setAccountStatus(String accountStatus) {
        this.accountStatus = accountStatus;
    }
    public LocalDate getAccountActivationDate() {
        return accountActivationDate;
    }
    public void setAccountActivationDate(LocalDate accountActivationDate) {
        this.accountActivationDate = accountActivationDate;
    }
    public Double getBalance() {
        return balance;
    }
    public void setBalance(Double balance) {
        this.balance = balance;
    }

    
    public AccountHoldersInfo() {

    }
    @Override
    public String toString() {
        return "AccountHoldersInfo [customerId=" + customerId + ", accountNo=" + accountNo + ", firstName=" + firstName
                + ", middleName=" + middleName + ", lastName=" + lastName + ", dateOfBirth=" + dateOfBirth + ", street="
                + street + ", city=" + city + ", state=" + state + ", pincode=" + pincode + ", emailId=" + emailId
                + ", mobileNo=" + mobileNo + ", accountType=" + accountType + ", accountStatus=" + accountStatus
                + ", accountActivationDate=" + accountActivationDate + ", balance=" + balance + "]";
    }

    

}

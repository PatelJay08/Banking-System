package com.banking.sys.bankingsys.model;

public class Pass {
    private String password;
    private String passwordNew;
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getPasswordNew() {
        return passwordNew;
    }
    public void setPasswordNew(String passwordNew) {
        this.passwordNew = passwordNew;
    }
    public Pass(String password, String passwordNew) {
        this.password = password;
        this.passwordNew = passwordNew;
    }


    
}

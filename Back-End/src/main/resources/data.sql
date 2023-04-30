 insert into ACCOUNT_HOLDERS_INFO (customer_id,account_activation_date,account_no,account_status,
                                     account_type,balance,city,date_of_birth,email_id,first_name,last_name,
                                     middle_name,mobile_no,pincode,state,street)
                             values(140803,'2023-04-29',200170107072.0,'Active','Savings',15000.0,'Navsari','2003-08-14','jayp2663@gmail.com','Jay','Patel','Ramubhai',9313020720.0,396430,'Gujarat','Minkachchh');
-- insert into TRANSACTION_INFO  (id,account_no,amount,customer_id,type)
--                              values(1,200170107072.0,1000,15001,'Deposit');
-- insert into TRANSACTION_INFO  (id,account_no,amount,customer_id,type)
--                              values(2,200170107072.0,1500,15001,'Withdraw');

insert into credentials_info (id,customer_id,password)
                              values (0,140803,'jay123');
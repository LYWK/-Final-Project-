package com.petshop.web.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * Customer
 */
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Getter
@Setter
@ToString
@Table(name = "customers")
public class Customer implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @Column(name="customer_id") private String customerId; 
    @Column(name="customer_name") private String customerName;
    @Column(name="password") private String password;
    @Column(name="email") private String email;
    @Column(name="address") private String address;
    
    @Override
    public String toString(){
        return "Customer :[id:"+id+",customerId:" +customerId+", customerName:"+customerName+", password:"+password+", email:"+email+
       ", address:"+address+"]";
    }

    @Builder
    public Customer(String customerId,String customerName,
    String password,String ssn,String phone,String city,
    String address,String postalcode,String photo){
        this.customerId = customerId;
        this.customerName = customerName;
        this.password = password;
        this.email = ssn;
        this.address = address;
    
    }
    
}
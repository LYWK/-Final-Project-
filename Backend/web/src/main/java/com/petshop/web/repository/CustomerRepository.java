package com.petshop.web.repository;

import com.petshop.web.entities.Customer;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * CustomerRepository
 */
@Repository

public interface CustomerRepository  extends CrudRepository<Customer, Long>{

    public Customer findByCustomerIdAndPassword(String id, String password);
}
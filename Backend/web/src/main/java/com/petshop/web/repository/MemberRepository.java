package com.petshop.web.repository;

import com.petshop.web.entities.Member;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * CustomerRepository
 */
@Repository

public interface MemberRepository  extends CrudRepository<Member, Long>{

    public Member findByCustomerIdAndPassword(String id, String password);
}
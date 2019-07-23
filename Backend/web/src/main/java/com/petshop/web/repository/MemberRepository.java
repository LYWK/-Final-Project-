package com.petshop.web.repository;

import com.petshop.web.entities.Member;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * CustomerRepository
 */
@Repository

public interface MemberRepository  extends CrudRepository<Member, Long>{
    //login
    public Member findMemberByMemberIdAndPassword(String id, String password);
    
    //mypage
    public Member findMemberByMemberId(String memberid);


    public Member deleteByMemberId(String id);
    
}
package com.petshop.web.repository;

import java.util.Optional;

import com.petshop.web.entities.Member;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * CustomerRepository
 */
@Repository

public interface MemberRepository  extends CrudRepository<Member, Long>{
    //login
    public Member findMemberByMemberidAndPassword(String memberid, String password);
    
    //mypage
    public Member findMemberByMemberid(String memberid);
 
    public String findMembernameByWriterid(Long writerid);
    
    public Member deleteByMemberid(String memberid);
    
    public Member findByWriterid(Long long1);
    

   
}
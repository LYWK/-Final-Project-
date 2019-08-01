package com.petshop.web.service;

import java.util.Optional;

import com.petshop.web.domain.MemberDTO;
import com.petshop.web.entities.Member;
import com.petshop.web.entities.ResultMap;

import org.springframework.stereotype.Component;



/**
 * MemberService
 */
@Component
public interface MemberService {

    public Member save(Member resultentity);
	
    public Optional<Member>	findById(Long id);
	
    public Iterable<Member>	findAll();
	
    public Iterable<Member> saveAll(Iterable<Member> entities);
	
    public void	deleteByMemberid(String id);
    
    public String findMembernameByWriterid(Long long1);

    public Member findByWriterid(Long writerid);
  
   
}
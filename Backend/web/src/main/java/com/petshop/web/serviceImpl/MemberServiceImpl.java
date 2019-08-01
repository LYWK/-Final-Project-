package com.petshop.web.serviceImpl;

import java.util.List;
import java.util.Optional;

import com.petshop.web.domain.MemberDTO;
import com.petshop.web.entities.Member;
import com.petshop.web.repository.MemberRepository;
import com.petshop.web.service.MemberService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.java.Log;

/**
 * MemberServiceImpl
 */
@Service
@Log
public class MemberServiceImpl implements MemberService {

    @Autowired
    MemberRepository repo;

    @Override
    public Member save(Member entity) {
        return repo.save(entity);
    }

    @Override
    public Optional<Member> findById(Long writerid) {
        return repo.findById(writerid);
    }

    @Override
    public Iterable<Member> findAll() {
        return repo.findAll();
    }

    @Override
    public Iterable<Member> saveAll(Iterable<Member> entities) {
        return repo.saveAll(entities);
    }

    @Override
    public void deleteByMemberid(String memberid) {
        repo.deleteByMemberid(memberid);
    }

    @Override
    public String findMembernameByWriterid(Long writerid) {
        return repo.findMembernameByWriterid(writerid);
    }

    @Override
    public Member findByWriterid(Long writerid) {
        return repo.findByWriterid(writerid);
    }

}
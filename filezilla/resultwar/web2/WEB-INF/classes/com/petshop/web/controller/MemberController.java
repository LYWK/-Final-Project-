package com.petshop.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.petshop.web.common.CommonConfig;
import com.petshop.web.domain.MemberDTO;
import com.petshop.web.entities.Member;

import com.petshop.web.repository.BoardRepository;
import com.petshop.web.repository.MemberRepository;
import com.petshop.web.service.MemberService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * MemberController
 */
 @CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/members")
public class MemberController {

    @Autowired MemberDTO member;
    @Autowired MemberService memberService;
    @Autowired CommonConfig config;
    @Autowired MemberRepository repo;
    @Autowired BoardRepository boardrepo;

    @GetMapping("")
    public Iterable<MemberDTO> findAll(){
        Iterable<Member> entity = repo.findAll();
        List<MemberDTO> list = new ArrayList<>();
        for (Member m: entity){
            MemberDTO memberDTO  = config.modelMapper().map(m, MemberDTO.class);
            list.add(memberDTO);
        }
        return list;
    }

    @GetMapping("/{id}")
    public MemberDTO findById(@PathVariable String id){
        System.out.println("findById 들어온 아이디 : "+id);
        Member entity = memberService
                            .findById(Long.parseLong(id))
                            .orElseThrow(EntityNotFoundException::new);
                            
        System.out.println(">>>>"+entity.toString());
        MemberDTO c = config.modelMapper().map(entity, MemberDTO.class);
        System.out.println("조회결과: "+c.toString());
        return c;
    }

    @PostMapping("")
    public HashMap<String,String> JoinMembers(@RequestBody MemberDTO dto) {
        
        System.out.println("Join test");
        HashMap<String,String> map = new HashMap<>();
        Member entity = new Member();
        entity.setMemberid(dto.getMemberid());
        entity.setMembername(dto.getMembername());
        entity.setPassword(dto.getPassword());
        entity.setAddress(dto.getAddress());
        entity.setEmail(dto.getEmail());;
        memberService.save(entity);


        System.out.println("Join test");
         map.put("result", "SUCCESS");
         return  map;
    }
    
    @PostMapping("/login")
    public MemberDTO login(@RequestBody MemberDTO dto) {
        System.out.println("Join test");
        return config.modelMapper().map(repo.findMemberByMemberidAndPassword(dto.getMemberid(), dto.getPassword()),
                MemberDTO.class);
    }

    @DeleteMapping("/{writerid}")
    public void	delete(@PathVariable("writerid") Long id){
        System.out.println(id);
        System.out.println("delte test");
        Member entity = new Member();
        entity = repo.findByWriterid(id);
        System.out.println(entity);
        //repo.deleteByWriterid(entity.getWriterid());
        boardrepo.deleteBoard(id);
        repo.deleteById(entity.getWriterid());
    }

    @GetMapping("/mypage/{id}")
    public MemberDTO mypage(@PathVariable Long id) {
        
        repo.findByWriterid(id);
        return config.modelMapper().map(repo.findByWriterid(id), MemberDTO.class);
    }

        // 비밀번호 수정
    @PutMapping("/modi")
        public void modiPass(@RequestBody MemberDTO dto) {
            Member entity = new Member();
            entity = repo.findMemberByMemberid(dto.getMemberid());
            entity.setPassword(dto.getPassword());
            entity.setMembername(dto.getMembername());
            entity.setEmail(dto.getEmail());
            entity.setAddress(dto.getAddress());
            repo.save(entity);
    }
}
package com.petshop.web.controller;

import java.util.HashMap;

import com.petshop.web.domain.MemberDTO;
import com.petshop.web.entities.Member;
import com.petshop.web.repository.MemberRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * MemberController
 */
@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
@RestController
@RequestMapping("/members")
public class MemberController {

    @Autowired
    MemberDTO member;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    MemberRepository repo;

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }


    @GetMapping("")
    public Iterable<MemberDTO> findAll(){

        return null;
    }

    @GetMapping("/{id}")
    public MemberDTO findById(@PathVariable String id){

        return null;
    }

    @PostMapping("")
    public HashMap<String,String> save(@RequestBody MemberDTO dto) {
        
        return null;
    }
    
    @PostMapping("/login")
    public MemberDTO login(@RequestBody MemberDTO dto) {
        return null;
    }
    
    
  
}
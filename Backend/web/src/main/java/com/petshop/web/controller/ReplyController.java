package com.petshop.web.controller;

import com.petshop.web.domain.ReplyDTO;
import com.petshop.web.repository.ReplyRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * ReplyController
 */
@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
@RestController
@RequestMapping("/reply")
public class ReplyController {
    @Autowired
    ReplyDTO replyDTO;
    // @Autowired
    // ModelMapper modelMapper;
    @Autowired
    ReplyRepository repo;
    
    // @Bean
    // public ModelMapper modelMapper(){
    //     return new ModelMapper();
    // }
}
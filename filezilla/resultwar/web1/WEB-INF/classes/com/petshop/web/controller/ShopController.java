package com.petshop.web.controller;

import com.petshop.web.domain.ShopDTO;
import com.petshop.web.repository.ShopRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * ShopController
 */
@CrossOrigin(origins = "http://web.lywk2.com.s3-website.ap-northeast-2.amazonaws.com:3000", maxAge = 3600)
@RestController
@RequestMapping("/members")
public class ShopController {
    @Autowired
    ShopDTO  shopDTO;
    // @Autowired
    // ModelMapper modelMapper;
    @Autowired
    ShopRepository repo;
    
    // @Bean
    // public ModelMapper modelMapper(){
    //     return new ModelMapper();
    // }
}
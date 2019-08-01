package com.petshop.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * CustomerDTO
 */
@Data @Component @Lazy
public class MemberDTO {

       private String membername, memberid, password, email, address;
       private Long writerid;

      
}
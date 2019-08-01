package com.petshop.web.domain;

import java.sql.Timestamp;

import com.petshop.web.entities.Member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * BoardDTO
 */
@Data @Component @Lazy
public class BoardDTO {

    private String sort, title, content,  cnt, photo, photopath, membername;
    private Timestamp date;
    private Long writerid,bno;

}
package com.petshop.web.domain;

import java.sql.Timestamp;
import java.time.LocalDateTime;

import com.petshop.web.entities.Member;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * BoardDTO
 */
@Data @Component @Lazy
public class BoardDTO {

    private String sort, title, content,   photo, photopath, membername;
    private int cnt;
    private LocalDateTime date;
    private Long writerid,bno;

}
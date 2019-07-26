package com.petshop.web.domain;

import java.sql.Timestamp;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * BoardDTO
 */
@Data @Component @Lazy
public class BoardDTO {

    private String id,writer,sort, title, content,  cnt;
    private Timestamp date;
    private String photo,photo_path;
    
}
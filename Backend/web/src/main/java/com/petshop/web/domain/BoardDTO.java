package com.petshop.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * BoardDTO
 */
@Data @Component @Lazy
public class BoardDTO {

    private String id,writer,sort, title, content, date, cnt;
}
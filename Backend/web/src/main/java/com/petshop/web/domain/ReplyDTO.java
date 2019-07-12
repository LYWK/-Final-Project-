package com.petshop.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * ReplyDTO
 */
@Data @Component @Lazy
public class ReplyDTO {

    private String id,writer, title, content, date, cnt,num;

}
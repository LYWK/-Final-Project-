package com.petshop.web.domain;

import java.time.LocalDateTime;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class BoardDTO {

    private String sort, title, content,   photo, photopath, membername;
    private int cnt;
    private LocalDateTime date;
    private Long writerid,bno;

}

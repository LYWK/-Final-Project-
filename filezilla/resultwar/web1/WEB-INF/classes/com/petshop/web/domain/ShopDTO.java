package com.petshop.web.domain;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

/**
 * SortBoardDTO
 */
@Data @Component @Lazy
public class  ShopDTO {
      
          private String id,writer, title, content, date, cnt, productName, productSort, productPrice, phone ;
}
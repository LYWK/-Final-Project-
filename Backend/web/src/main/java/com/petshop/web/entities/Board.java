package com.petshop.web.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Getter
@Setter
@ToString
@Table(name = "board")
public class Board {
        
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @Column(name="writer") private String writer; 
    @Column(name="title") private String title;
    @Column(name="content") private String content;
    @Column(name="date") private String date;
    @Column(name="cnt") private String cnt;
    @Column(name="photo") private String photo;
    @Column(name="sort") private String sort;
    
    @Override
    public String toString(){
        return "Board :[writer:"+writer+",title:" +title+", content:"+content+", date:"+date+", cnt:"+cnt+
       ", photo:"+photo+", sort:"+sort+"]";
    }

    @Builder
    public Board(
    String writer,String  title,String content,String date,
    String cnt,String photo,String sort){
        this.writer = writer;
        this.title = title;
        this.content = content;
        this.date = date;
        this.cnt = cnt;
        this.photo = photo;
        this.sort = sort;
    }
    
}
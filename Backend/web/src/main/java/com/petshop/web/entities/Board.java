package com.petshop.web.entities;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

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
@Table(name = "boards")
public class Board implements Serializable{
        
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "bno")
    @GeneratedValue(strategy=GenerationType.AUTO) private Long bno;

    @Column(name="title") private String title;
    
    @Column(name="content") private String content;
    
   
    @DateTimeFormat(style = "YYYY.MM.DD, h:mm:ss")
    @Column(name="date") 
    private LocalDateTime date;
    
    @Column(name="cnt") private int cnt;
    
    @Column(name="photo") private String photo;
    
    @Column(name="sort") private String sort;
    
    @Column(name = "photopath", nullable = true) private String photopath;
    
    @ManyToOne
    @JoinColumn(name="writerid")
    private Member member;
    
   
    @Override
    public String toString(){
        return "Board :[title:" +title+", content:"+content+", date:"+date+", cnt:"+cnt+
       ", photo:"+photo+", sort:"+sort+"]";
    }

    // @Builder
    // public Board(
    // String writer,String  title,String content,Timestamp date,
    // String cnt,String photo,String sort,String memberId){
    //     this.writer = writer;
    //     this.title = title;
    //     this.content = content;
    //     this.date = date;
    //     this.cnt = cnt;
    //     this.photo = photo;
    //     this.sort = sort;
    //     this.memberId = memberId;
    // }
    
}
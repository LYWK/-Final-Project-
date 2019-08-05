package com.petshop.web.entities;

import javax.persistence.*;

import com.petshop.web.domain.ResultMapDTO;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.math.BigInteger;
import java.sql.Timestamp;
// writerid, memberid, membername, password, email, address
// bno, cnt, content, date, title, sort, photo, photopath,
/*@SqlResultSetMapping(
        name="resultmapping",
        classes = @ConstructorResult(
                targetClass = ResultMapDTO.class,
                columns = {
                        @ColumnResult(name="writerid", type = BigInteger.class),
                        @ColumnResult(name="memberid", type = BigInteger.class),
                        @ColumnResult(name="bno", type = BigInteger.class),
                        @ColumnResult(name="cnt", type = Integer.class),
                        @ColumnResult(name="membername", type = String.class),
                        @ColumnResult(name="password", type = String.class),
                        @ColumnResult(name="email", type = String.class),
                        @ColumnResult(name="address", type = String.class),
                        @ColumnResult(name="title", type = String.class),
                        @ColumnResult(name="content", type = String.class),
                        @ColumnResult(name="sort", type = String.class),
                        @ColumnResult(name="photopath", type = String.class),
                        @ColumnResult(name="photo", type = String.class),
                        @ColumnResult(name="date", type = Timestamp.class),
                })
)*/
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Getter
@Setter
@Entity
@Table(name = "resultmap")
public class ResultMap implements Serializable{
    private static final long serialVersionUID = 6833533909005103564L;
    @Id
    @Column(name = "seq")
    @GeneratedValue(strategy=GenerationType.AUTO) private Long seq;
    @Column(name="writerid") private String writerid; 
    @Column(name="memberid") private String memberid; 
    @Column(name="bno") private String bno; 
    @Column(name="cnt") private String cnt; 
    @Column(name="membername") private String membername; 
    @Column(name="password") private String password; 
    @Column(name="email") private String email; 
    @Column(name="address") private String address; 
    @Column(name="title") private String title; 
    @Column(name="content") private String content; 
    @Column(name="sort") private String sort; 
    @Column(name="photopath") private String photopath; 
    @Column(name="photo") private String photo; 
    @Column(name="date") private String date; 


}
package com.petshop.web.domain;

import java.math.BigInteger;
import java.security.Timestamp;

import lombok.Data;

@Data
public class ResultMapDTO {
    private String memberid, password, email, address, sort, title, content,  cnt, photo, photopath, membername;
    private Timestamp date;
    private Long writerid,bno;

    public ResultMapDTO(Long writerid, Long bno, 
                        Timestamp date, 
                        String memberid, String password, String email,
                        String address, String sort, String title, String content,
                        String cnt, String photo, String photopath, String membername) {
        this.writerid = writerid == null ? null : writerid.longValue();
        this.bno = bno == null ? null : bno.longValue();
        this.date = date;
        this.memberid = memberid;
        this.password = password;
        this.email = email;
        this.address = address;
        this.sort = sort;
        this.title = title;
        this.content = content;
        this.cnt = cnt;
        this.photo = photo;
        this.photopath = photopath;
        this.membername = membername;
        
    }
    
}


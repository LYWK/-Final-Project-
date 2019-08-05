package com.petshop.web.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * member
 */
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Getter
@Setter
@ToString
@Table(name = "members")
public class Member implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Column(name = "writerid")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long writerid;
    @Column(name="memberid") private String memberid; 
    @Column(name="membername") private String membername;
    @Column(name="password") private String password;
    @Column(name="email") private String email;
    @Column(name="address") private String address;


    @OneToMany(cascade = CascadeType.ALL)
    //@JoinColumn(name = "writerid")
    private List<Board> board;
    
    
    @Override
    public String toString(){
        return "Member :[writerid:"+writerid+",memberId:" +memberid+", memberName:"+membername+", password:"+password+", email:"+email+
       ", address:"+address+"]";
    }

  
}
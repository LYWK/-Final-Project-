package com.petshop.web.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @Column(name="member_id") private String memberId; 
    @Column(name="member_name") private String memberName;
    @Column(name="password") private String password;
    @Column(name="email") private String email;
    @Column(name="address") private String address;
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<Board> board;
    @Override
    public String toString(){
        return "Member :[id:"+id+",memberId:" +memberId+", memberName:"+memberName+", password:"+password+", email:"+email+
       ", address:"+address+"]";
    }

    @Builder
    public Member(String memberId,String memberName,
    String password,String email,String address){
        this.memberId = memberId;
        this.memberName = memberName;
        this.password = password;
        this.email = email;
        this.address = address;
    
    }
    
}
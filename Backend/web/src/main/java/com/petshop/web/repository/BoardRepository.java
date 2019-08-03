package com.petshop.web.repository;

import java.util.HashMap;
import java.util.List;

import com.petshop.web.entities.Board;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * BoardRepository
 */
@Repository
public interface BoardRepository extends CrudRepository<Board, Long>{

    // @Column(name = "bno")
    // @GeneratedValue(strategy=GenerationType.AUTO) private Long bno;

    // @Column(name="title") private String title;
    
    // @Column(name="content") private String content;
    
    // @CreationTimestamp
    // @Column(name="date") private Timestamp date;
    
    // @Column(name="cnt") private String cnt;
    
    // @Column(name="photo") private String photo;
    
    // @Column(name="sort") private String sort;
    
    // @Column(name = "photopath", nullable = true) private String photopath;
    
    // @ManyToOne
    // @JoinColumn(name="writerid")
    // private Member member;
    @Query(
        value = "select * from boards b JOIN members m ON b.writerid=m.writerid"
        , nativeQuery = true
    )
    public List<Board> listAll();

    @Query(
        value = "select * from boards where bno=:id"
        , nativeQuery = true
    )
    public Board findByBno(Long id);

    public void deleteByBno(Long id);

    @Query(
        value = "delete from boards where writerid=:writerid",
        nativeQuery = true
    )
    public void deleteBoard(Long writerid);

    public int findCntByBno(Long id);
    
    @Query(
        value = "update boards set cnt=cnt+1 where bno=:bno",
        nativeQuery = true
    )
    public void addCnt(Long bno);

}
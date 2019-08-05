package com.petshop.web.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.transaction.Transactional;

import com.petshop.web.domain.ResultMapDTO;
import com.petshop.web.entities.ResultMap;

import javax.persistence.*;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TxRepository extends JpaRepository<ResultMap, Long>{

    @Query (
        value = "SELECT b.bno, b.cnt, b.content, b.date, b.title, b.writerid, m.address, m.email, m.memberid, m.membername FROM boards b "
        + "   JOIN members m "
        + "     ON b.writerid LIKE m.writerid ", nativeQuery = true
    )
    public List<ResultMap> getBoardList();
}
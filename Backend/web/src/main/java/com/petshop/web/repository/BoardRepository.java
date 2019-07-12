package com.petshop.web.repository;

import com.petshop.web.entities.Board;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * BoardRepository
 */
@Repository
public interface BoardRepository extends CrudRepository<Board, Long>{

    
}
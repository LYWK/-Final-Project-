package com.petshop.web.service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import com.petshop.web.entities.Board;

import org.springframework.stereotype.Component;

/**
 * BoardService
 */
@Component
public interface BoardService {
    public Board save(Board entity);
	
    public Optional<Board> findByBno(Long id);
	
    public Iterable<Board>	findAll();
	
    public Iterable<Board> saveAll(Iterable<Board> entities);
	
    public void	deleteById(Long id);
    
    public List<HashMap<String,String>> getBoardList();
}
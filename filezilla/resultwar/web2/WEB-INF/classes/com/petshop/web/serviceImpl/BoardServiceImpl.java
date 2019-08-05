package com.petshop.web.serviceImpl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import com.petshop.web.entities.Board;
import com.petshop.web.repository.BoardRepository;
import com.petshop.web.service.BoardService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.java.Log;

/**
 * BoardServiceImpl
 */
@Service
@Log
public class BoardServiceImpl implements BoardService {

    
    @Autowired
    BoardRepository repo;

    @Override
    public Board save(Board entity) {
        return repo.save(entity);
    }

    @Override
    public Optional<Board> findByBno(Long id) {
       // System.out.println(repo.findById(id));
        // int cnt = repo.findCntById(id);
        // System.out.println(cnt);

        return repo.findById((Long)id);
    }

    @Override
    public Iterable<Board> findAll() {
        return repo.findAll();
    }

    @Override
    public Iterable<Board> saveAll(Iterable<Board> entities) {
        return repo.saveAll(entities);
    }

    @Override
    public void deleteById(Long id) {
        repo.deleteById((Long) id);
    }



}
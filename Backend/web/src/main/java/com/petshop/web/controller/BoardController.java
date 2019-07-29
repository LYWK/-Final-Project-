package com.petshop.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.petshop.web.common.CommonConfig;
import com.petshop.web.domain.BoardDTO;
import com.petshop.web.entities.Board;
import com.petshop.web.repository.BoardRepository;
import com.petshop.web.service.BoardService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * BoardController
 */
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/board")
public class BoardController {
    @Autowired BoardDTO boardDTO;
    @Autowired BoardService boardService;
    
    @Autowired CommonConfig config;
    @Autowired BoardRepository repo;


    
    @GetMapping("")
    public Iterable<BoardDTO> findAll(){
        Iterable<Board> entity = repo.findAll();
        List<BoardDTO> list = new ArrayList<>();
        for (Board m: entity){
            BoardDTO boardDTO  = config.modelMapper().map(m, BoardDTO.class);
            list.add(boardDTO);
        }
        return list;
    }

    @GetMapping("/{id}")
    public BoardDTO findById(@PathVariable String id){
        System.out.println("findById 들어온 아이디 : "+id);
        Board entity = boardService
                            .findById(Long.parseLong(id))
                            .orElseThrow(EntityNotFoundException::new);
                            
        System.out.println(">>>>"+entity.toString());
        BoardDTO c = config.modelMapper().map(entity, BoardDTO.class);
        System.out.println("조회결과: "+c.toString());
        return c;
    }

    @PostMapping("")
    public HashMap<String,String> Joinboard(@RequestBody BoardDTO dto) {
        
        System.out.println("regist test");
        HashMap<String,String> map = new HashMap<>();
        Board entity = new Board();
        entity.setTitle(dto.getTitle());
        entity.setContent(dto.getContent());
        //entity.setWriter(dto.getWriter());
        entity.setDate(dto.getDate());
        entity.setSort(dto.getSort());;
        entity.setCnt(dto.getCnt());
        boardService.save(entity);  
         System.out.println("regist test");
         map.put("result", "SUCCESS");
         return  map;
    }

    @DeleteMapping("/{id}")
    public void	delete(@PathVariable("id")Long id){
        boardService.deleteById(id);
    }
    

}
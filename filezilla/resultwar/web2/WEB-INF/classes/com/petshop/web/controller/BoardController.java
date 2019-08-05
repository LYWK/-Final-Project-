package com.petshop.web.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import com.petshop.web.common.CommonConfig;
import com.petshop.web.domain.BoardDTO;
import com.petshop.web.domain.MemberDTO;
import com.petshop.web.entities.Board;
import com.petshop.web.entities.Member;

import com.petshop.web.repository.BoardRepository;
import com.petshop.web.repository.MemberRepository;

import com.petshop.web.service.BoardService;
import com.petshop.web.service.MemberService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
    @Autowired MemberRepository memrepo;
    @Autowired MemberService memService;
   

//    @GetMapping("")
//    public List<BoardDTO> findAll(){
//        System.out.println("findAll 진입");
//        List<ResultMap> entities = listrepo.getBoardList();
//        if(entities.size()==0){
//            System.out.println("★ entities가 null 입니다.");
//        }else{
//            System.out.println("★ entities.size() : "+entities.size());
//        }
//        List<BoardDTO> list = new ArrayList<>();
//        for (ResultMap m: entities){
//            BoardDTO boardDTO  = config.modelMapper().map(m, BoardDTO.class);
//            list.add(boardDTO);
//        }
//        System.out.println("findAll return 직전 : "+list);  
//        return list;
//    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Board>> findById(@PathVariable String id){
        repo.addCnt(Long.parseLong(id));
        Optional<Board> board = boardService.findByBno(Long.parseLong(id));
        return new ResponseEntity<Optional<Board>>(board, HttpStatus.OK);
    }

    @PostMapping("")
    public HashMap<String,String> Joinboard(@RequestBody BoardDTO dto){
        
        System.out.println("regist test");
        
        System.out.println("writerid "+dto.getWriterid() );
        HashMap<String,String> map = new HashMap<>();
        Board entity = new Board();
        entity.setTitle(dto.getTitle());
        entity.setContent(dto.getContent());

         Member member = new Member();
         member.setWriterid(dto.getWriterid());
         member = memrepo.findByWriterid(dto.getWriterid());
         
         entity.setMember(member); 

        entity.setDate(LocalDateTime.now());
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

    @GetMapping("/listall")
    public ResponseEntity<HashMap<String, Object>> listAll(){
         System.out.println("listAll컨트롤러 도착");
         
         List<Board> list = repo.listAll();

         HashMap map = new HashMap<>();
         map.put("list", list);
         
         return new ResponseEntity<HashMap<String, Object>>(map, HttpStatus.OK);
    }

    
        //게시글 수정
        @PutMapping("/modi")
        public void modiboard(@RequestBody BoardDTO dto) {
            System.out.println("update test");
            Board entity = repo.findById(dto.getBno()).get();
            System.out.println("ENTITY : " + entity);

            entity.setTitle(dto.getTitle());
            entity.setContent(dto.getContent());
            entity.setDate(LocalDateTime.now());
            entity.setSort(dto.getSort());
            repo.save(entity);
    }
    
    

}
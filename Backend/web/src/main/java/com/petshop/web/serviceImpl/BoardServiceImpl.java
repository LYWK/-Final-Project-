package com.petshop.web.serviceImpl;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import com.petshop.web.entities.Board;
import com.petshop.web.repository.BoardRepository;
import com.petshop.web.repository.TxRepository;
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

   @Autowired TxRepository tx;

    @Override
    public Board save(Board entity) {
        return repo.save(entity);
    }

    @Override
    public Board findByBno(Long id) {
        return repo.findByBno((Long)id);
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

    @Override
    public List<HashMap<String,String>> getBoardList() {
        tx.getBoardList();
       List<Object[]> arr =  null;
       HashMap<String, String> map = new HashMap<>();

       // b.bno, b.cnt, b.content, b.date, b.title, b.writerid, m.address, m.email, m.memberid, m.membername
       String[] col = {"bno", "cnt", "content", "date", "title", "writerid", "address", "email", "memberid", "membername"};
       List<HashMap<String,String>> list = new ArrayList<>();                 
       System.out.println("arr size : "+arr.size());
       for(int i=0;i<arr.size();i++){
           String[] strArr = Arrays.asList(arr.get(i)).toArray(new String[0]);
           System.out.println(Arrays.toString(strArr));
           for(int j=0;j<arr.get(i).length;j++){ // String.valueOf
            System.out.println("arr.get(i).length : "+arr.get(i).length);
            System.out.println("컬럼명 "+ col[j]);
            System.out.println("=====> "+String.valueOf(arr.get(i)).toString());
                map.put(col[j],String.valueOf(arr.get(j)));
           }
           list.add(map);
       }
       return list;
    }
    

}
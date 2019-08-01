package com.petshop.web.repository;

import com.petshop.web.entities.Reply;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReplyRepository extends CrudRepository<Reply,Long> {

    
}
package com.petshop.web.repository;

import com.petshop.web.entities.Shop;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * ShopRepository
 */
@Repository
public interface ShopRepository extends CrudRepository<Shop,Long> {

    
}
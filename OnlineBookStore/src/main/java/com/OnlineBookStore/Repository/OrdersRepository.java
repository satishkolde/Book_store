package com.OnlineBookStore.Repository;

import org.springframework.data.repository.CrudRepository;

import com.OnlineBookStore.Models.Orders;

public interface OrdersRepository extends CrudRepository<Orders,Integer> {
}

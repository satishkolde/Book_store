package com.OnlineBookStore.Repository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.OnlineBookStore.Models.CartItem;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface CartItemRepository extends CrudRepository<CartItem,Integer> {

    @Query("select ci from CartItem ci where ci.user_id = ?1 and ci.book_id = ?2")
    public Optional<CartItem> findByUserIdAndBookId(int user_id, int book_id);

    @Transactional
    @Modifying
    @Query("delete from CartItem ci where ci.user_id = ?1 and ci.book_id = ?2")
    public int deleteByUserIdAndBookId(int user_id,int book_id);

    @Query("select ci from CartItem ci where ci.user_id = ?1")
    public Iterable<CartItem> findByUserId(int user_id);

}

package com.OnlineBookStore.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.OnlineBookStore.Models.Book;

public interface BookRepository extends CrudRepository<Book,Integer> {

    @Query("select bk from Book bk where bk.category = ?1")
    public Iterable<Book> findByCategory(String category);
}

package com.OnlineBookStore.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.OnlineBookStore.Models.User;

public interface UserRepository extends CrudRepository<User,Integer> {

    @Query("select u from User u where u.username = ?1 and u.password = ?2")
    User findByUsernameAndPassword(String username, String password);
}

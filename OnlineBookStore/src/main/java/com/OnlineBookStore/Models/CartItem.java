package com.OnlineBookStore.Models;

import jakarta.persistence.*;
/*
CREATE TABLE cart_items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT,
    book_id BIGINT,
    quantity INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);
*/

@Entity
public class CartItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private int user_id;

    @Column
    private int book_id;

    @Column
    private int quantity;

    public CartItem(){}

    public CartItem(int user_id,int book_id,int quantity){
        this.user_id = user_id;
        this.book_id = book_id;
        this.quantity = quantity;
    }

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public int getUser_id(){
        return user_id;
    }

    public void setUser_id(int user_id){
        this.user_id = user_id;
    }

    public int getBook_id(){
        return book_id;
    }

    public void setBook_id(int book_id){
        this.book_id = book_id;
    }

    public int getQuantity(){
        return quantity;
    }

    public void setQuantity(int quantity){
        this.quantity = quantity;
    }

}

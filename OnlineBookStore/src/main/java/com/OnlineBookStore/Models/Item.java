package com.OnlineBookStore.Models;

public class Item {
    private int book_id;
    private int user_id;
    private int quantity;

    public Item(int user_id,int book_id,int quantity){
        this.book_id = book_id;
        this.user_id = user_id;
        this.quantity = quantity;
    }

    public int getBook_id(){
        return book_id;
    }

    public void setBook_id(int book_id){
        this.book_id = book_id;
    }

    public int getUser_id(){
        return user_id;
    }

    public void setUser_id(int user_id){
        this.user_id = user_id;
    }

    public int getQuantity(){
        return quantity;
    }

    public void setQuantity(int quantity){
        this.quantity = quantity;
    }
}

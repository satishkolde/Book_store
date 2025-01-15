package com.OnlineBookStore.Models;

public class DisplayCart {
    private String title;
    private int price;
    private int id;
    private int quantity;
    private int book_id;

    public DisplayCart(String title,int price,int id,int quantity,int book_id){
        this.title = title;
        this.price = price;
        this.id = id;
        this.quantity = quantity;
        this.book_id = book_id;
    }

    public int getBook_id() {
        return book_id;
    }

    public int getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public int getPrice() {
        return price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setBook_id(int book_id) {
        this.book_id = book_id;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}

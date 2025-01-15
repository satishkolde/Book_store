/*

CREATE TABLE books (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    price DECIMAL(10, 2) NOT NULL,
    description TEXT,
    stock INT NOT NULL,
    category VARCHAR(100),
    image_url VARCHAR(255)
);
*/

package com.OnlineBookStore.Models;

import jakarta.persistence.*;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String title;

    @Column
    private String author;

    @Column
    private int price;

    @Column
    private String description;

    @Column
    private int stock;

    @Column
    private String category;

    @Column
    private String image_url;

    public Book() {}

    public Book(String title, String author, int price, String description, int stock, String category, String image_url){
        this.title = title;
        this.author = author;
        this.price = price;
        this.description = description;
        this.stock = stock;
        this.image_url = image_url;
        this.category = category;
    }

    public Book(Book book1){
        this.title = book1.title;
        this.author = book1.author;
        this.price = book1.price;
        this.description = book1.description;
        this.stock = book1.stock;
        this.image_url = book1.image_url;
        this.category = book1.category;
    }

    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getAuthor(){
        return author;
    }

    public void setAuthor(String author){
        this.author = author;
    }

    public int getPrice(){
        return price;
    }

    public void setPrice(int price){
        this.price = price;
    }

    public String getDescription(){
        return description;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public int getStock(){
        return stock;
    }

    public void setStock(int stock){
        this.stock = stock;
    }

    public String getCategory(){
        return category;
    }

    public void setCategory(String category){
        this.category = category;
    }

    public String getImage_url(){
        return image_url;
    }

    public void setImage_url(String image_url){
        this.image_url = image_url;
    }
}

package com.OnlineBookStore.Models;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.time.Instant;

/*
CREATE TABLE orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
*/

@Entity
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private int user_id;

    @Column
    private Instant order_date;

    @Column
    private int total;

    public Orders(){}

    public Orders(int user_id, Instant order_date, int total){
        this.user_id = user_id;
        this.order_date = order_date;
        this.total = total;
    }


    public int getId(){
        return id;
    }

    public void setId(int id){
        this.id = id;
    }

    public Instant getOrder_date(){
        return order_date;
    }

    public void setOrder_date(Instant order_date){
        this.order_date = order_date;
    }

    public int getTotal(){
        return total;
    }

    public void setTotal(int total){
        this.total = total;
    }

}

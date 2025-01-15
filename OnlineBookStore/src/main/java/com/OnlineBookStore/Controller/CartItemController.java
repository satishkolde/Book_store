package com.OnlineBookStore.Controller;

import com.OnlineBookStore.Models.*;
import com.OnlineBookStore.Repository.CartItemRepository;
import com.OnlineBookStore.Repository.BookRepository;
import com.OnlineBookStore.Repository.OrdersRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.Instant;
import java.util.ArrayList;
import java.util.Map;
import java.util.Optional;


@Controller
@RequestMapping("/cart")
public class CartItemController {

    @Autowired
    public CartItemRepository cartItemRepository;

    @Autowired
    public OrdersRepository ordersRepository;

    @Autowired
    public BookRepository bookRepository;

    @PostMapping("/add")
    public @ResponseBody String addItem(@RequestBody Item item){
        Optional<CartItem> temp = cartItemRepository.findByUserIdAndBookId(item.getUser_id(), item.getBook_id());
        if(temp.isPresent()){
            CartItem ci = temp.get();
            int quantity = ci.getQuantity() + item.getQuantity();
            ci.setQuantity(quantity);
            cartItemRepository.save(ci);
        }else{
            CartItem ci = new CartItem(item.getUser_id(), item.getBook_id(), item.getQuantity());
            cartItemRepository.save(ci);
        }
        return "Success";
    }

    @GetMapping("/items")
    public @ResponseBody Iterable<DisplayCart> returnItems(@RequestParam int id){
        System.out.println("Something is printed here " + id);
        ArrayList<DisplayCart> ds = new ArrayList<DisplayCart>();
        cartItemRepository.findByUserId(id).forEach(cartItem -> {
            Optional<Book> temp = bookRepository.findById(cartItem.getBook_id());
            Book bk = temp.get();
            ds.add(new DisplayCart(bk.getTitle(),bk.getPrice(),cartItem.getId(),cartItem.getQuantity(),cartItem.getBook_id()));
        });
        return ds;
    }

    @GetMapping("/delete")
    public @ResponseBody String removeItem(@RequestParam int id){
        System.out.println("deleted item");
        cartItemRepository.deleteById(id);
        return "success";
    }

    @GetMapping("/order")
    public @ResponseBody String addToOrders(@RequestParam int user_id){
        Iterable<CartItem> items = cartItemRepository.findByUserId(user_id);
        System.out.println("addToOrders is running");
        final int[] total = {0};
        items.forEach(cartItem -> {
            Optional<Book> bk = bookRepository.findById(cartItem.getBook_id());
            total[0] = total[0] + cartItem.getQuantity()*bk.get().getPrice();
            cartItemRepository.deleteById(cartItem.getId());
        });
        Instant timestamp = Instant.now();
        Orders temp = new Orders(user_id, timestamp,total[0]);
        return "success";
    }

}

package com.OnlineBookStore.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;

import com.OnlineBookStore.Models.Book;
import com.OnlineBookStore.Repository.BookRepository;

import java.util.Optional;


@Controller
@RequestMapping("/book")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @PostMapping("/add")
    public @ResponseBody String addBook(@RequestBody Book book){
        bookRepository.save(book);
        System.out.println(book.getStock());
        return "data is saved";
    }

//    @GetMapping("/id")
//    public @ResponseBody Book getBook(@RequestParam Integer id){
//        return bookRepository.findById(id).orElse(null);
//    }

    @PostMapping("/delete")
    public @ResponseBody String deleteBook(@RequestParam int id){
        bookRepository.deleteById(id);
        return "data is deleted!";
    }

    @PostMapping("/update")
    public @ResponseBody String updateBook(@ModelAttribute Book book){
        Optional<Book> temp = bookRepository.findById(book.getId());
        if(temp.isPresent()) {
            Book bk = temp.get();
            bookRepository.save(book);
            return "data is updated!";
        }
        return "data is not updated!";
    }

    @GetMapping("/")
    public @ResponseBody Iterable<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    @GetMapping("/{category}")
    public @ResponseBody Iterable<Book> getAllBooks(@PathVariable String category){
        return bookRepository.findByCategory(category);
    }

}

package com.OnlineBookStore.Controller;

import com.OnlineBookStore.Models.Auth;
import com.OnlineBookStore.Models.Login;
import com.OnlineBookStore.Models.User;
import com.OnlineBookStore.Repository.UserRepository;
import jakarta.servlet.http.HttpSession;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;
import org.springframework.web.servlet.view.RedirectView;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/regis")
    public String sendRegister(Model model){
        model.addAttribute("appName","Register");
        return "Register";
    }

    @PostMapping("/regis")
    public @ResponseBody Auth registerUser(@RequestBody User user){
        System.out.println(user.getUsername());
        userRepository.save(user);
        Auth au = new Auth(user.getId(),user.getRole());
        return au;
    }

//    @GetMapping("/login")
//    public String returnLoginPage(Model model){
//        model.addAttribute("appName","Login");
//        return "Login";
//    }

    @PostMapping("/login")
    public @ResponseBody Auth loginUser(@RequestBody Login log){
        System.out.println(log.getUsername()+" "+log.getPassword());
        User us = userRepository.findByUsernameAndPassword(log.getUsername(),log.getPassword());
        Auth au = new Auth(us.getId(),us.getRole());
        System.out.println(us.getUsername());
        return au;
    }

}

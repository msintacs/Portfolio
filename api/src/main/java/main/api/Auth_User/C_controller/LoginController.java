package main.api.Auth_User.C_controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import main.api.Auth_User.B_dto.LoginRequestDto;


@RestController
@RequestMapping("/login")
@RequiredArgsConstructor
public class LoginController {
    
    /* 사용자 로그인 */    
    @PostMapping
    public void userLogin(LoginRequestDto loginRequestDto) {
        System.out.println(loginRequestDto.toString());
    }
}

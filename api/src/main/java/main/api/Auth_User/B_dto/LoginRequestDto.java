package main.api.Auth_User.B_dto;

import lombok.Getter;
import lombok.ToString;

/*
    NAME: UserLoginDto
    DESCRIPTION: 회원 로그인 DTO
*/
@Getter
@ToString
public class LoginRequestDto {    
    private String email;                  // 유저 아이디
    private String pwd;                 // 유저 패스워드    
}

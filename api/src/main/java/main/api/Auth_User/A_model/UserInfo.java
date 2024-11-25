package main.api.Auth_User.A_model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;

/* 
	NAME: USER_INFO
    DESCRIPTION: 회원 정보 테이블
    스프링 시큐리티 참고사이트 : https://velog.io/@frog_slayer/Spring-Security-10
*/
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
@Table(name = "USER_INFO")
public class UserInfo {
    @Id
    @Column(name = "USER_IDX")
    private int userIdx;                        // 유저 인덱스

    @Column(name = "ROLE")
    private char role;                          // 유저 권한

    @Column(name = "EMAIL")
    private String email;                       // 유저 이메일

    @Column(name = "PWD")
    private String pwd;                         // 유저 패스워드

    @Column(name = "NAME")
    private String name;                        // 유저 이름

    @Column(name = "NICKNAME")
    private String nickname;                    // 유저 별명

    @Column(name = "PHONE")
    private String phone;                       // 유저 전화번호

    @Column(name = "REG_DATE")
    private LocalDateTime regDate;              // 유저 등록일시
}

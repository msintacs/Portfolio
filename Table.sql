USE ksb;

/*
	NAME: USER_INFO
    DESCRIPTION: 회원 정보 테이블 
*/
DROP TABLE IF EXISTS USER_INFO ;
CREATE TABLE USER_INFO (
	USER_IDX 		int				PRIMARY KEY			NOT NULL,
    ROLE			char(1)			DEFAULT 'U'			NOT NULL,
    ID				varchar(20)		UNIQUE				NOT NULL,
    PWD				varchar(200)						NOT NULL,
    NAME			varchar(10)							NOT NULL,
    NICKNAME		varchar(15)									,
    EMAIL			varchar(100)								,
    PHONE			varchar(15)									,
    REG_DATE        datetime        DEFAULT CURRENT_TIMESTAMP
);

/*
    NAME: LOTTO
    DESCRIPTION: 로또 당첨번호 및 당첨금액 테이블
*/
DROP TABLE IF EXISTS LOTTO ;
CREATE TABLE LOTTO (
    D_DATE          datetime        PRIMARY KEY         NOT NULL,
    ROUND           int                                         ,
    NUM1            tinyint                                     ,
    NUM2            tinyint                                     ,
    NUM3            tinyint                                     ,
    NUM4            tinyint                                     ,
    NUM5            tinyint                                     ,
    NUM6            tinyint                                     ,
    BONUS_NUM       tinyint                                     ,
    FIRST_PRIZE     int                                         ,
    SECOND_PRIZE    int                                         ,
    THIRD_PRIZE     int                                         ,
    FOURTH_PRIZE    int                                         ,
    FIFTH_PRIZE     int
);

/*
    NAME: PENSION_LOTTERY
    DESCRIPTION: 연금복권 당첨번호 테이블
*/
DROP TABLE IF EXISTS PENSION_LOTTERY ;
CREATE TABLE PENSION_LOTTERY (
    D_DATE          datetime        PRIMARY KEY         NOT NULL,
    ROUND           int                                         ,
    W_GROUP         tinyint                                     ,
    NUM1            tinyint                                     ,
    NUM2            tinyint                                     ,
    NUM3            tinyint                                     ,
    NUM4            tinyint                                     ,
    NUM5            tinyint                                     ,
    NUM6            tinyint                                     ,
    BONUS_NUM1      tinyint                                     ,
    BONUS_NUM2      tinyint                                     ,
    BONUS_NUM3      tinyint                                     ,
    BONUS_NUM4      tinyint                                     ,
    BONUS_NUM5      tinyint                                     ,
    BONUS_NUM6      tinyint
);
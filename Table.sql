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
DROP TABLE IF EXISTS DRAW_LOTTO ;
DROP TABLE IF EXISTS DRAW_LOTTO ;
CREATE TABLE DRAW_LOTTO (
    DRAW_ROUND      INT         PRIMARY KEY NOT NULL    COMMENT '추첨 회차',
    DRAW_DATE       DATE        NOT NULL                COMMENT '추첨 일자',
    NUM_1           TINYINT     NOT NULL                COMMENT '번호 1',
    NUM_2           TINYINT     NOT NULL                COMMENT '번호 2',
    NUM_3           TINYINT     NOT NULL                COMMENT '번호 3',
    NUM_4           TINYINT     NOT NULL                COMMENT '번호 4',
    NUM_5           TINYINT     NOT NULL                COMMENT '번호 5',
    NUM_6           TINYINT     NOT NULL                COMMENT '번호 6',
    BONUS_NUM       TINYINT     NOT NULL                COMMENT '보너스 번호',
    TOT_SALES_AMT   BIGINT                              COMMENT '총 판매 금액',          -- tot_sales_amount -> tot_sales_amt
    FST_WIN_CNT     TINYINT                             COMMENT '1등 당첨자 수',         -- first_winner_count -> fst_win_cnt
    FST_TOT_AMT     BIGINT                              COMMENT '1등 당첨 총 금액',       -- total_first_prize_amount -> fst_tot_amt
    FST_INDV_AMT    BIGINT                              COMMENT '1등 개인 당첨 금액'      -- individual_first_prize_amount -> fst_indv_amt
);

/*
    NAME: PENSION_LOTTERY
    DESCRIPTION: 연금복권 당첨번호 테이블
*/
DROP TABLE IF EXISTS DRAW_PENSION ;
CREATE TABLE DRAW_PENSION (
    DRAW_ROUND          INT         PRIMARY KEY NOT NULL COMMENT '추첨 회차',
    DRAW_DATE           DATE        NOT NULL COMMENT '추첨 일자',
    WIN_GROUP           TINYINT     NOT NULL COMMENT '1등 당첨 조',
    NUM_1               TINYINT     NOT NULL COMMENT '1등 번호 1자리',
    NUM_2               TINYINT     NOT NULL COMMENT '1등 번호 2자리',
    NUM_3               TINYINT     NOT NULL COMMENT '1등 번호 3자리',
    NUM_4               TINYINT     NOT NULL COMMENT '1등 번호 4자리',
    NUM_5               TINYINT     NOT NULL COMMENT '1등 번호 5자리',
    NUM_6               TINYINT     NOT NULL COMMENT '1등 번호 6자리',
    B_DIGIT_1           TINYINT     NOT NULL COMMENT '보너스 번호 1자리', -- 보너스 번호 저장 방식 수정
    B_DIGIT_2           TINYINT     NOT NULL COMMENT '보너스 번호 2자리', -- 보너스 번호 저장 방식 수정
    B_DIGIT_3           TINYINT     NOT NULL COMMENT '보너스 번호 3자리', -- 보너스 번호 저장 방식 수정
    B_DIGIT_4           TINYINT     NOT NULL COMMENT '보너스 번호 4자리', -- 보너스 번호 저장 방식 수정
    B_DIGIT_5           TINYINT     NOT NULL COMMENT '보너스 번호 5자리', -- 보너스 번호 저장 방식 수정
    B_DIGIT_6           TINYINT     NOT NULL COMMENT '보너스 번호 6자리'  -- 보너스 번호 저장 방식 수정
);
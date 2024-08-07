export const object = [
  {
    id: "1",
    company: "젬텍 (주)",
    duration: "2023.10 ~ 재직중",
    job: "( 소프트웨어 개발 )",
    introText:
      "문자메시지 서비스를 제공하는 업체입니다. \n" +
      "기본적으로 문자메시지 전송을 위한 클라이언트 모듈 개발을 담당하였으며," +
      "고객사 에러 상황또는 문의사항에 응대하며 개발을 진행하였습니다." +
      "추가로 여러 시스템 중 일부의 관리자 웹 페이지를 담당하였으며 기존 운영중인 웹페이지를 새롭게 리뉴얼 하였습니다.",
    content: [
      {
        title: "관리자 웹페이지 리뉴얼",
        projectDuration: "2023.03 ~ 현재",
        responsibilities: "신규 DB 구조에 따른 기존 관리자 웹 페이지 리뉴얼",
        skills: "React / Spring Boot / JPA / MySQL",
        mainText:
          "변경 된 DB 구조에 따른 기존 웹페이지 수정 \n" +
          "기존페이지에서 신규페이지로 전환 \n" +
          "(JSP, SpringBoot, Mybatis -> React, SpringBoot, JPA) \n" +
          "Entity-DTO-Controller-Service-Repository 로 이어지는 로직 전체 수정 \n" +
          "변경된 Response 값에 따른 React Component 수정",
      },
      {
        title: "JAVA TCP Socket 클라이언트 모듈 유지 보수 개발",
        projectDuration: "2023.11 ~ 현재",
        responsibilities: "모듈 사용 시 발생 되는 버그에 대한 수정 작업",
        skills: "JAVA / RDBMS (MySQL, MariaDB, Oracle, MSSQL)",
        mainText:
          "모듈 사용 시 발생되는 버그 및 오류에 대한 수정 \n" +
          "사용자 요구에 의한 모듈 수정 (DB 호환성 주입 및 타 RDBMS 확장 등) \n" +
          "사용성 개선 (문제 추적에 용이하도록 로그 기록 개선 및 멀티스레드 동작 순서 개선으로 인한 성능 개선 등)",
      },
    ],
  },
  {
    id: "2",
    company: "(주) 아이하트",
    duration: "2020.04 ~ 2022.09",
    job: "( 시스템 엔지니어 )",
    introText:
      "문자메시지 서비스를 제공하는 업체입니다. \n" +
      "자체 내부 솔루션을 고객사에 납품 설치를 하며 유지보수까지 담당하였습니다." +
      "문자 메시지 발송을 위한 클라이언트의 에러 및 문의사항을 접수받고" +
      "테스트 및 검증을 거쳐 개발팀에 전달하는 역할을 하였습니다." +
      "문자메시지 Gatway 운영을 보조하며 불법 스펨메시지들을 차단하고" +
      "문자 발송 흐름을 제어하는 역할을 담당하였습니다.",
    content: [
      {
        title: "문자 메시지 전송 Gateway 운영 보조",
        projectDuration: "2021.02 ~ 2022.09",
        responsibilities: "문자 메시지 전송 현황 모니터링 및 메시지 흐름 제어",
        skills: "Linux CentOS / Oracle",
        mainText:
          "지속적인 메시지 유입 현황 체크 및 분산 처리 \n" +
          "메인 DB 에서 고객사 요청에 따른 메시지 조회 및 수/발신 차단 처리",
      },
      {
        title: "문자 메시지 전송 모듈 사용 가이드 및 고객사 응대",
        projectDuration: "2020.11 ~ 2022.09",
        responsibilities: "모듈 사용 고객 응대 및 가이드 응대",
        mainText:
          "DB 연동 모듈 사용 고객 응대, 가이드 \n" +
          "신규 기능 및 수정 사항에 대한 테스트",
      },
      {
        title: "솔루션 설치 및 유지보수 방문 점검",
        projectDuration: "2020.05 ~ 2022.09",
        responsibilities: "솔루션 납품 설치 및 정기 유지 보수 방문 점검",
        mainText:
          "고객사에 솔루션을 납품하고 설치 \n" +
          "기 설치 된 고객사에 방문하여 정기점검 수행 \n" +
          "장애 발생 시 트러블슈팅",
      },
    ],
  },
];

export default object;

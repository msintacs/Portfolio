# Portfolio Project Setup

1. API 설정 :
  - `api/src/main/resources/application.yaml.template`를 복사하여 `application.yaml` 파일을 만듭니다.
  - 필요한 설정값을 변경하여 사용합니다.

2. UI 설정 :
  - `ui/.env.development.template`을 복사하여 `.env.development`를 만듭니다.
  - 필요한 설정값을 변경하여 사용합니다.


# Project Structure
```
src/
├── features/
│   ├── portfolio/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── AboutMe/
│   │   │   ├── HeroSection/
│   │   │   ├── Skills/
│   │   │   └── Projects/
│   │   ├── pages/
│   │   │   ├── Portfolio.jsx
│   │   │   └── index.js
│   │   └
│   │
│   └── lottoStats/
│       ├── assets/
│       ├── components/
│       │   ├── Dashboard/
│       │   ├── Sidebar/
│       │   └── Header.jsx
│       ├── context/
│       ├── pages/
│       │   ├── LottoStats.jsx
│       │   └── index.js
│       ├── share/
│       └
└
```

# Project 1.
복권 통계 사이트

로또6/45, 연금복권720+ 등의 당첨 번호 및 역대 당첨 통계를
관리자 사이트 형식을 차용하여 만든 사이트.

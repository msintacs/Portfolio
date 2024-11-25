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
├── components/                         # 공통으로 사용되는 컴포넌트
│   ├── Button/
│   ├── Card/
│   └── Select/          		
│
├── pages/               
│   ├── portfolio/       		# 메인 포트폴리오 페이지들
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── portfolio.jsx
│   │   └── index.js
│   │
│   └── project 1/       		# 독립적인 프로젝트 페이지들
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── utils/
│   │   ├── Project1.jsx/
│   │   └── index.js/
│   │
│   └── project 2/       		
│        ├── components/
│        ├── hooks/
│        ├── utils/
│        ├── Project2.jsx/
│        └── index.js/
│
├── layout/
│   ├── PortfolioLayout/  	        # 포트폴리오 전용 레이아웃
│   ├── Project1Layout/		         
│   └── Project2Layout/    		
└──
```

# Project 1.
복권 통계 사이트

로또6/45, 연금복권720+ 등의 당첨 번호 및 역대 당첨 통계를
관리자 사이트 형식을 차용하여 만든 사이트.

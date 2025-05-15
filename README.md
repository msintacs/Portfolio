# Portfolio Project Setup

1. API 설정 :
  - `api/src/main/resources/application.yaml.template`를 복사하여 `application.yaml` 파일을 만듭니다.
  - 필요한 설정값을 변경하여 사용합니다.

2. UI 설정 :
  - `ui/.env.development.template`을 복사하여 `.env.development`를 만듭니다.
  - 필요한 설정값을 변경하여 사용합니다.

---

## 📌 Project 1. 프로젝트 개요 (로또 통계 사이트)

- **목적**: 대량의 로또 데이터를 정리하고, 이를 시각적으로 쉽게 분석할 수 있는 웹 기반 플랫폼 구축
- **특징**:
  - 엑셀(.xlsx) 파일 업로드 → DB 저장 → 실시간 통계 반영
  - 번호별 출현 빈도, 회차별 정보 등 시각화

---

## 🛠 기술 스택

| 영역 | 기술 |
|------|------|
| 프론트엔드 | React, Tailwind CSS |
| 백엔드 | Java, Spring Boot, JPA |
| 데이터베이스 | MySQL |
| 기타 | Axios, react-router-dom, Lombok |

---

## 🖼 주요 기능 미리보기

| 엑셀 업로드 | 통계 대시보드 |
|-------------|----------------|
| <img src="https://github.com/user-attachments/assets/1b81d1e4-0b6e-486f-969f-0fccdf9930f7" width="400" /> | <img src="https://github.com/user-attachments/assets/77463624-7d2e-4e9a-bb72-53b4fbe1b225" width="400" />|


> 👉 실행 중인 사이트: [7imsb.info](https://7imsb.info:32443/lotto)

---

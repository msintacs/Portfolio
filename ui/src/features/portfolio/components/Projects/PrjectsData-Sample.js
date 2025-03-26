export const projectsDataSample = {
  title: "Projects",
  subTitle: "주요 프로젝트",
  projects: [
    {
      id: 1,
      title: "로또 통계 사이트",
      description:
        "로또 6/45, 연금복권 720+ 등의 당첨 번호 및 역대 당첨 통계를 관리자 사이트 형식으로 보여주는 웹 애플리케이션",
      image: "/api/placeholder/400/200", // 이미지 파일 경로
      technologies: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
      demoLink: "/lotto", // 실제 프로젝트 라우트
      codeLink: "https://github.com/msintacs/Portfolio",
    },
    {
      id: 2,
      title: "Java TCP Socket 클라이언트",
      description:
        "Java 기반의 TCP Socket 프로토콜을 사용한 클라이언트 모듈 개발 및 유지보수",
      image: "/api/placeholder/400/200", // placeholder 이미지
      technologies: ["Java", "Socket API", "TCP/IP"],
      demoLink: "",
      codeLink: "",
    },
    {
      id: 3,
      title: "Gateway 시스템",
      description:
        "C 기반 메시징 Gateway 시스템 운영 및 개발, IPC 및 프로세스 관리 최적화",
      image: "/api/placeholder/400/200", // placeholder 이미지
      technologies: ["C", "Linux", "IPC"],
      demoLink: "",
      codeLink: "",
    },
  ],
  showMoreLink: "https://github.com/msintacs", // GitHub 프로필 링크
};

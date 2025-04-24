import LottoMainPageImg from "../../assets/lotto-main.png";
import FtpClientImg from "../../assets/ftpClient.png";

export const projectsData = {
  title: "Projects",
  subTitle: "주요 프로젝트",
  projects: [
    {
      id: 1,
      title: "로또 통계 사이트",
      isSelected: true,
      image: LottoMainPageImg,
      technologies: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
      summary:
        "로또 6/45, 연금복권 720+ 등의 당첨 번호 및 역대 당첨 통계를 관리자 사이트 형식으로 보여주는 웹 애플리케이션",
      features: ["데이터 시각화 및 통계 분석", "실시간 데이터 업데이트"],
      description:
        "본 프로젝트는 React / SpringBoot / Tailwind CSS 기술을 활용하여 개발되었습니다. 프론트엔드와 백엔드를 연결하는 RESTful API 를 구현하였습니다.",
      demoLink: "/lotto",
      codeLink: "https://github.com/msintacs/Portfolio",
    },
    {
      id: 2,
      title: "C FTP Client",
      isSelected: false,
      image: FtpClientImg,
      technologies: ["C"],
      summary: "C 기반의 FTP 프로토콜을 이용한 FTP CLI 클라이언트 프로그램",
      features: [
        "CLI 기반의 문답형 클라이언트 프로그램",
        "서버로의 파일 업/다운로드",
      ],
      description:
        "본 프로젝트는 C 언어를 기술을 활용하여 개발되었습니다. CLI 방식으로 CMD 창을 통해 서버-클라이언트간 FTP 업/다운로드를 구현하였습니다.",
      codeLink: "https://github.com/msintacs/C-FTPClient",
    },
  ],
};

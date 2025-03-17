import MonitorIcon from "@mui/icons-material/Monitor";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";

/**
 * @returns 사이드바 메뉴 정의 객체
 */
export const menu = [
  {
    menuName: "모니터링",
    icon: <MonitorIcon />,
    subMenu: [
      { subName: "구매 현황", href: "/" },
      { subName: "당첨 현황", href: "/lotto/main" },
    ],
  },
  {
    menuName: "고객 관리",
    icon: <PeopleAltIcon />,
    href: "",
    subMenu: [{ subName: "고객 관리", href: "" }],
  },

  {
    menuName: "통계",
    icon: <QueryStatsIcon />,
    href: "",
    subMenu: [
      { subName: "연간 통계", href: "/lotto/stats/year" },
      { subName: "월간 통계", href: "" },
      { subName: "고객별 통계", href: "" },
      { subName: "당첨번호별 통계", href: "" },
    ],
  },
];

export default menu;

import Sidebar from "@/components/Sidebar";
import type { ComponentProps } from "react";

const authSidebar: ComponentProps<typeof Sidebar> = {
  title: "계정 관리",
  items: [
    {
      label: "로그인",
      href: "/auth/login",
    },
    {
      label: "운영진 계정 등록",
      href: "/auth/signup",
    },
    {
      label: "계정 상세 정보 편집",
      href: "/auth/edit",
    },
    {
      label: "권한 관리",
      href: "/auth/permission",
    },
  ],
};

const memberSidebar: ComponentProps<typeof Sidebar> = {
  title: "회원 관리",
  items: [
    {
      label: "현 기수 관리",
      href: "/member",
      subItems: [
        {
          label: "대시보드",
          href: "/member/dashboard",
        },
        {
          label: "출석체크",
          href: "/member/attendance",
        },
      ],
    },
    {
      label: "이전 기수 데이터",
      href: "/member/previous",
    },
  ],
};

const sessionSidebar: ComponentProps<typeof Sidebar> = {
  title: "세션/마일스톤 관리",
  items: [
    {
      label: "새 기수 시작",
      href: "/session/new",
    },
    {
      label: "현 기수 관리",
      href: "/session",
      subItems: [
        {
          label: "마일스톤 & 세션",
          href: "/session",
        },
      ],
    },
    {
      label: "이전 기수 데이터",
      href: "/session/previous",
    },
  ],
};

const recruitSidebar: ComponentProps<typeof Sidebar> = {
  title: "리쿠르팅",
  items: [
    {
      label: "새 기수 시작",
      href: "/recruit",
    },
    {
      label: "홍보 관리",
      href: "/recruit/promotion/channel",
      subItems: [
        {
          label: "홍보 채널 관리",
          href: "/recruit/promotion/channel",
        },
        {
          label: "홍보 문구 관리",
          href: "/recruit/promotion/text",
        },
      ],
    },
    {
      label: "대시보드",
      href: "/recruit/dashboard",
    },
    {
      label: "선발하기",
      href: "/recruit/selection",
    },
  ],
};

export const sidebarList = [
  authSidebar,
  memberSidebar,
  sessionSidebar,
  recruitSidebar,
];

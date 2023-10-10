import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import type { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Flex pt="80px" h="100vh">
        <Sidebar
          title="회원 관리"
          items={[
            { label: "회원가입", href: "/auth/register" },
            {
              label: "로그인",
              href: "/auth/login",
              subItems: [
                { label: "로그인", href: "/auth/login" },
                { label: "로그아웃", href: "/auth/logout" },
              ],
            },
          ]}
        />
        <Box as="main" flex="1" p="36px">
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default Layout;

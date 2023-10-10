import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import type { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import { sidebarList } from "@/constants/sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const currentPath = `/${pathname.split("/")[1]}`;

  const sidebarProps = sidebarList.find(({ items }) =>
    items[0].href.startsWith(currentPath),
  );

  return (
    <>
      <Header currentPath={currentPath} />
      <Flex pt="80px" h="100vh">
        {sidebarProps && <Sidebar {...sidebarProps} />}
        <Box as="main" flex="1" p="36px">
          {children}
        </Box>
      </Flex>
    </>
  );
};

export default Layout;

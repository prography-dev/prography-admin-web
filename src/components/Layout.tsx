import { Box, Flex } from '@chakra-ui/react'
import Header from './Header'
import Sidebar from './Sidebar'
import type { PropsWithChildren } from 'react'
import { usePathname } from 'next/navigation'
import { sidebarList } from '@/constants/sidebar'

const Layout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname()

  const sidebarProps = sidebarList.find((sidebar) => pathname.startsWith(sidebar.href))

  if (!sidebarProps) {
    return children
  }

  return (
    <Box h="100vh">
      <Header currentPath={sidebarProps.href} />
      <Flex h="calc(100vh - 80px)">
        {sidebarProps && <Sidebar {...sidebarProps} />}
        <Box as="main" flex="1" p="36px" overflowY="scroll">
          {children}
        </Box>
      </Flex>
    </Box>
  )
}

export default Layout

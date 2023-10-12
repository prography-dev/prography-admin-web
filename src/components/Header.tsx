import { Center, HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'

const pathList = [
  {
    href: '/auth',
    label: '계정',
  },
  {
    href: '/member',
    label: '멤버',
  },
  {
    href: '/session',
    label: '세션',
  },
  {
    href: '/recruit',
    label: '모집',
  },
] as const

type Props = {
  currentPath: string
}

const Header = ({ currentPath }: Props) => {
  return (
    <Center position="relative" h="80px" bg="gray.900">
      <HStack spacing="30px">
        {pathList.map((path) => (
          <Link key={path.href} href={path.href}>
            <Center>
              <Text
                fontSize="lg"
                fontWeight="bold"
                color={currentPath === path.href ? 'white' : 'gray.600'}
              >
                {path.label}
              </Text>
            </Center>
          </Link>
        ))}
      </HStack>
      <Center gap="24px" position="absolute" right="36px">
        <Link href="/auth/login">
          <Text fontSize="md" color="white">
            로그인
          </Text>
        </Link>
        <Link href="/auth/signup">
          <Text fontSize="md" color="white">
            계정 등록
          </Text>
        </Link>
      </Center>
    </Center>
  )
}

export default Header

import { Heading, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Item = {
  label: string
  href: string
  subItems?: Omit<Item, 'subItems'>[]
}

type Props = {
  title: string
  items: Item[]
}

const Sidebar = ({ title, items }: Props) => {
  return (
    <Stack w="280px" h="100%" bg="gray.50" p="36px" overflowY="scroll">
      <Text fontSize="14px" fontWeight="700" mb="36px" color="black">
        {title}
      </Text>
      <Stack spacing="25px">
        {items.map((item) => (
          <SideItem key={item.label} {...item} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Sidebar

const SideItem = ({ label, href, subItems }: Item) => {
  const pathname = usePathname()

  const isActive = href === pathname || subItems?.some((subItem) => subItem.href === pathname)

  return (
    <Stack spacing="12px">
      <Link href={href}>
        <Heading size="sm" color={isActive ? 'black' : 'gray.500'}>
          {label}
        </Heading>
      </Link>
      {subItems?.map((subItem) => <SideSubItem key={subItem.label} {...subItem} />)}
    </Stack>
  )
}

const SideSubItem = ({ label, href }: Item) => {
  const pathname = usePathname()
  const isActive = href === pathname

  return (
    <Link href={href}>
      <Text
        ml="32px"
        color={isActive ? 'black' : 'gray.500'}
        bg={isActive ? 'gray.100' : 'transparent'}
        p="4px 8px"
      >
        {label}
      </Text>
    </Link>
  )
}

import { Center, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const paths = [
  {
    href: "/auth",
    label: "계정",
  },
  {
    href: "/members",
    label: "멤버",
  },
  {
    href: "/sessions",
    label: "세션",
  },
  {
    href: "/recruit",
    label: "모집",
  },
];

const Header = () => {
  const pathname = usePathname();
  const currentPath = `/${pathname.split("/")[1]}`;

  return (
    <Center
      position="fixed"
      top="0"
      left="0"
      h="80px"
      w="100%"
      zIndex="sticky"
      bg="gray.900"
    >
      <HStack spacing="30px">
        {paths.map((path) => (
          <Link key={path.href} href={path.href}>
            <Center>
              <Text
                fontSize="lg"
                fontWeight="bold"
                color={currentPath === path.href ? "white" : "gray.600"}
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
  );
};

export default Header;

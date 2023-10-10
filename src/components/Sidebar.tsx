import { Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = {
  label: string;
  href: string;
  subItems?: Omit<Item, "subItems">[];
};

type Props = {
  title: string;
  items: Item[];
};

const Sidebar = ({ title, items }: Props) => {
  const pathname = usePathname();

  return (
    <Stack w="280px" h="calc(100vh - 80px)" bg="gray.50" float="left" p="36px">
      <Text fontSize="14px" fontWeight="700" mb="36px" color="black">
        {title}
      </Text>
      <Stack spacing="25px">
        {items.map((item) => {
          const isActive =
            item.href === pathname ||
            item.subItems?.some((subItem) => subItem.href === pathname);

          return (
            <Stack key={item.label} spacing="12px">
              <Link href={item.href}>
                <Heading size="sm" color={isActive ? "black" : "gray.500"}>
                  {item.label}
                </Heading>
              </Link>
              {item.subItems?.map((subItem) => {
                const isActive = subItem.href === pathname;

                return (
                  <Link href={subItem.href} key={subItem.label}>
                    <Text
                      ml="32px"
                      color={isActive ? "black" : "gray.500"}
                      bg={isActive ? "gray.100" : "transparent"}
                    >
                      {subItem.label}
                    </Text>
                  </Link>
                );
              })}
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Sidebar;

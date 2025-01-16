import { EColors } from "@/enums/EColors";
import { Flex, Heading, HStack, VStack, Text } from "@chakra-ui/react";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

type TItemProps = {
  icon: keyof typeof Icons;
  title: string;
  text: string;
};

export default function Item({ icon, title, text }: TItemProps) {
  const SelectedIcon = Icons[icon] as LucideIcon;

  return (
    <Flex flexDir="column" alignItems="center" gap={4}>
      {SelectedIcon && <SelectedIcon size={50} color={EColors.orange} />}
      <Heading>{title}</Heading>
      <Text>{text}</Text>
    </Flex>
  );
}

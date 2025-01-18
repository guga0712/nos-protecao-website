import { EColors } from "@/enums/EColors";
import { Divider, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Item from "../Item";
import * as Icons from "lucide-react";

export default function About() {
  const items: { icon: keyof typeof Icons; title: string; text: string }[] = [
    {
      icon: "Truck",
      title: "Veículos Seguros",
      text: "State-of-the-art technology for maximum protection",
    },
    {
      icon: "Shield",
      title: "Proteção de Cargas",
      text: "Trusted by leading businesses worldwide",
    },
    {
      icon: "Clock",
      title: "Tempo de Garantia",
      text: "Protecting cargo across international borders",
    },
  ];

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      color={EColors.white}
      gap={14}
      pb="100px"
    >
      <Heading fontSize={{ base: "30px", lg: "50px" }} color={EColors.orange}>
        Sobre a Nós Proteção
      </Heading>
      <Text maxW="600px" textAlign="center" fontSize={20}>
        With over two decades of experience, SecureCargo leads the industry in
        innovative cargo security solutions. Our commitment to quality and
        reliability ensures your goods are protected at every step of their
        journey.
      </Text>
      <Flex
        w="100%"
        marginLeft={{ lg: "-10" }}
        justifyContent="space-between"
        flexDir={{ base: "column", lg: "row" }}
        alignItems={{ base: "center" }}
        gap={{ base: 10 }}
      >
        {items.map((item, index) => {
          return (
            <Flex key={index}>
              <Item icon={item.icon} title={item.title} text={item.text} />
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
}

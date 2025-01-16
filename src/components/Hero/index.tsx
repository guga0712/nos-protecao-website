import { EColors } from "@/enums/EColors";
import {
  Flex,
  Heading,
  HStack,
  VStack,
  Text,
  Button,
  Image,
  Link,
} from "@chakra-ui/react";
import About from "../About";

export default function Hero() {
  return (
    <Flex
      color={EColors.orange}
      pt={{ base: "25px", lg: "150px" }}
      gap={10}
      justifyContent={{ md: "start", lg: "space-between" }}
      flexDirection={{ base: "column", lg: "row" }}
      pb={{ base: "50px", lg: "150px" }}
    >
      <VStack alignItems="start" gap={{ base: "5", lg: "10" }}>
        <VStack alignItems="start">
          <Heading lineHeight="0.8" fontSize={{ base: "40px", lg: "70px" }}>
            Soluções em Plásticos,
          </Heading>
          <Heading lineHeight="0.8" fontSize={{ base: "40px", lg: "70px" }}>
            Proteção em Movimento.
          </Heading>
        </VStack>
        <Text color={EColors.white} fontSize={20}>
          Premium cargo security solutions for the modern world
        </Text>
        <Button
          background={EColors.orange}
          color={EColors.darkblue}
          size="lg"
          as="a"
          href="#produtos"
          _hover={{ background: "var(--orange-700)" }}
          fontWeight="bold"
        >
          Conheça nossos produtos
        </Button>
      </VStack>
      <Image
        src="/caminhao-truck.jpg"
        alt={"Place"}
        width={500}
        rounded="md"
      ></Image>
    </Flex>
  );
}

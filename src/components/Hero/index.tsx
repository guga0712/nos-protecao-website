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
      pt={{ base: "25px", lg: "200px" }}
      gap={10}
      justifyContent={{ md: "start", lg: "space-between" }}
      flexDirection={{ base: "column", lg: "row" }}
      pb={{ base: "50px", lg: "200px" }}
      alignItems="center"
    >
      <VStack alignItems="start" gap={{ base: "5", lg: "10" }}>
        <VStack alignItems="start">
          <Heading lineHeight="1" fontSize={{ base: "40px", lg: "65px" }}>
            Soluções em Plásticos,
          </Heading>
          <Heading lineHeight="1" fontSize={{ base: "40px", lg: "65px" }}>
            Proteção em Movimento.
          </Heading>
        </VStack>
        <Text color={EColors.white} fontSize={20}>
          Proteção que faz a diferença: segurança, resistência e qualidade para
          sua carga.
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
        width={600}
        rounded="md"
      ></Image>
    </Flex>
  );
}

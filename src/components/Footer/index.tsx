import { EColors } from "@/enums/EColors";
import {
  Flex,
  HStack,
  Text,
  Image,
  SimpleGrid,
  Box,
  Stack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { Container, Truck } from "lucide-react";
import { ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Flex
      py={5}
      w="full"
      justifyContent="center"
      bg={EColors.blue}
      color={EColors.orange}
      px={{ base: "4", lg: "100px", xl: "200px" }}
      alignItems="center"
      flexDirection={{ base: "column", lg: "row" }}
      gap={{ base: 5 }}
    >
      <Flex
        gap={2}
        color={EColors.orange}
        alignItems="center"
        fontWeight="700"
        flex="1"
      >
        <Image src="/logo-orange.png" alt={"Place"} width={39} rounded="md" />
        <Text>Nós Proteção</Text>
      </Flex>

      <Text textAlign="center">
        ® 2025 Nós Proteção de Carga e Embalagens 24.012.805/0001-13. Todos os
        direitos reservados
      </Text>

      <Flex flex="1" justifyContent="flex-end">
        <Button
          as="a"
          href="https://wa.me/5511979880930?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20saber%20de%20mais%20produtos%20da%20N%C3%B3s%20Prote%C3%A7%C3%A3o%20de%20Cargas%20e%20Embalagens."
          fontSize={24}
          bg={EColors.orange}
          _hover={{ bg: EColors.darkorange }}
          color={EColors.blue}
        >
          <FaWhatsapp />
        </Button>
      </Flex>
    </Flex>
  );
}

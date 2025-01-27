import { EColors } from "@/enums/EColors";
import { Flex, HStack, Text, Image } from "@chakra-ui/react";
import { Truck } from "lucide-react";

export default function Footer() {
  return (
    <Flex
      background={EColors.darkblue}
      px={{ base: "4", lg: "100px", xl: "200px" }}
      py={{ base: "4", lg: "50px" }}
    >
      <HStack alignItems={"center"} fontSize={20}>
        <Flex gap={2} color={EColors.orange} alignItems="center">
          <Image src="/logo-orange.png" alt={"Place"} width={39} rounded="md" />
          <Text fontWeight="700">Nós Proteção</Text>
        </Flex>
      </HStack>
    </Flex>
  );
}

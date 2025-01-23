import { EColors } from "@/enums/EColors";
import { Flex, HStack, Text } from "@chakra-ui/react";
import { Truck } from "lucide-react";

export default function Footer() {
  return (
    <Flex
      background={EColors.darkblue}
      px={{ base: "4", lg: "100px", xl: "200px" }}
    >
      <HStack alignItems={"center"} fontSize={20}>
        <Flex gap={2} color={EColors.orange} alignItems="center">
          <Truck size={36} />
          <Text fontWeight="700">Nós Proteção</Text>
        </Flex>
      </HStack>
    </Flex>
  );
}

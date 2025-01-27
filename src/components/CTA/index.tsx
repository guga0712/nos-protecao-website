import { EColors } from "@/enums/EColors";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function CTA() {
  return (
    <Flex
      background={EColors.orange}
      color={EColors.darkblue}
      px={{ base: "4", lg: "100px", xl: "200px" }}
      alignItems="center"
      justifyContent="center"
      py="100px"
      flexDir="column"
      textAlign="center"
      gap={10}
    >
      <Heading fontSize={{ base: "40px", lg: "6xl" }}>
        Proteja sua carga com excelência!
      </Heading>
      <Text fontSize={20}>
        A melhor linha de proteção para transporte e armazenamento está aqui.
        Conte com qualidade, resistência e o melhor custo-benefício.
      </Text>
      <Button
        background={EColors.darkblue}
        color={EColors.white}
        _hover={{ background: EColors.deepblue }}
      >
        Garanta já a sua proteção!
      </Button>
    </Flex>
  );
}

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
      py={{ base: "60%", lg: "300px" }}
      flexDir="column"
      textAlign="center"
      gap={10}
      id="contato"
    >
      <Flex
        flexDir="column"
        gap={10}
        data-aos="fade-up"
        data-aos-delay="200"
        // data-aos-once="true"
        alignItems="center"
        justifyContent="center"
      >
        <Heading fontSize={{ base: "40px", lg: "6xl" }}>
          Proteja sua carga com excelência!
        </Heading>
        <Text fontSize={20}>
          A melhor linha de proteção para transporte e armazenamento está aqui.
          Conte com qualidade, resistência e o melhor custo-benefício.
        </Text>
        <Button
          as="a"
          href="https://wa.me/5511979880930?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20saber%20de%20mais%20produtos%20da%20N%C3%B3s%20Prote%C3%A7%C3%A3o%20de%20Cargas%20e%20Embalagens."
          background={EColors.darkblue}
          color={EColors.white}
          _hover={{ background: EColors.deepblue }}
        >
          Garanta já a sua proteção!
        </Button>
      </Flex>
    </Flex>
  );
}

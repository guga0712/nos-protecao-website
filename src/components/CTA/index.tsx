import { EColors } from "@/enums/EColors";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function CTA() {
  return (
    <Flex
      background={EColors.orange}
      color={EColors.darkblue}
      px={{ base: "2.5", lg: "100px", xl: "200px" }}
      alignItems="center"
      justifyContent="center"
      py="100px"
      flexDir="column"
      textAlign="center"
      gap={5}
    >
      <Heading fontSize="6xl">Gostaria de saber mais?</Heading>
      <Text fontSize={20}>
        Don't compromise on security. Get in touch with us today and discover
        how SecureCargo can protect your valuable shipments.
      </Text>
      <Button
        background={EColors.blue}
        color={EColors.white}
        _hover={{ background: EColors.darkblue }}
      >
        Entre em contato
      </Button>
    </Flex>
  );
}

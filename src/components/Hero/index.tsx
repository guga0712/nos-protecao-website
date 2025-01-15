import { Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
  return (
    <Flex
      background="#000"
      color="var(--gold-500)"
      px={{ sm: "1.5", lg: "300px" }}
    >
      <Heading>Sua Carga Segura, Seu Negócio Protegido.</Heading>
      <Image
        src="/caminhao-truck.jpg"
        alt={"Place"}
        width={500}
        height={100}
      ></Image>
    </Flex>
  );
}

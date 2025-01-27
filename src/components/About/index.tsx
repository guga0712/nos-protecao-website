import { EColors } from "@/enums/EColors";
import { Divider, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import Item from "../Item";
import * as Icons from "lucide-react";

export default function About() {
  const items: { icon: keyof typeof Icons; title: string; text: string }[] = [
    {
      icon: "ShieldCheck",
      title: "Qualidade garantida",
      text: "Produtos resistentes e duráveis para máxima proteção.",
    },
    {
      icon: "ScrollText",
      title: "Variedade completa",
      text: "Tudo o que você precisa em um só lugar.",
    },
    {
      icon: "PiggyBank",
      title: "Custo-benefício",
      text: "Soluções acessíveis sem abrir mão da segurança.",
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
        Na Nós Proteção, acreditamos que a segurança da sua carga é prioridade.
        Oferecemos soluções confiáveis em embalagens e proteção para transporte
        e armazenamento, garantindo que seus produtos cheguem ao destino
        intactos e protegidos.
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

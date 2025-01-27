import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Product from "../Product";
import { EColors } from "@/enums/EColors";

export default function BestSellersProducts() {
  const products = [
    {
      name: "Filme Stretch",
      description:
        "Ideal para envolvimento e fixação de cargas, proporcionando proteção contra poeira, umidade e movimentação indesejada, alta elasticidade e resistência.",
      image: "./filme-strech.png",
    },
    {
      name: "Lonas Plásticas",
      description:
        "Versáteis e super resistentes, protegem sua carga contra chuva, sol e poeira. Essenciais para coberturas, armazenagem e transporte seguro.",
      image: "./lona-plastica.png",
    },
    {
      name: "Madeirites",
      description:
        " Perfeitos para reforço estrutural no transporte de cargas. Duráveis, resistentes e disponíveis em diversas espessuras para atender a qualquer necessidade.",
      image: "./madeirite.png",
    },
  ];

  return (
    <Flex
      px={{ base: "4", lg: "100px", xl: "200px" }}
      pt="50px"
      pb="100px"
      flexDirection="column"
      id="produtos"
      gap={14}
      h="full"
    >
      <Heading
        fontSize={{ base: "30px", lg: "50px" }}
        textAlign="center"
        color={EColors.blue}
      >
        Nossos produtos
      </Heading>
      <Text textAlign="center">
        Quando o assunto é proteção, cada detalhe faz a diferença. Nossas
        embalagens são feitas com materiais de alta qualidade, garantindo
        resistência contra impactos, umidade e variações climáticas. Seu produto
        protegido do início ao fim!
        <br />
        Trabalhamos com as melhores marcas do mercado para garantir máxima
        proteção e durabilidade. Segurança e resistência que fazem a diferença!
      </Text>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "center" }}
        justifyContent="space-between"
        gap={{ base: "10" }}
        m="0"
        p="0"
      >
        {products.map((product, index) => {
          return (
            <Product
              key={index}
              imageUrl={product.image}
              title={product.name}
              description={product.description}
            />
          );
        })}
      </Flex>
    </Flex>
  );
}

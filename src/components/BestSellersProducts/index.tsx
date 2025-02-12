import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Product from "../Product";
import { EColors } from "@/enums/EColors";

export default function BestSellersProducts() {
  const products = [
    {
      name: "Filme Stretch",
      description:
        "Ideal para envolvimento e fixação de cargas, proporcionando proteção contra poeira, umidade e movimentação indesejada, alta elasticidade e resistência.",
      image: "./filme-stretch.png",
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
        "Perfeitos para reforço estrutural no transporte de cargas. Duráveis, resistentes e disponíveis em diversas espessuras para atender a qualquer necessidade.",
      image: "./madeirite.png",
    },
    {
      name: "Corda Pet",
      description:
        "Com resistência e durabilidade, essa corda garante a segurança da sua carga em qualquer transporte.",
      image: "./corda-pet.webp",
    },
    {
      name: "Cinta e Catraca",
      description:
        "Sistema de amarração resistente e seguro, ideal para fixação firme de cargas durante o transporte.",
      image: "./cinta-catraca.jpeg",
    },
  ];

  return (
    <Flex
      id="nossosprodutos"
      px={{ base: "4", lg: "100px", xl: "200px" }}
      pt="50px"
      pb="100px"
      flexDirection="column"
      gap={14}
      h="full"

      // data-aos-once="true"
    >
      <Heading
        fontSize={{ base: "30px", lg: "50px" }}
        textAlign="center"
        color={EColors.blue}
      >
        Nossos produtos
      </Heading>
      <Text textAlign="center" data-aos="fade-up" data-aos-delay="200">
        Quando o assunto é proteção, cada detalhe faz a diferença. Nossas
        embalagens são feitas com materiais de alta qualidade, garantindo
        resistência contra impactos, umidade e variações climáticas.
        <br />
        Trabalhamos com as melhores marcas do mercado para garantir máxima
        proteção e durabilidade. Segurança e resistência que fazem a diferença!
      </Text>
      <Flex
        flexWrap="wrap" // Permite que os produtos quebrem para a próxima linha
        justifyContent="center" // Centraliza os itens na tela
        gap={6} // Espaçamento uniforme entre os itens
        w="100%" // Garante que ocupa toda a largura disponível
      >
        {products.map((product, index) => (
          <Product
            key={index}
            imageUrl={product.image}
            title={product.name}
            description={product.description}
          />
        ))}
      </Flex>
    </Flex>
  );
}

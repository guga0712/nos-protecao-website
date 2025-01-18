import { Divider, Flex, Heading, Text } from "@chakra-ui/react";
import Product from "../Product";
import { EColors } from "@/enums/EColors";

export default function BestSellersProducts() {
  const products = [
    {
      name: "SmartLock Pro",
      description:
        "Advanced GPS-enabled lock for real-time tracking and tamper alerts",
      image: "./caminhao-truck.jpg",
    },
    {
      name: "SecureTrack™",
      description:
        "Comprehensive fleet system with AI-powered route optimization",
      image: "./caminhao-truck.jpg",
    },
    {
      name: "CargoGuard",
      description:
        "Durable, weather-resistant cargo seals with blockchain verification",
      image: "./caminhao-truck.jpg",
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
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
        ducimus distinctio porro similique harum deleniti voluptates nobis
        inventore optio quibusdam sed quod consectetur tempora hic tempore quo.
        Eveniet, qui eum?
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

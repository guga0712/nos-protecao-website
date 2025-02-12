"use client";

import { EColors } from "@/enums/EColors";
import {
  Box,
  Image,
  Text,
  Button,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

interface IProductsProps {
  imageUrl: string;
  title: string;
  description: string;
}

export default function Product({
  imageUrl,
  title,
  description,
}: IProductsProps) {
  return (
    <Box
      borderWidth="1px"
      borderRadius={10}
      borderColor="gray.200"
      transition="0.5s"
      w="100%"
      maxW="400px" // Define um tamanho máximo para os cards
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="stretch" // Garante que os elementos internos ocupem toda a altura
      minH="450px" // Define uma altura mínima para padronizar os cards
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <Image
        src={imageUrl}
        alt={title}
        borderTopRadius={10}
        w="100%" // Faz a imagem ocupar toda a largura do card
        h="400px" // Define uma altura fixa para uniformizar todas as imagens
        objectFit="cover" // Mantém a proporção da imagem sem distorcer
      />
      <VStack p="8" gap={4} alignItems="start" flex="1">
        <Heading color={EColors.blue} fontSize={{ sm: "24px", lg: "26px" }}>
          {title}
        </Heading>
        <Text wordBreak="break-word" flex="1">
          {description}
        </Text>
        <Button
          as="a"
          href="https://wa.me/5511979880930?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20saber%20de%20mais%20produtos%20da%20N%C3%B3s%20Prote%C3%A7%C3%A3o%20de%20Cargas%20e%20Embalagens."
          w={"full"}
          bgColor={EColors.blue}
          color={EColors.white}
        >
          Conheça mais
        </Button>
      </VStack>
    </Box>
  );
}

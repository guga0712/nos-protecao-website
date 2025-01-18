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
      maxW="sm"
      borderWidth="1px"
      borderRadius={10}
      borderColor="gray.200"
      transition="0.5s"
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <Image src={imageUrl} alt={title} borderTopRadius={10} />
      <VStack p="8" gap={4} alignItems="start">
        <HStack>
          <Heading color={EColors.blue} fontSize={{ sm: "30px", lg: "30px" }}>
            {title}
          </Heading>
        </HStack>
        <Text h="100px">{description}</Text>
        <Button w={"full"} bgColor={EColors.blue} color={EColors.white}>
          Conheça mais
        </Button>
      </VStack>
    </Box>
  );
}

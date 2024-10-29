import { Divider, Flex, Heading, HStack } from "@chakra-ui/react";
import Product from "../Product";

export default function BestSellersProducts() {
  return (
    <Flex px={{ base: '1.5rem', '2xl': '200px' }} py='50px' flexDirection='column'>
      <Heading size='lg' mb={4}>Produtos mais vendidos</Heading>
      <Divider />
      <Flex flexDirection={{ base: 'column', lg: 'row' }} alignItems={{ base: 'center' }} justifyContent='space-between' m='0' p='0'>
        <Product />
        <Product />
        <Product />
        <Product />
      </Flex>
    </Flex>
  )
}
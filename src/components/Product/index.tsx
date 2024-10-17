'use client'

import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Button,
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { GoArrowUpRight } from 'react-icons/go'

const data = {
  isNew: true,
  imageURL:
    'https://www.teckplast.com.br/wp-content/uploads/2021/08/fita_acrilica.jpgfilenameUTF-8fita_acrilica.jpg',
  name: 'Fita Adesiva 45x100 METROS Marrom',
  price: 250.50,
}

export default function Product() {
  return (
    <Flex border='1px solid' borderColor='gray.100' rounded='lg' my='25px' maxW='250px' w='full' alignItems='center' justifyContent='center'>
      <Box
        bg='white'
        width='250px'
        rounded='lg'
        shadow='lg'
        position='relative'>
        <Image src={data.imageURL} alt={`Picture of ${data.name}`} roundedTop='lg' />

        <Box px='6' py='4'>
          <Flex mt='2' justifyContent='space-between' alignContent='center'>
            <Box
              fontSize='xl'
              fontWeight='semibold'
              as='h4'
              lineHeight='tight'
              isTruncated>
              {data.name}
            </Box>
          </Flex>
          <Flex mt='2' justifyContent='space-between' alignContent='center'>
            <Box fontSize='2xl' color='gray.800'>
              <Box as='span' color={'gray.600'} fontSize='lg'>
                R$
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>
        </Box>
        <Flex my='2' width='100%' justifyContent='center'>
          <Button colorScheme='green' rightIcon={<GoArrowUpRight />} mb={4}>Comprar agora</Button>
        </Flex>
      </Box>
    </Flex >
  )
}

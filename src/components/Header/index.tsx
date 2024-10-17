'use client'

import {
    Box,
    Flex,
    HStack,
    IconButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Stack,
    Divider,
    Collapse,
    Accordion,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const NavLink = dynamic(() => import('../NavLink'), { ssr: false });

const Links = ['Produtos', 'Quem somos', 'Contato'];

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg='blue.400' px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        bg='transparent'
                        _hover={{
                            bg: 'transparent',
                            color: 'white',
                        }}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Box>Logo</Box>
                        <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink key={link} href={`/${link.replace(/\s+/g, '').toLowerCase()}`}>
                                    {link}
                                </NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button fontSize={20} bg='none' _hover={{ bg: 'none' }}><FaWhatsapp /></Button>
                    </Flex>
                </Flex>

                {typeof window !== 'undefined' && isOpen && (
                    <Box
                        pb={4}
                        display={{ md: 'none' }}
                        bg='blue.400' // Ajuste conforme necessário para manter a cor de fundo
                        height='90vh' // Preenche a altura disponível
                    >
                        <Stack spacing={4}>
                            {Links.map((link) => (
                                <>
                                    <NavLink key={link} href={`/${link.replace(/\s+/g, '').toLowerCase()}`}>
                                        {link}
                                    </NavLink>
                                    <Divider />
                                </>
                            ))}
                        </Stack>
                    </Box>
                )}
            </Box>
        </>
    );
}
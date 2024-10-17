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
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
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
                        <Button fontSize={20}><FaWhatsapp /></Button>
                    </Flex>
                </Flex>

                {/* Renderizar o menu móvel apenas no cliente */}
                {typeof window !== 'undefined' && isOpen && (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link} href={`/${link.replace(/\s+/g, '').toLowerCase()}`}>
                                    {link}
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                )}
            </Box>
        </>
    );
}
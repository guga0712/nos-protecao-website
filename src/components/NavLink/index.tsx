import { Box, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

interface Props {
    children: React.ReactNode;
    href: string;
}

const NavLink = ({ children, href }: Props) => {
    return (
        <Link href={href} passHref>
            <Box
                as="a"
                px={2}
                py={1}
                rounded="md"
                _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                }}
            >
                {children}
            </Box>
        </Link>
    );
};

export default NavLink;

import { Box } from '@chakra-ui/react';
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
                transition="0.3s"
                _hover={{
                    textDecoration: 'none',
                    color: 'white'
                }}
            >
                {children}
            </Box>
        </Link>
    );
};

export default NavLink;

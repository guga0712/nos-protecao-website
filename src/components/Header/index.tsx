"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Shield } from "lucide-react";

const Links = ["Produtos", "Quem somos", "Contato"];

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="#000"
        px={{ sm: "1.5", lg: "300px" }}
        color="var(--gold-500)"
        fontWeight="700"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg="transparent"
            color="var(--gold-500)"
            _hover={{
              bg: "transparent",
              color: "white",
            }}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Flex gap={2}>
              <Shield />
              Nós Proteção
            </Flex>
            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
              {Links.map((link, index) => (
                <Link
                  key={index}
                  href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
                >
                  {link}
                </Link>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              fontSize={20}
              bg="none"
              _hover={{ bg: "none" }}
              color="var(--gold-500)"
            >
              <FaWhatsapp />
            </Button>
          </Flex>
        </Flex>

        {typeof window !== "undefined" && isOpen && (
          <Box pb={4} display={{ md: "none" }} bg="#000" height="90vh">
            <Stack spacing={0}>
              {Links.map((link, index) => (
                <Flex
                  borderBottom="1px solid"
                  borderColor="var(--gold-900)"
                  padding="25px 20px"
                  key={index}
                >
                  <Link href={`#${link.replace(/\s+/g, "").toLowerCase()}`}>
                    {link}
                  </Link>
                </Flex>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </>
  );
}

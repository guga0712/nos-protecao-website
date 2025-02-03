"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Truck } from "lucide-react";
import { EColors } from "@/enums/EColors";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion.create(Box);

const Links = ["Sobre Nós", "Nossos Produtos", "Contato"];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <Box color="white" fontWeight="700">
        <Flex
          h={{ base: "20", lg: "16" }}
          alignItems="center"
          justifyContent={"space-between"}
        >
          <IconButton
            width="fit-content"
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={toggleMenu}
            bg="transparent"
            color={EColors.orange}
            _hover={{ bg: "none" }}
          />
          <HStack alignItems={"center"} fontSize={20}>
            <Flex gap={2} color={EColors.orange} alignItems="center">
              <Image
                src="/logo-orange.png"
                alt={"Place"}
                width={39}
                rounded="md"
              />
              <Text>Nós Proteção</Text>
            </Flex>
          </HStack>
          <HStack
            as="nav"
            spacing={8}
            display={{ base: "none", md: "flex" }}
            fontWeight="500"
            marginLeft="-20"
          >
            {Links.map((link, index) => (
              <Link
                key={index}
                href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
              >
                {link}
              </Link>
            ))}
          </HStack>
          <Button
            as="a"
            href="https://wa.me/5511979880930?text=Ol%C3%A1%2C%20eu%20gostaria%20de%20saber%20de%20mais%20produtos%20da%20N%C3%B3s%20Prote%C3%A7%C3%A3o%20de%20Cargas%20e%20Embalagens."
            fontSize={24}
            bg={EColors.orange}
            _hover={{ bg: EColors.darkorange }}
            color={EColors.blue}
          >
            <FaWhatsapp />
          </Button>
        </Flex>

        {typeof window !== "undefined" && isOpen && (
          <MotionBox
            initial={{ height: 0, opacity: 0 }}
            animate={
              isOpen
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3, ease: "easeInOut" },
              opacity: { duration: 0.2 },
            }}
            overflow="hidden"
            pb={4}
            display={{ md: "none" }}
            bg="transparent"
            h="fit-content"
          >
            <Stack spacing={0} pb="50px">
              {Links.map((link, index) => (
                <Box
                  borderBottom="1px solid"
                  borderColor={EColors.orange}
                  key={index}
                  as="a"
                  href={`#${link.replace(/\s+/g, "").toLowerCase()}`}
                  py="8"
                >
                  {link}
                </Box>
              ))}
            </Stack>
          </MotionBox>
        )}
      </Box>
    </>
  );
}

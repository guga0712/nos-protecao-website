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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Truck } from "lucide-react";
import { EColors } from "@/enums/EColors";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion.create(Box);

const Links = ["Produtos", "Quem somos", "Contato"];

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
              <Truck size={36} />
              <Text>Nós Proteção</Text>
            </Flex>
          </HStack>
          <HStack
            as="nav"
            spacing={8}
            display={{ base: "none", md: "flex" }}
            fontWeight="500"
            marginLeft="-10"
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
                  href={`#${link.toLowerCase()}`}
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

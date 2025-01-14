"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg="black" color="white" px="40px">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            bg="transparent"
            _hover={{
              bg: "transparent",
              color: "white",
            }}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
          </HStack>
          <Flex alignItems={"center"}>
            <Button fontSize={20} bg="none" _hover={{ bg: "none" }}>
              <FaWhatsapp color="white" />
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

import { Center, Flex, Heading } from "@chakra-ui/react";
import Hero from "../Hero";
import About from "../About";
import Header from "../Header";

export default function Home() {
  return (
    <Flex
      flexDir="column"
      background="linear-gradient(180deg, rgba(6,46,79,1) 35%, rgba(11,90,156,1) 100%);"
      px={{ base: "2.5", lg: "100px", xl: "300px" }}
    >
      <Header />
      <Hero />
      <About />
    </Flex>
  );
}

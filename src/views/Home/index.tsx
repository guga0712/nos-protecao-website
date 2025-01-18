import { Center, Flex, Heading } from "@chakra-ui/react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Header from "../../components/Header";
import BestSellersProducts from "@/components/BestSellersProducts";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Flex
        flexDir="column"
        background="linear-gradient(180deg, rgba(6,46,79,1) 35%, rgba(11,90,156,1) 100%);"
        px={{ base: "4", lg: "100px", xl: "200px" }}
      >
        <Header />
        <Hero />
        <About />
      </Flex>
      <BestSellersProducts />
      <CTA />
    </>
  );
}

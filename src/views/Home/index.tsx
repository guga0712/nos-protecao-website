"use client";

import { Center, Flex, Heading } from "@chakra-ui/react";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Header from "../../components/Header";
import BestSellersProducts from "@/components/BestSellersProducts";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
      <Footer />
    </>
  );
}

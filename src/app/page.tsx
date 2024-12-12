import Banner from "@/components/Banner";
import BestSellersProducts from "@/components/BestSellersProducts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Products />
    </>
  );
}

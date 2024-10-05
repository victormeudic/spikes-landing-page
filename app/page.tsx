import AppIntegration from "@/components/AppIntegration";
import Brand from "@/components/Brand";
import BubbleInfo from "@/components/BubbleInfo";
import Footer from "@/components/Footer";
import Growth from "@/components/Growth";
import HomePage from "@/components/Home";
import ListImage from "@/components/ListImage";
import NavBar from "@/components/NavBar";
import Price from "@/components/Price";
import TestimonialList from "@/components/TestimonialList";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <HomePage />
      <ListImage />
      <Brand />
      <Growth />
      <BubbleInfo />
      <AppIntegration />
      <TestimonialList />
      <Price />
      <Footer />
    </div>
  );
}

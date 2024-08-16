import CardSection from "@/components/CardSection";
import CenterText from "@/components/CenterText";
import HeroSection from "@/components/HeroSection";
import MessageBanner from "@/components/MessageBanner";
import NavbarComponent from "@/components/NavbarComponent";
import { InfiniteMovingCardsDemo } from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <NavbarComponent/>
   <HeroSection/>
   <CenterText/>
   <CardSection/>
   <MessageBanner/>
   <InfiniteMovingCardsDemo/>
   </>
  );
}

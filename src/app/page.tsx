import FeaturesCourses from "@/Components/FeaturesCourses";
import HeroSection from "@/Components/HeroSection";
import Instructer from "@/Components/Instructer";
import ScrollSection from "@/Components/ScrollSection";
import TestimonialCards from "@/Components/TestimonialCards";
import Upcoming from "@/Components/Upcoming";
import Footer from '@/Components/Footer'

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection/>
        <FeaturesCourses/>
        <ScrollSection/>
        <TestimonialCards/>
        <Upcoming/>
        <Instructer/>
        <Footer/>
      </main>
    
    </>
  );
}

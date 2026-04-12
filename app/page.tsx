import HomeSlider from "@/components/home/HomeSlider";
import Gallery from "@/components/home/Gallery";
import Services from "@/components/home/Services";
import VideoSlider from "@/components/home/VideoSlider";
import HeroSection from "@/components/HeroSection";
import ProfessionalRoles from "@/components/ProfessionalRoles";

export const metadata = {
  title: "Krantishikha Dhital | Official Portfolio",
  description: "Explore the work, speeches, and journey of Krantishikha Dhital, Member of Federal Parliament of Nepal and advocate for social impact.",
};


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans ">
      <HomeSlider />
      <ProfessionalRoles/>
      <HeroSection/>
      <Gallery/>
      <Services/>
      <VideoSlider/>
    </div>
  );
}

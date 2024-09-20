import Hero from "@/components/home/hero";
import HeaderComponent from "@/components/home/header";
import MusicSection from "@/components/home/music";


export default function Home() {
  return (
    <main>
      <HeaderComponent />
      <Hero />
      <MusicSection />
    </main>
  );
}

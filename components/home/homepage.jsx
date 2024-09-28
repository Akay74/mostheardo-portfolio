import Hero from "./hero";
import MusicSection from "./music";
import VideoSection from "./videos";
import Shop from "./shop";


export default function Homepage() {
  return (
    <main>
      <Hero />
      <MusicSection />
      <VideoSection />
      <Shop />
    </main>
  );
}
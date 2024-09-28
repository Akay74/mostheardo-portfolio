import HeaderComponent from "@/components/home/header";
import VideosPage from "./videospage";
import Footer from "@/components/home/footer";


export default function Home() {
  return (
    <main>
      <HeaderComponent />
      <VideosPage />
      <Footer />
    </main>
  );
}

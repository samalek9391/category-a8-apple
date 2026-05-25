import Banner from "@/components/homepage/Banner";
import FeaturedTiles from "@/components/homepage/FeaturedTiles";
import Marquee from "@/components/homepage/Marquee";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Banner />
        <Marquee />
        <FeaturedTiles />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

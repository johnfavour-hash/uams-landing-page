import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import SecureFuture from "./components/SecureFuture";
import Programmes from "./components/Programmes";
import LatestNews from "./components/LatestNews";
import LibrarySection from "./components/LibrarySection";
import ResourcesSection from "./components/ResourcesSection";
import NewsletterSection from "./components/NewsletterSection";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <SecureFuture />
      <Programmes />
      <LatestNews />
      <LibrarySection />
      <ResourcesSection />
      <NewsletterSection />
      <Footer />
    </Box>
  );
};

export default LandingPage;

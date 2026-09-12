import AssortmentGrid from "../components/AssortmentGrid";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import PartnerHighlight from "../components/PartnerHighlight";
import TrustMetrics from "../components/TrustMetrics";

export default function Home() {
  return (
    <div>
      <Hero />
      <AssortmentGrid />
      <TrustMetrics />
      <PartnerHighlight />
      <Footer />
    </div>
  );
}
import PavilionSection from "@/components/PavilionSection";
import GroupSection from "@/components/GroupSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="sectionWrapper">
      <GroupSection />
      <PavilionSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

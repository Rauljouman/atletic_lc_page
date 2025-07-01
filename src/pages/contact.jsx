import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import styles from "@/styles/contact.module.css";

export default function contact() {
  return (
    <div className={styles.section}>
      <div className={styles.contentWrapper}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
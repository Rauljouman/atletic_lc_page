import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import styles from "@/styles/contact.module.css"

export default function contact() {
  return (
    <div className={styles.section}>
      <ContactForm />
      <Footer />
    </div>
  );
}


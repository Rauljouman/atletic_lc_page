import ContactForm from "@/components/ContactForm";
import styles from "@/styles/contact.module.css";

export default function contact() {
  return (
    <div>
      <div className={styles.section}>
        <ContactForm />
      </div>
    </div>
  );
}
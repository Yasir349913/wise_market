import styles from "./Faq.module.css";

const Faqitem = ({ item, isOpen, onClick }) => {
  return (
    <div className={styles.faqItem}>
      <div className={styles.faqQuestion} onClick={onClick}>
        <h4>{item.question}</h4>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <p className={styles.faqAnswer}>{item.answer}</p>}
    </div>
  );
};

export default Faqitem;

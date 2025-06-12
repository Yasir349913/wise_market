import { useState } from "react";
import Faqitem from "./Faqitem";
import styles from "./Faq.module.css"; // CSS Module
import img7 from "/assets/images/faqimg.jpg";

let Faq = () => {
  const Faq1list = [
    {
      question: "What payment method does Wise Market Pakistan offers?",
      answer:
        "Wise Market Pakistan makes your shopping more convenient. You can pay online via a Debit Visa Card/Mastercard, bank transfer, or cash on delivery (COD). In addition to that, we also have the option for Credit Cards and installments.",
    },
    {
      question: "How will Wise Market Pakistan deliver my device",
      answer:
        "Wise Market is a partner with reputable courier services which can deliver packages all across Pakistan. Plus, Wise Market riders are currently operational in Lahore.",
    },
    {
      question: "What products does Wise Market Offer",
      answer:
        "Wise Market mainly offers brand new tech gadgets devices. Every smart device is procured from a certified & reliable seller. You can easily shop for new devices from Wise Market Pakistan.",
    },
    {
      question: "What is Wise Market Pakistan",
      answer:
        "Wise Market Pakistan is an online store for all sorts of mobile phones, accessories, and other smart devices. Our delivery is free all across Pakistan. You can visit our website for all the latest and greatest devices at some of the lowest price in Pakistan.",
    },
  ];
  const Faq2list = [
    {
      question: "What is the response time at Wise Market?",
      answer:
        "Wise Market Pakistan is always here to help you throughout the day. There are various means of contacting us, and the response time can differ. For people who contact us via call, we are available 24/7, and for chat, we’re also available 24/7. The response time for people who contact through email is a bit longer because it can be within 24 hours. We also have multiple social media channels where you can reach out and contact us.",
    },
    {
      question: "How i can complain to wise market?",
      answer:
        "There are 3 main ways to contact us. Our phone number is the easiest and quickest method for contacting us. If you want to make a call, then dial 042 1111 09473 or if you want to contact us via a chat then we have a chat system available on the site",
    },
    {
      question: "Can i sell on Wise Market?",
      answer:
        "Unfortunately, Individual consumers currently don’t have the option to sell their devices on Wise Market. However, if you’re a vendor, you’ll be able to sell smart devices on our platform.",
    },
    {
      question: "Can i trust Wise Market?",
      answer:
        "Wise Market Pakistan is one of the biggest smart device sellers in Pakistan. Not only that, but we’re also one of the most trusted sellers as well. We also have a presence on multiple social media platforms. Furthermore, we also get endorsements from some of the biggest celebrities in Pakistan",
    },
  ];

  const [faq1open, setfaq1open] = useState(null);
  const [faq2open, setfaq2open] = useState(null);

  return (
    <>
      <div className={styles.faqbanner}>
        <img src={img7} alt="none" />
      </div>

      <div className={styles.faqContainer}>
        <div className={styles.faqBox}>
          <h2>General Questions</h2>
          {Faq1list.map((item, index) => (
            <Faqitem
              key={index}
              item={item}
              isOpen={faq1open === index}
              onClick={() => setfaq1open(faq1open === index ? null : index)}
            />
          ))}
        </div>
        <div className={styles.faqBox}>
          <h2>Support Questions</h2>
          {Faq2list.map((item, index) => (
            <Faqitem
              key={index}
              item={item}
              isOpen={faq2open === index}
              onClick={() => setfaq2open(faq2open === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;

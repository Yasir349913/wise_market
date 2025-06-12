import img8 from "/assets/images/tcimg.jpg";
import styles from "./Termsandconditions.module.css";

let Termsandconditions = () => {
  return (
    <>
      <header className={styles.banner}>
        <img src={img8} alt="Terms and Conditions Banner" />
      </header>

      <main className={styles.content}>
        <section className={styles.para1}>
          Welcome to Wise Market Pakistan, an online marketplace where you can
          buy all sorts of amazing smart devices. We are committed to providing
          our customers with the best possible shopping experience, and these
          terms and conditions are designed to ensure that everyone has a fair
          and enjoyable time on our site. By using Wise Market Pakistan, you
          agree to be bound by these terms and conditions. If you do not agree
          to these terms and conditions, please do not use our site.
        </section>

        <article>
          <h3 className={styles.heading1}>Account Creation</h3>
          <p className={styles.para2}>
            To create an account on Wise Market Pakistan, you will need to
            provide your name, email address, and contact information. You will
            also need to create a password. You are responsible for keeping your
            account information confidential and secure. You agree to notify us
            immediately if you become aware of any unauthorized use of your
            account or any other breach of security.
          </p>
        </article>

        <article>
          <h3 className={styles.heading2}>Use of the Site and Services</h3>
          <ul className={styles.lists}>
            <li>
              Violate any laws or regulations in connection with your use of the
              Site or Services.
            </li>
            <li>Infringe the intellectual property rights of others.</li>
            <li>
              Transmit any viruses, malware, or other harmful code through the
              Site or Services.
            </li>
            <li>
              Use the Site or Services to spam, solicit, or otherwise harass
              others.
            </li>
            <li>
              Use the Site or Services for any commercial purpose without the
              express written consent of Wise Market Pakistan.
            </li>
          </ul>
        </article>

        <article>
          <h3 className={styles.heading3}>Product Availability and Pricing</h3>
          <p className={styles.para3}>
            Wise Market Pakistan makes every effort to ensure that all products
            listed on our site are available and accurately priced. However,
            there may be occasions when a product is unavailable. In such a
            case, we will contact you to offer you a refund (if the payment has
            already been made) or an alternative product. Furthermore, the
            prices of the product will be updated at any moment in accordance
            with the market fluctuation.
          </p>
        </article>

        <article>
          <h3 className={styles.heading4}>
            Order Cancellation Without Prior Notification
          </h3>
          <ul className={styles.list2}>
            <li>
              If we identify that you’re a vendor/shopkeeper running their own
              business.
            </li>
            <li>There are multiple orders.</li>
            <li>If the product is not available at the moment.</li>
            <li>If there is suspicious activity on your end.</li>
          </ul>
        </article>

        <footer className={styles.bestwishes}>
          Thank you for shopping at Wise Market Pakistan.
        </footer>
      </main>
    </>
  );
};

export default Termsandconditions;

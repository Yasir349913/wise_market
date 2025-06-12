import styles from "./Contact.module.css";
import img6 from "/assets/images/contactimg.avif";
import { MdPhoneLocked } from "react-icons/md";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosContacts } from "react-icons/io";
let Contact = () => {
  return (
    <>
      <div className={styles.banner}>
        <img src={img6} alt="none" />
      </div>

      <div className={styles.mainpoint}>
        <h2>Need Help?</h2>
        <div className={styles.para1}>
          We would love to hear from you. We are here for you 24/7.
        </div>
      </div>
      <div className={styles.boxes}>
        <div className={styles.box1}>
          <MdPhoneLocked />
          <h3>Talk to us</h3>
          <p>
            We are just a call away. Our representative is eager to hear from
            you. Just take your phone and get going.
          </p>
          <button type="button" class="btn btn-success">
            042 1111 09473
          </button>
        </div>
        <div className={styles.box2}>
          <IoIosArrowDropdownCircle />
          <h3>Drop us a line</h3>
          <p>
            You can also reach us via email if you want to discuss anything in
            detail. We will respond to all your queries and give you a suitable
            reply accordingly.
          </p>
          <button type="button" class="btn btn-success">
            support@wisemarket.com.pk
          </button>
        </div>
        <div className={styles.box3}>
          <IoIosContacts />
          <h3>Contact help center</h3>
          <p>
            Our support staff is there to answer all your queries. We would love
            to hear from you.
          </p>
          <button type="button" class="btn btn-success">
            Submit a Ticket
          </button>
        </div>
      </div>
    </>
  );
};
export default Contact;

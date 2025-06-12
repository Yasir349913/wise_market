import { PiAddressBookFill } from "react-icons/pi";
import { IoCall } from "react-icons/io5";
import { CgWebsite } from "react-icons/cg";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
let Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.leftside}>
          <h3>Wise Market</h3>
          <h5>Wise Market pk</h5>
          <div className={styles.address}>
            <p>
              <PiAddressBookFill />
              40 L block johr town
            </p>
          </div>
          <div className={styles.num}>
            <p>
              <IoCall />
              042 1111 09473
            </p>
          </div>
          <div className={styles.weblink}>
            <p>
              {" "}
              <CgWebsite />
              info@wisemarket.com.pk
            </p>
          </div>
          <div className={styles.sociallinks}>
            <p>Stay connected</p>

            <p>
              <FaFacebook />
              <FaSquareInstagram />
              <FaTwitter />
              <FaLinkedin />
            </p>
          </div>
        </div>
        <div className={styles.middlesides}>
          <div className={styles.links}>
            <h5>Quick links</h5>
            <ul className={styles.quicklinks}>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/faq">FAQ'S</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
              <li>Blogs</li>
            </ul>
          </div>
          <div className={styles.services}>
            <h5>Services</h5>
            <ul className={styles.serviceslinks}>
              <li>
                <Link to="/returnprivacy">Return_privacy Policy</Link>
              </li>
              <li>Refund & Shipping</li>
              <li>Warranty</li>
              <li>
                <Link to="/termsandconditions">Terms and Conditions</Link>
              </li>
              <li>Terms and Conditions for Auctions</li>
            </ul>
          </div>
          <div className={styles.account}>
            <h5>My Account</h5>
            <ul className={styles.accountlinks}>
              <li>Sign in</li>
              <li>View Cart</li>
              <li>My wishlist</li>
              <li>help</li>
            </ul>
          </div>
        </div>
        <div className={styles.rightside}>
          <button type="button" class="btn btn-success">
            Create Auction
          </button>
          <button type="button" class="btn btn-success">
            Become a Seller
          </button>
          <p>
            Reach millions of customers nationwide through wisemarket. A leading
            smart devices platform in Pakistan
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;

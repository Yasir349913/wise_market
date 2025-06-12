import styles from "./About.module.css";
import img1 from "/assets/images/aboutbanner.png";
import img2 from "/assets/images/img2.jpg";
import img3 from "/assets/images/img3.jpg";
import img4 from "/assets/images/img4.png";
import img5 from "/assets/images/img5.jpg";
import { FaBox, FaBorderStyle } from "react-icons/fa";
import { TbBrandSketchFilled } from "react-icons/tb";
import { FaSquareLetterboxd } from "react-icons/fa6";
import { MdOutlinePhonelinkSetup } from "react-icons/md";

const About = () => {
  return (
    <>
      {/* Banner Section */}
      <section className={styles.bannerWrapper}>
        <img src={img1} alt="About Banner" className={styles.bannerImg} />
        <div className={styles.overlay}>
          <h1>About Wisemarket</h1>
          <p>
            We are a dependable marketplace for refurbished mobile phones,
            laptops, and other tech gadgets.
          </p>
        </div>
      </section>

      {/* How We Make a Difference */}
      <section className={styles.makediff}>
        <h3>
          How do we <b>make a difference?</b>
        </h3>
        <p>
          We promote the culture of recycling and reusing old, pre-owned, and
          defective handsets. Instead of throwing these away and damaging the
          environment, we refurbish them and make them affordable for you.
        </p>
      </section>

      {/* Key Stats Section */}
      <section className={styles.diffnav}>
        <div className={styles.card}>
          <FaBox className={styles.icon} />
          <h5>100+ Products</h5>
          <p>Choose from a wide range of top-brand products.</p>
        </div>
        <div className={styles.card}>
          <TbBrandSketchFilled className={styles.icon} />
          <h5>100+ Brands</h5>
          <p>A versatile selection to suit your preferences.</p>
        </div>
        <div className={styles.card}>
          <FaSquareLetterboxd className={styles.icon} />
          <h5>10+ Categories</h5>
          <p>Mobiles, laptops, tablets, smartwatches, and more.</p>
        </div>
        <div className={styles.card}>
          <FaBorderStyle className={styles.icon} />
          <h5>1000+ Orders</h5>
          <p>Trusted by over 1000 satisfied customers.</p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.chooseus}>
        <h3>Why Choose Us</h3>
        <p>
          Many sellers exist in Pakistan, but we stand out with superior
          customer service and a commitment to quality. Here’s why customers
          love us:
        </p>
        <div className={styles.chooseusBoxes}>
          <div className={styles.box}>
            <MdOutlinePhonelinkSetup className={styles.boxIcon} />
            <h4>Great Value</h4>
            <p>Best prices in Pakistan. Your money’s worth, guaranteed.</p>
          </div>
          <div className={styles.box}>
            <MdOutlinePhonelinkSetup className={styles.boxIcon} />
            <h4>Reliable Vendor Network</h4>
            <p>90% of stock is locally sourced through trusted dealers.</p>
          </div>
          <div className={styles.box}>
            <MdOutlinePhonelinkSetup className={styles.boxIcon} />
            <h4>Free Express Shipping</h4>
            <p>Nationwide delivery at no extra cost.</p>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className={styles.businessModel}>
        <div className={styles.businessModelContainer}>
          <div className={styles.businessText}>
            <h3>Our Business Model</h3>
            <p>
              With 50 million tons of annual e-waste, our goal is to reduce the
              carbon footprint by promoting refurbished devices instead of new
              ones.
            </p>
            <button className={styles.btn}>Visit Our Store</button>
          </div>
          <div className={styles.businessImage}>
            <img src={img2} alt="Business Model" />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className={styles.services}>
        <div className={styles.serviceBox}>
          <img src={img3} alt="Help Centre" />
          <h4>Help Centre</h4>
          <p>Contact us via email, phone, or live chat for 24/7 assistance.</p>
        </div>
        <div className={styles.serviceBox}>
          <img src={img4} alt="Guaranteed Quality" />
          <h4>Guaranteed Quality</h4>
          <p>Our engineers inspect each device carefully before approval.</p>
        </div>
        <div className={styles.serviceBox}>
          <img src={img5} alt="Blancco Testing" />
          <h4>Blancco Testing Software</h4>
          <p>
            We use Blancco diagnostics to ensure all phones meet high standards.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;

import img9 from "/assets/images/returnimg.jpg";
import img10 from "/assets/images/privacyimg.png";
import styles from "./Returnprivacy.module.css";
let Returnprivacy = () => {
  return (
    <>
      <main className={styles.policies}>
        <div className={styles.returnbanner}>
          <img src={img9} alt="return banner image loading error" />
        </div>
        <h3>Wise Market Pakistan</h3>
        <article className={styles.returnpolicy}>
          <h3>Return Policy</h3>
          <ul className={styles.lists1}>
            <li>Return request are subject to company policy.</li>
            <li>Reshipping of the device will be charged to the customer.</li>
            <li> A return based on “Change of mind” will not be accepted.</li>
            <li>
              There should be prior approval before returning an item. Wise
              Market Pakistan is not liable for any returns sent without any
              prior communication. For more information regarding the return
              policy, here are some additional things to keep in mind.
            </li>
          </ul>
        </article>
        <article className={styles.causes}>
          <h3>Valid Causes for Return Acceptance:</h3>
          <ul className={styles.list2}>
            <li>
              If the delivered device is "Physically damaged, broken/defective,
              or water damaged."
            </li>
            <li>If you're given the wrong "device, size, color."</li>
            <li>
              If the delivered device is different from the given description or
              advertisement.
            </li>
          </ul>
        </article>
        <article className={styles.conditions}>
          <h3>Return Conditions:</h3>
          <ul className={styles.list3}>
            <li>
              Make sure that you create a flier opening video as proof that the
              device was not damaged after receiving it.
            </li>
            <li>
              The device should be unused, unharmed, and without any flaws that
              weren’t there at the time of receiving the device.
            </li>
            <li>
              All accessories, tags, user manuals, and invoices that came with
              the device should also be along with it.
            </li>
          </ul>
        </article>
        <article className={styles.privacybanner}>
          <img src={img10} alt="privacy image loading error" />
        </article>
        <section className={styles.purpose}>
          <h3>Policy brief & purpose:</h3>
          <article className={styles.para1}>
            We are strictly careful in keeping the data of our allies
            (employees, stakeholders, customers, and other parties) in secrecy.
            We work with the claim assurance and confidence that the data we
            collect remains in safe slots and its usage is need-based.
          </article>
        </section>
        <section className={styles.scope}>
          <h3>Scope</h3>
          <article className={styles.para2}>
            Our defined policy includes our associates' (i.e., employees, job
            candidates, customers, etc.), the record they provide is on top of
            our protection priority.
          </article>
        </section>
        <section className={styles.protection}>
          <h3>Who is covered under the Data Protection Policy?</h3>
          <ul className={styles.list4}>
            <li>Partners</li>
            <li>Contractors</li>
            <li>Consultants</li>
            <li>Outsider individuals</li>
            <li>Consumers</li>
          </ul>
        </section>
        <section className={styles.elements}>
          <h3>Policy elements:</h3>
          <article className={styles.para3}>
            Factors to build our policy elements indulge the information we
            gather from related entities on the behalf of our company policy.
            This information is used for a persons' identification via names,
            usernames, address, passwords, digital footprints, financial data,
            photographs, etc. This information is highly confidential and
            secured with us with the will of interested parties.
          </article>
          <section className={styles.data}>
            <h3>Our data will be:</h3>
            <article className={styles.para4}>
              Gathered information meets the company's policies & liabilities
              for lawful usage when required. Any illegal access to the data is
              prohibited. That’s why all of it is secured with a proper security
              network.
            </article>
          </section>
          <section className={styles.restrictions}>
            <h3>Our data will not be:</h3>
            <ul className={styles.list5}>
              <li>Separate from informal communication. </li>
              <li>Recorded many times without a countable limit. </li>
              <li>
                Shared with organizations, states, or countries having no
                policies.{" "}
              </li>
            </ul>
          </section>
        </section>
      </main>
    </>
  );
};
export default Returnprivacy;

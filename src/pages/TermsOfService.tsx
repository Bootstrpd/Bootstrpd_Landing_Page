import { useEffect } from "react";
import LegalLayout from "@/components/LegalLayout";

const sectionClassName = "card-nebula";
const headingClassName = "text-2xl font-semibold text-nebula-white mb-4";
const paragraphClassName = "text-muted-foreground leading-relaxed";
const listClassName = "list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service | LMS by bootstrpd";
  }, []);

  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="These Terms govern access to and use of LMS by bootstrpd, a subproject of the Bootstrpd holding company."
      lastUpdated="April 15, 2026"
    >
      <section className={sectionClassName}>
        <h2 className={headingClassName}>1. Eligibility and Authority</h2>
        <ul className={listClassName}>
          <li>You are legally able to enter these Terms.</li>
          <li>If acting for an organization, you have authority to bind it.</li>
          <li>You will use the Service in compliance with applicable laws.</li>
        </ul>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>2. Service Description</h2>
        <p className={paragraphClassName}>
          The Service provides tools for school and teacher operations including student records, course/session workflows, attendance, alerts, and third-party integrations.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>3. Account Registration and Security</h2>
        <ul className={listClassName}>
          <li>Provide accurate account information and keep it updated.</li>
          <li>Keep credentials confidential and secure.</li>
          <li>Promptly report unauthorized account access or misuse.</li>
        </ul>
        <p className={`${paragraphClassName} mt-4`}>You are responsible for activities under your account.</p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>4. Customer Data and Ownership</h2>
        <ul className={listClassName}>
          <li>Customers retain ownership of Customer Data, including student and parent records.</li>
          <li>You grant us a limited license to process Customer Data to provide and improve the Service.</li>
          <li>You are responsible for legal basis and required permissions for uploaded/imported data.</li>
        </ul>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>5. Acceptable Use</h2>
        <ul className={listClassName}>
          <li>No unlawful, harmful, or fraudulent use.</li>
          <li>No unauthorized access attempts to accounts, systems, or data.</li>
          <li>No interference with service operation or security controls.</li>
          <li>No malware, harmful scripts, or prohibited reverse engineering.</li>
        </ul>
        <p className={`${paragraphClassName} mt-4`}>We may suspend access for violations.</p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>6. Integrations</h2>
        <p className={paragraphClassName}>
          If integrations are enabled (for example Google or Zoom), you authorize scoped access needed for those features. Third-party terms apply, and we are not responsible for third-party outages or policy changes. Disconnecting integrations may disable related features.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>7. Fees and Billing (If Applicable)</h2>
        <p className={paragraphClassName}>
          Paid features, billing cycle, taxes, and related terms are provided at purchase/order. Late or non-payment may result in suspension. Unless required by law, fees are non-refundable.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>8. Confidentiality</h2>
        <p className={paragraphClassName}>
          Each party may receive confidential information from the other and agrees to protect it with reasonable safeguards and use it only for purposes of fulfilling obligations under these Terms.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>9. Intellectual Property</h2>
        <p className={paragraphClassName}>
          We and our licensors own all rights in the Service, software, and branding. These Terms grant a limited, non-exclusive, non-transferable right to use the Service. No implied IP transfer occurs.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>10. Feedback</h2>
        <p className={paragraphClassName}>
          If you provide feedback or suggestions, you grant us a perpetual, worldwide, royalty-free license to use it without further obligation to you.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>11. Service Availability and Changes</h2>
        <p className={paragraphClassName}>
          We may modify, update, or discontinue features from time to time. We do not guarantee uninterrupted or error-free operation.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>12. Data Export and Deletion</h2>
        <p className={paragraphClassName}>
          During active subscription (if applicable), customers may request data export where reasonably supported. Upon termination, data is handled according to retention and deletion practices unless law requires otherwise.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>13. Warranties Disclaimer</h2>
        <p className={paragraphClassName}>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>14. Limitation of Liability</h2>
        <p className={paragraphClassName}>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR LOSS OF PROFITS, REVENUE, OR DATA.
        </p>
        <p className={`${paragraphClassName} mt-4`}>
          OUR TOTAL AGGREGATE LIABILITY ARISING FROM OR RELATING TO THE SERVICE WILL NOT EXCEED AMOUNTS PAID BY CUSTOMER IN THE 12 MONTHS PRECEDING THE CLAIM (OR USD 100 IF NO FEES WERE PAID), UNLESS PROHIBITED BY LAW.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>15. Indemnification</h2>
        <p className={paragraphClassName}>
          You agree to indemnify and hold us harmless from claims, damages, and costs arising from your misuse of the Service, violation of law or these Terms, or your Customer Data and submitted content.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>16. Suspension and Termination</h2>
        <p className={paragraphClassName}>
          We may suspend or terminate access for breach of these Terms, security risk, abuse, legal requirements, or non-payment (if applicable). You may stop using the Service at any time.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>17. Governing Law and Dispute Resolution</h2>
        <p className={paragraphClassName}>
          These Terms are governed by the laws of <strong>Egypt</strong> (excluding conflict-of-laws rules). Disputes will be resolved in the courts of <strong>New Cairo, Egypt</strong>, unless parties agree otherwise.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>18. Changes to Terms</h2>
        <p className={paragraphClassName}>
          We may update these Terms and will post material changes in-app or on the website. Continued use after the effective date constitutes acceptance.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>19. Contact</h2>
        <ul className={listClassName}>
          <li>Legal notices: <strong>legal@bootstrpdai.com</strong></li>
          <li>Support: <strong>support@bootstrpdai.com</strong></li>
          <li>Address: <strong>New Cairo, Egypt</strong></li>
        </ul>
      </section>
    </LegalLayout>
  );
};

export default TermsOfService;

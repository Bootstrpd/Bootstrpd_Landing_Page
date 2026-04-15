import { useEffect } from "react";
import LegalLayout from "@/components/LegalLayout";

const sectionClassName = "card-nebula";
const headingClassName = "text-2xl font-semibold text-nebula-white mb-4";
const paragraphClassName = "text-muted-foreground leading-relaxed";
const listClassName = "list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | LMS by bootstrpd";
  }, []);

  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="This Privacy Policy explains how LMS by bootstrpd, a subproject of the Bootstrpd holding company, collects, uses, discloses, and protects personal data."
      lastUpdated="April 15, 2026"
    >
      <section className={sectionClassName}>
        <h2 className={headingClassName}>1. Who We Are</h2>
        <p className={paragraphClassName}>
          <strong>Bootstrpd</strong> (&quot;Bootstrpd&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) provides LMS services at <strong>https://lms.bootstrpdai.com</strong> and related tools (the &quot;Service&quot;).
        </p>
        <p className={`${paragraphClassName} mt-4`}>
          Data Controller (for account/admin data): <strong>Bootstrpd</strong>, <strong>New Cairo, Egypt</strong>, <strong>privacy@bootstrpdai.com</strong>. For student and school records, we generally act as a data processor/service provider on behalf of schools and educators.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>2. Scope</h2>
        <p className={paragraphClassName}>This policy applies to website and app use, teacher/admin accounts, student and parent information entered by customers, and integrations such as Google Sheets, Zoom, Supabase, and Resend.</p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>3. Data We Collect</h2>
        <h3 className="text-lg font-semibold text-nebula-white mb-3">A. Account and Identity Data</h3>
        <ul className={listClassName}>
          <li>Name, email, phone number, and user role (teacher/admin/assistant).</li>
          <li>Authentication identifiers (for example, Supabase user ID).</li>
        </ul>
        <h3 className="text-lg font-semibold text-nebula-white mt-6 mb-3">B. Organization and School Data</h3>
        <ul className={listClassName}>
          <li>Tenant/school name, slug, configuration, memberships, and permissions.</li>
        </ul>
        <h3 className="text-lg font-semibold text-nebula-white mt-6 mb-3">C. Student and Parent Data (Customer-Provided)</h3>
        <ul className={listClassName}>
          <li>Student full name, student number, school/class/course/group details.</li>
          <li>Student phone/email and parent or guardian contact details.</li>
          <li>Attendance, performance metadata, alerts, and educator notes.</li>
        </ul>
        <h3 className="text-lg font-semibold text-nebula-white mt-6 mb-3">D. Integration Data</h3>
        <ul className={listClassName}>
          <li>Google OAuth tokens and metadata (encrypted at rest).</li>
          <li>Zoom OAuth tokens, meeting metadata, and attendance metadata (encrypted at rest).</li>
          <li>Google Sheet mapping configuration and webhook payloads needed for integrations.</li>
        </ul>
        <h3 className="text-lg font-semibold text-nebula-white mt-6 mb-3">E. Technical and Usage Data</h3>
        <ul className={listClassName}>
          <li>IP address, browser/device information, logs, timestamps, and API metadata.</li>
          <li>Error, audit, and security diagnostic events.</li>
        </ul>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>4. How We Collect Data</h2>
        <ul className={listClassName}>
          <li>Directly from users through forms, uploads, edits, and support requests.</li>
          <li>From customer-configured integrations like Google Sheets and Zoom.</li>
          <li>Automatically through logs, telemetry, and security monitoring.</li>
        </ul>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>5. Legal Bases (Where Applicable)</h2>
        <p className={paragraphClassName}>
          Depending on jurisdiction, we rely on contract performance, legitimate interests (security/reliability/fraud prevention), consent where required, and legal obligations.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>6. How We Use Data</h2>
        <ul className={listClassName}>
          <li>Provide, secure, and operate the Service.</li>
          <li>Authenticate users and manage role-based access.</li>
          <li>Import and sync records from approved integrations.</li>
          <li>Support attendance, reporting, and academic workflows.</li>
          <li>Send operational communications and support updates.</li>
          <li>Improve product reliability, security, and core features.</li>
          <li>Comply with applicable legal requirements.</li>
        </ul>
        <p className={`${paragraphClassName} mt-4`}>We do not sell personal data.</p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>7. Integrations and OAuth Data</h2>
        <ul className={listClassName}>
          <li>We request scopes needed for user-authorized features only.</li>
          <li>OAuth access/refresh tokens are stored encrypted at rest.</li>
          <li>Tokens are used only to perform actions authorized by the connected user.</li>
          <li>Users can disconnect integrations to stop future syncing from our side.</li>
          <li>Third-party provider terms and policies also apply.</li>
        </ul>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>8. Sharing and Disclosure</h2>
        <ul className={listClassName}>
          <li>Infrastructure providers (hosting, database, monitoring, and email).</li>
          <li>Integration providers enabled by customer (for example, Google and Zoom).</li>
          <li>Professional advisors under confidentiality obligations.</li>
          <li>Authorities where legally required.</li>
          <li>Successor entities in mergers/acquisitions with appropriate safeguards.</li>
        </ul>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>9. Subprocessors</h2>
        <p className={paragraphClassName}>
          Current or typical subprocessors include Supabase, cloud hosting providers, Resend (if enabled), and Google or Zoom APIs when integrations are enabled by customers. We maintain contractual safeguards with subprocessors.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>10. International Transfers</h2>
        <p className={paragraphClassName}>
          Data may be processed in countries other than your own. Where required, we apply appropriate legal transfer safeguards.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>11. Data Retention</h2>
        <p className={paragraphClassName}>
          We retain data as needed to provide the Service, follow customer instructions, and satisfy legal, tax, audit, and security obligations. On valid request or termination, data is deleted or anonymized within a reasonable period unless legal retention is required.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>12. Security</h2>
        <ul className={listClassName}>
          <li>Encryption in transit and encrypted storage for sensitive tokens.</li>
          <li>Role-based access controls and least-privilege operations.</li>
          <li>Audit and logging controls for key workflows.</li>
          <li>Continuous improvements to technical and organizational safeguards.</li>
        </ul>
        <p className={`${paragraphClassName} mt-4`}>No system is 100% secure. Users should protect credentials and report suspicious activity promptly.</p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>13. Children&apos;s Data</h2>
        <p className={paragraphClassName}>
          The Service may process student data under school and educator authority. Customers are responsible for obtaining required permissions and consents under applicable laws (for example, COPPA, FERPA, or GDPR-K where relevant).
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>14. Your Rights</h2>
        <p className={paragraphClassName}>Depending on jurisdiction, rights may include access, correction, deletion, portability, objection/restriction, and withdrawal of consent where applicable.</p>
        <p className={`${paragraphClassName} mt-4`}>
          Requests: <strong>privacy@bootstrpdai.com</strong>. Where we are a processor, we may direct requests to the relevant school/customer (controller).
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>15. Cookies and Similar Technologies</h2>
        <p className={paragraphClassName}>
          We may use essential cookies and session storage for authentication, security, and app functionality. Non-essential analytics or marketing technologies, if any, are managed under applicable consent requirements.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>16. Data Breach Response</h2>
        <p className={paragraphClassName}>
          We maintain incident response procedures and notify affected customers and/or authorities where required by law.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>17. Changes to This Policy</h2>
        <p className={paragraphClassName}>
          We may update this policy periodically. Material changes are posted in-app or on our website with an updated last-modified date.
        </p>
      </section>

      <section className={sectionClassName}>
        <h2 className={headingClassName}>18. Contact</h2>
        <ul className={listClassName}>
          <li>Privacy inquiries: <strong>privacy@bootstrpdai.com</strong></li>
          <li>General support: <strong>support@bootstrpdai.com</strong></li>
          <li>Legal entity and address: <strong>Bootstrpd, New Cairo, Egypt</strong></li>
        </ul>
      </section>
    </LegalLayout>
  );
};

export default PrivacyPolicy;

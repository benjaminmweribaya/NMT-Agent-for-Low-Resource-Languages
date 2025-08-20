const GdprCompliance = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
        <h1 className="text-4xl font-bold tracking-tight mb-8">GDPR Compliance</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 18, 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Our Commitment to GDPR</h2>
          <p className="mb-4">We are committed to complying with the General Data Protection Regulation (GDPR) and protecting the privacy rights of individuals in the European Union. This page outlines how we implement GDPR requirements in our neural machine translation platform.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Legal Basis for Processing</h2>
          <p className="mb-4">We process personal data based on the following legal grounds:</p>
          
          <h3 className="text-xl font-semibold mb-2">Contractual Necessity</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Account creation and management</li>
            <li>Service delivery and translation processing</li>
            <li>Payment processing and billing</li>
            <li>Customer support and technical assistance</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Legitimate Interest</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Service improvement and optimization</li>
            <li>Security monitoring and fraud prevention</li>
            <li>Analytics and usage statistics</li>
            <li>Marketing to existing customers</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Consent</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Marketing communications to prospects</li>
            <li>Optional cookies and tracking</li>
            <li>Third-party integrations</li>
            <li>Research and development participation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Your Rights Under GDPR</h2>
          <p className="mb-4">As a data subject, you have the following rights:</p>

          <h3 className="text-xl font-semibold mb-2">Right of Access (Article 15)</h3>
          <p className="mb-4">You can request a copy of all personal data we hold about you, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Account information and profile data</li>
            <li>Translation history and usage logs</li>
            <li>Communication records</li>
            <li>Billing and payment information</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Right to Rectification (Article 16)</h3>
          <p className="mb-4">You can request correction of inaccurate or incomplete personal data through your account settings or by contacting us.</p>

          <h3 className="text-xl font-semibold mb-2">Right to Erasure (Article 17)</h3>
          <p className="mb-4">You can request deletion of your personal data in certain circumstances:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>The data is no longer necessary for the original purpose</li>
            <li>You withdraw consent and no other legal basis applies</li>
            <li>The data has been unlawfully processed</li>
            <li>Deletion is required for legal compliance</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Right to Restrict Processing (Article 18)</h3>
          <p className="mb-4">You can request limitation of processing when:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>You contest the accuracy of personal data</li>
            <li>Processing is unlawful but you oppose deletion</li>
            <li>We no longer need the data but you need it for legal claims</li>
            <li>You have objected to processing pending verification</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Right to Data Portability (Article 20)</h3>
          <p className="mb-4">You can receive your personal data in a structured, machine-readable format and transmit it to another service provider.</p>

          <h3 className="text-xl font-semibold mb-2">Right to Object (Article 21)</h3>
          <p className="mb-4">You can object to processing based on legitimate interests or for direct marketing purposes.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Protection Measures</h2>
          <p className="mb-4">We implement comprehensive technical and organizational measures:</p>

          <h3 className="text-xl font-semibold mb-2">Technical Measures</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>End-to-end encryption for data in transit and at rest</li>
            <li>Regular security audits and penetration testing</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Automated backup and disaster recovery systems</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Organizational Measures</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Privacy by design principles in system development</li>
            <li>Regular staff training on data protection</li>
            <li>Data processing agreements with third parties</li>
            <li>Privacy impact assessments for new features</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. International Data Transfers</h2>
          <p className="mb-4">When transferring personal data outside the EEA, we ensure adequate protection through:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
            <li>Adequacy decisions for transfers to approved countries</li>
            <li>Binding Corporate Rules for intra-group transfers</li>
            <li>Certification schemes and codes of conduct</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
          <p className="mb-4">We retain personal data only as long as necessary:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Account data: Retained while account is active plus 3 years</li>
            <li>Translation data: Deleted after 30 days unless explicitly saved</li>
            <li>Billing data: Retained for 7 years for tax and legal requirements</li>
            <li>Support data: Retained for 5 years or until resolution</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Data Breach Notification</h2>
          <p className="mb-4">In case of a personal data breach, we will:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Notify the relevant supervisory authority within 72 hours</li>
            <li>Inform affected individuals without undue delay if high risk exists</li>
            <li>Document all breaches and remediation actions</li>
            <li>Conduct post-incident reviews to prevent future breaches</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Data Protection Officer</h2>
          <p className="mb-4">Our Data Protection Officer (DPO) is responsible for:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Monitoring GDPR compliance</li>
            <li>Conducting privacy impact assessments</li>
            <li>Serving as contact point for supervisory authorities</li>
            <li>Providing data protection training and guidance</li>
          </ul>
          <p className="mb-4">Contact our DPO: dpo@nmtplatform.com</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. How to Exercise Your Rights</h2>
          <p className="mb-4">To exercise your GDPR rights:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the privacy controls in your account dashboard</li>
            <li>Submit a request through our privacy request form</li>
            <li>Email us at privacy@nmtplatform.com</li>
            <li>Contact our Data Protection Officer directly</li>
          </ul>
          <p className="mb-4">We will respond to your request within 30 days and may request identity verification for security purposes.</p>
          
          <div className="mt-4">
            <a 
              href="/gdpr-request" 
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Submit GDPR Request
            </a>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Complaints and Supervisory Authority</h2>
          <p className="mb-4">If you believe we have not handled your personal data properly, you have the right to lodge a complaint with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your local supervisory authority</li>
            <li>The Information Commissioner's Office (ICO) if you're in the UK</li>
            <li>The Commission Nationale de l'Informatique et des Libertés (CNIL) if you're in France</li>
            <li>Any other relevant EU data protection authority</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
          <p className="mb-4">For GDPR-related inquiries:</p>
          <ul className="list-none mb-4">
            <li>Data Protection Officer: dpo@nmtplatform.com</li>
            <li>Privacy Team: privacy@nmtplatform.com</li>
            <li>Address: 1234 Tech Street, San Francisco, CA 94105</li>
            <li>EU Representative: [EU Representative Details]</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default GdprCompliance;
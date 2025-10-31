import Footer from "@/components/footer";
import Header from "@/components/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | DesignFix",
  description: "Read the Terms of Service for DesignFix. By using our CAD automation services, you agree to these terms.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto dark:prose-invert">
            <h1>Terms of Service</h1>
            <p>
              <em>Last updated: 20 July 2025</em>
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services, software, or website
              (collectively, “Services”) provided by DesignFix (“Company, we,
              us”), you (“Client, you”) agree to be bound by these Terms of
              Service (“Terms”). If you do not accept all Terms, you may not use
              our Services.
            </p>

            <h2>2. Scope of Services</h2>
            <p>
              DesignFix provides computer-aided-design (CAD) automation
              consulting, custom software add-ins, training, and related
              technical support (the “Services”) as described in individual
              project proposals or Statements of Work (“SOW”). Any new features
              are subject to these Terms unless expressly stated otherwise.
            </p>

            <h2>3. Eligibility</h2>
            <p>
              You must be at least 18 years old and have the legal capacity to
              enter into contracts. By using our Services, you represent that
              you meet these requirements.
            </p>

            <h2>4. Quotes, Fees, and Payment</h2>
            <p>
              <strong>4.1 Quotes & SOW.</strong> Pricing and deliverables are
              specified in a written Quote or SOW accepted by both parties.
            </p>
            <p>
              <strong>4.2 Invoices.</strong> Unless otherwise agreed, invoices
              are due 30 days from the invoice date. Late payments incur 1.5 %
              per month interest (or the maximum rate allowed by law).
            </p>
            <p>
              <strong>4.3 Taxes.</strong> Client is responsible for all
              applicable taxes, duties, or levies, excluding taxes based on our
              net income.
            </p>

            <h2>5. Intellectual Property</h2>
            <p>
              <strong>5.1 Pre-existing IP.</strong> Each party retains
              ownership of intellectual property it owned before the engagement.
            </p>
            <p>
              <strong>5.2 Deliverables.</strong> Upon full payment, we grant
              you a worldwide, non-exclusive, perpetual license to use project
              deliverables within your organization. We retain the right to
              reuse underlying know-how and generic code not specific to your
              confidential information.
            </p>
            <p>
              <strong>5.3 Third-Party Software.</strong> Deliverables may
              utilize third-party components licensed under their own terms. You
              agree to comply with those licenses.
            </p>

            <h2>6. Confidentiality</h2>
            <p>
              Both parties agree to protect confidential information with the
              same care they use for their own confidential information and to
              use it only for purposes of the SOW. This obligation survives for
              three (3) years after termination, except for trade secrets, which
              remain protected indefinitely.
            </p>

            <h2>7. Warranties & Disclaimers</h2>
            <p>
              <strong>7.1 Performance Warranty.</strong> We warrant that
              Services will be performed in a professional and workmanlike
              manner consistent with industry standards for 90 days after
              delivery.
            </p>
            <p>
              <strong>7.2 Disclaimer.</strong> EXCEPT AS EXPRESSLY STATED,
              SERVICES ARE PROVIDED “AS IS.” WE DISCLAIM ALL OTHER WARRANTIES,
              EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A
              PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, neither party will be
              liable for indirect, incidental, special, or consequential
              damages arising out of or related to the Services, even if
              advised of the possibility. Our total cumulative liability under
              these Terms will not exceed the fees actually paid to us for the
              specific SOW giving rise to the claim.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              Client will indemnify and hold harmless DesignFix, its officers,
              and employees against any third-party claims arising from (a)
              Client’s misuse of the Services, (b) content provided by Client,
              or (c) Client’s violation of applicable laws or these Terms.
            </p>

            <h2>10. Termination</h2>
            <p>
              <strong>10.1 For Convenience.</strong> Either party may
              terminate an SOW on 15 days’ written notice. Client will pay for
              work performed up to the effective termination date.
            </p>
            <p>
              <strong>10.2 For Cause.</strong> Either party may terminate
              immediately if the other materially breaches these Terms and fails
              to cure within 10 days after written notice.
            </p>
            <p>
              <strong>10.3 Effects.</strong> Sections 5–9, 11, and any payment
              obligations survive termination.
            </p>

            <h2>11. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms shall be governed by the laws of Sri Lanka, without
              regard to its conflict-of-laws principles. Any disputes will be
              resolved by arbitration in Colombo (or the courts of competent
              jurisdiction in Colombo, if arbitration is unavailable). Each
              party waives any right to a jury trial.
            </p>

            <h2>12. Force Majeure</h2>
            <p>
              Neither party is liable for delays or failure to perform due to
              events beyond reasonable control, including natural disasters,
              war, terrorism, labor disputes, Internet outages, or acts of
              government.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We may update these Terms by posting a revised version on our
              website and updating the “Last updated” date. Continued use of
              the Services after changes become effective constitutes
              acceptance of the revised Terms.
            </p>

            <h2>14. Miscellaneous</h2>
            <p>
              <strong>Independent Contractors.</strong> The relationship is
              that of independent contractors; nothing creates an agency, joint
              venture, or partnership.
            </p>
            <p>
              <strong>Entire Agreement.</strong> These Terms plus any SOW
              constitute the entire agreement and supersede all prior oral or
              written agreements.
            </p>
            <p>
              <strong>Severability.</strong> If any provision is
              unenforceable, the remainder stays in effect.
            </p>
            <p>
              <strong>Assignment.</strong> Neither party may assign its rights
              or obligations without prior written consent, except to a
              successor via merger or asset transfer.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms or the Services,
              please contact:
            </p>
            <address className="not-italic">
              <strong>DesignFix</strong>
              <br />
              Attn: S. Prashanth (Developer & Founder)
              <br />
              Address Line 1
              <br />
              City, Postal Code, Sri Lanka
              <br />
              Phone: +94-xxx-xxx-xxxx
              <br />
              Email: support@designfix.com
            </address>

            <p>© 2025 DesignFix. All rights reserved.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

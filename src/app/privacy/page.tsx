import Footer from "@/components/footer";
import Header from "@/components/header";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl mx-auto dark:prose-invert">
            <h1>Privacy Policy</h1>
            <p>
              <em>Last updated: 20 July 2025</em>
            </p>
            <p>
              This is a placeholder for your privacy policy. You should replace
              this text with your own policy, detailing how you collect, use,
              and protect your users' data.
            </p>
            <h2>1. Information We Collect</h2>
            <p>
              Describe the types of information you collect (e.g., personal
              data, usage data).
            </p>
            <h2>2. How We Use Your Information</h2>
            <p>
              Explain the purpose of data collection (e.g., to provide
              services, for marketing).
            </p>
            <h2>3. Data Sharing and Disclosure</h2>
            <p>
              Detail if and how you share data with third parties.
            </p>
            <h2>4. Data Security</h2>
            <p>
              Explain the measures you take to take to protect user data.
            </p>
            <h2>5. Your Rights</h2>
            <p>
              Inform users of their rights regarding their data (e.g., access,
              deletion).
            </p>
            <h2>Contact Us</h2>
            <p>
              Provide contact information for any privacy-related inquiries.
            </p>
             <address className="not-italic">
              <strong>DesignFlow AI</strong>
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

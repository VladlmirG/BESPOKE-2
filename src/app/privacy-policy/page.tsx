import Head from 'next/head'; 
import type { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "BESPOKE XV & FORMAL | Privacy Policy",
  description: "Bespoke XV & Formal Privacy Policy",
};

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <meta property="og:title" content="BESPOKE XV & FORMAL | Privacy Policy" />
        <meta property="og:description" content="Bespoke XV & Formal Privacy Policy" />
        <meta property="og:image" content="https://mydomain/favicon.ico" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BESPOKE XV & FORMAL | Privacy Policy" />
        <meta name="twitter:description" content="Bespoke XV & Formal Privacy Policy" />
        <meta name="twitter:image" content="https://mydomain/favicon.ico" />
      </Head>

      <div className="px-4 pt-24 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        <div>
          <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
          <p>
            Bespoke XV & Formal runs <strong><a href="https://bespokequince.com/" className="text-hovr">bespokequince.com</a></strong>. This portal aims to inform you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site. We use your Personal Information only for providing and improving the Site. By using our third-party Booking and Events component on our Site, you expressly consent to our use and disclosure of your Personal Information in the manner described in this policy. Please check back frequently to ensure that you are familiar with our current policies and practices.
          </p>

          <br /><br />

          <p>
            While using our Site, we may ask you to provide certain personally identifiable information that can be used to contact or identify you. We do not collect Personal Information from children under 13 without parental consent. Personal Information may include, but is not limited to, your name, email address, phone number, or other data to help you with your user experience ("Personal Information"). This information is collected from you when you book a meeting on our site or enter information on our site. You can also contact us directly using the contact information provided on the site.
          </p>

          <br /><br />

          <h4 className="text-xl font-bold mb-4">We may use the information we collect from you in the following ways:</h4>
          <ul className="list-disc list-inside">
            <li>To personalize your experience.</li><br />
            <li>To enhance existing features or develop new features on the site.</li><br />
            <li>To improve our website usability in order to better serve you.</li><br />
            <li>To contact and follow up with you regarding inquiries via email or phone.</li><br />
          </ul>

          <p>
            We may retain Personal Information provided to us indefinitely. In addition, we may share Personal Information with third parties to the extent reasonably necessary to: protect the security and integrity of our Website; to take precautions against liability; to respond to judicial process; or to the extent permitted under provisions of law, to provide information to law enforcement agencies or for an investigation related to public safety.
          </p>

          <br /><br />

          <h4 className="text-xl font-bold mb-4">Cookies Policy</h4>
          <p>
            Cookies are files with a small amount of data, which may include an anonymous unique identifier, sent to your browser from a website and stored on your computer's hard drive for record-keeping purposes. Cookies are a common industry standard, and like many sites, we use cookies to collect information. Using cookies helps us remember users' visits, understand and save user preferences for future visits, keep track of advertisements, compile aggregate data about site traffic, and site interactions to offer better site experiences and tools in the future. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use our site to its full extent.
          </p>

          <br /><br />

          <h4 className="text-xl font-bold mb-4">Links To Other Websites</h4>
          <p>
            Our Site may contain links to other websites, including those of sponsors and advertisers, whose information practices may be different from ours. Visitors should consult those other third-party websites' privacy notices, as they are not covered by our privacy policy and may follow different procedures.
          </p>

          <br /><br />

          <h4 className="text-xl font-bold mb-4">Security</h4>
          <p>
            Securing your Personal Information is important to us, but keep in mind that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
          </p>

          <br /><br />

          <h4 className="text-xl font-bold mb-4">Changes To This Privacy Policy</h4>
          <p>
            We may modify this Privacy Policy from time to time. We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of our services after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide by and be bound by the modified Privacy Policy. If we make any changes to this Privacy Policy, we will notify you either through the email address you may have provided us, or by placing a prominent notice on our website.
          </p>

          <br /><br />
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;


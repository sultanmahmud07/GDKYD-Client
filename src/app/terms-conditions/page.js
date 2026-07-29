import TopGap from "../../components/Shared/TopGap/TopGap";
import SafeEmailLink from "../../components/Shared/SafeEmailLink";

const TermsAndConditions = () => {
  return (
    <section className="pt-5">
      <TopGap />
      <div className="main_container py-5 md:py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-6">
          Terms & Conditions
        </h1>
        <div className="space-y-6 text-gray-700">
          {/* Introduction */}
          <div>
            <p>
              Welcome to the website of Guangdong Kuaiyuda Precision Machinery Co., Ltd. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). By accessing or using our website and services, you agree to be bound by these Terms & Conditions. Please read them carefully. If you do not agree to these terms, you may not access or use our services.
            </p>
          </div>

          {/* Acceptance of Terms */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Acceptance of Terms</h2>
            <p>
              By using our website, products, and services, you acknowledge that you have read, understood, and agree to comply with these Terms & Conditions, along with our Privacy Policy.
            </p>
          </div>

          {/* Privacy Policy */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Privacy Policy</h2>
            <p>
              We are committed to protecting your privacy. Our Privacy Policy outlines how we collect, use, and safeguard your personal information. By using our services, you consent to the collection and use of your information in accordance with our Privacy Policy.
            </p>
          </div>

          {/* Products and Services */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Products and Services</h2>
            <p>
              We specialize in the manufacturing and supply of non-woven deep processing equipment, including but not limited to:
            </p>
            <ul className="list-disc list-inside">
              <li>Medical labor protection mask machines</li>
              <li>Non-woven beauty and life product manufacturing machines</li>
              <li>Non-woven hotel and aviation product machinery</li>
            </ul>
            <p>
              All product specifications, pricing, and availability are subject to change without notice.
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, images, graphics, logos, and software, is the property of Guangdong Kuaiyuda Precision Machinery Co., Ltd. and is protected by applicable intellectual property laws. Unauthorized use or reproduction of any content is strictly prohibited.
            </p>
          </div>

          {/* User Obligations */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">User Obligations</h2>
            <p>You agree to:</p>
            <ul className="list-disc list-inside">
              <li>Use our website and services only for lawful purposes.</li>
              <li>Provide accurate and complete information when requested.</li>
              <li>Not engage in any activity that could harm, disrupt, or interfere with our services.</li>
            </ul>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Guangdong Kuaiyuda Precision Machinery Co., Ltd. shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from your use of our website, products, or services.
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We do not endorse or assume responsibility for any third-party content, products, or services. Access to such sites is at your own risk.
            </p>
          </div>

          {/* Modification of Terms */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Modification of Terms</h2>
            <p>
              We reserve the right to modify these Terms & Conditions at any time without prior notice. Changes will be effective immediately upon posting on our website. Your continued use of our services constitutes your acceptance of the revised terms.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Governing Law</h2>
            <p>
              These Terms & Conditions shall be governed by and construed in accordance with the laws of the People’s Republic of China, without regard to its conflict of law principles.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
            <p>
              For any questions or concerns regarding these Terms & Conditions, please contact us at:
            </p>
            <ul>
              <li>
                <strong>Address:</strong> No.321 Dongshen Road, Tangxia Town, Dongguan City, Guangdong Province
              </li>
              <li>
                <strong>Email:</strong> <SafeEmailLink textOnly={true} />
              </li>
              <li>
                <strong>Phone:</strong> 86-13902617335
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;

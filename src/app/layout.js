import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import "./globals.css";
import NavbarWrap from "../components/Shared/Navbar/NavberWrap";
import NewFooter from "../components/Shared/Footer/NewFooter";
import ChatBox from "../components/Shared/ChatBox/ChatBox";
import SocialIcons from "../components/Shared/SocialIcons/SocialIcons";
import { Toaster } from "react-hot-toast";
import Script from "next/script";

export const metadata = {
  title:
    "Guangdong KYD Company | Trusted Medical Equipment Manufacturer & Face Mask Machine Supplier",
  description:
    "Guangdong KYD Company – A leading manufacturer of automatic medical mask machines, non-woven production lines, and disposable hygiene product machines. Trusted for innovation, efficiency, and precision in automated manufacturing solutions. Contact us today!",
  metadataBase: new URL(`https://gdkyd.com`),
  alternates: {
    canonical: "./",
  },
  siteName: "GDKYD",
  type: "Organization",
  category: "Service",
  url: "https://gdkyd.com",
  icons: {
    icon: "https://gdkyd.com/assets/logo/main-logo.webp",
  },
  openGraph: {
    title: "Guangdong KYD Company",
    description: "The best medical equipment at your fingertips.",
    images:
      "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain-logo.af298e21.webp&w=828&q=75",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
        alt: "Guangdong KYD Company Logo",
      },
    ],
  },
  // authors: [{ name: "GDKYD" }, { name: "GDKYD", url: "https://www.gdkyd.com" }],
  creator: "GDKYD",
  publisher: "GDKYD",
  formatDetection: {
    email: "kyd@kuaiyuda.com",
    address:
      "No.321 Dongshen Road, Tangxia Town, Dongguan City, Guangdong Province",
    telephone: "+1-234-567-890",
  },
  keywords: [
    "Trusted Medical Equipment Manufacturer",
    "Face Mask Machine Supplier",
  ],
  verification: {
    google: "h3e62bYsWEGHaX-2QCqFFXfOGtkjb5lMJ_FJpg0a6R0", // Paste the code from Google Search Console [1, 4, 19]
  },
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  // Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GDKYD",
    url: "https://gdkyd.com",
    logo: `https://gdkyd.com/assets/logo/main-logo.webp`,
    image: `https://gdkyd.com/assets/logo/main-logo.webp`,
    description:
      "Guangdong KYD Company – A leading manufacturer of automatic medical mask machines, non-woven production lines, and disposable hygiene product machines. Trusted for innovation, efficiency, and precision in automated manufacturing solutions. Contact us today!",
    telephone: "+1-234-567-890", // Add your business phone number here
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-234-567-890",
        contactType: "customer service",
        areaServed: "World",
        availableLanguage: ["English", "Chinese"],
      },
    ],
  };
  return (
    <html lang={locale}>
      <head>
        {/* Add Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-9GV6PTWLPM`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9GV6PTWLPM');
          `}
        </Script>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W3BPJSZR');
`}
        </Script>
        {/* <Script>
          {` window.okkiConfigs = window.okkiConfigs || [];
  function okkiAdd() { okkiConfigs.push(arguments); };
  okkiAdd("analytics", { siteId: "74988-19919", gId: "" });`}
        </Script>
        <Script
          async
          src="//tfile.xiaoman.cn/okki/analyze.js?id=74988-19919-"
        ></Script> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={``}>
        <Toaster position="top-center" />
        <NextIntlClientProvider messages={messages}>
          <NavbarWrap></NavbarWrap>
          <SocialIcons></SocialIcons>
          <ChatBox></ChatBox>
          {children}
          <NewFooter></NewFooter>
        </NextIntlClientProvider>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W3BPJSZR"
            height="0"
            width="0"
            // style="display:none;visibility:hidden"
            style={{display: "none", visibility: "hidden"}}
          ></iframe>
        </noscript>
      </body>
    </html>
  );
}

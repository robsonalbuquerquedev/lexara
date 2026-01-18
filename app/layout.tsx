import MainLayout from "@/components/layout/MainLayout";
import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEXARA",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* 🧠 Google Consent Mode */}
        <Script id="consent-mode" strategy="beforeInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied'
    });
  `}
        </Script>
        {/* 📊 Google Analytics 4 — LEXARA */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-J6RKYV5X83"
          strategy="afterInteractive"
        />

        <Script id="ga4-init-lexara" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-J6RKYV5X83', {
      anonymize_ip: true,
      allow_ad_personalization_signals: false
    });
  `}
        </Script>
      </head>
      <body
      >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}

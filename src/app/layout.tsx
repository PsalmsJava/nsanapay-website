// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://nsana.com.ng";

const themeInitScript = `(function(){try{var t=localStorage.getItem("nsana_theme");var d=t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark");}catch(e){}})();`;

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "#00A86B" },
        { media: "(prefers-color-scheme: dark)", color: "#0A0F1A" },
    ],
    width: "device-width",
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "NsanaPay | Powering Circular Economy in Nigeria",
        template: "%s | NsanaPay",
    },
    description:
        "NsanaPay rewards everyday people for proper recycling, powers clean material supply for vendors, and creates green jobs for logistics across Nigeria.",
    keywords: [
        "recycling Nigeria",
        "circular economy",
        "plastic recycling",
        "PET bottles recycling",
        "aluminium recycling",
        "waste to wealth",
        "Akwa Ibom recycling",
        "green jobs Nigeria",
        "escrow recycling payouts",
    ],
    authors: [{ name: "NsanaPay Technologies" }],
    creator: "NsanaPay Technologies",
    icons: {
        icon: "/logo.png",
        shortcut: "/logo.png",
        apple: "/logo.png",
    },
    openGraph: {
        type: "website",
        locale: "en_NG",
        url: SITE_URL,
        siteName: "NsanaPay",
        title: "NsanaPay | Powering Circular Economy",
        description:
            "Turning waste into income. Building recycling infrastructure in Nigeria.",
        images: [{ url: "/logo.png", width: 512, height: 512, alt: "NsanaPay Logo" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "NsanaPay | Powering Circular Economy",
        description:
            "Turning waste into income. Building recycling infrastructure in Nigeria.",
        images: ["/logo.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NsanaPay",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
        "Digital infrastructure for Nigeria's circular economy — turning plastic and aluminium waste into verified wealth.",
    email: "officialnsanapay@gmail.com",
    telephone: "+234-708-720-5205",
    address: {
        "@type": "PostalAddress",
        addressRegion: "Akwa Ibom State",
        addressCountry: "NG",
    },
    sameAs: ["https://www.facebook.com/share/19VCg7nqsa/"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body
                suppressHydrationWarning
                className={`${inter.variable} font-sans antialiased bg-white dark:bg-surface-dark text-slate-900 dark:text-slate-100`}
            >
                {children}
            </body>
        </html>
    );
}

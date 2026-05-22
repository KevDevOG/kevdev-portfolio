/**
 * Root layout — renders <html> and <body> ONCE.
 *
 * Keeping <html> here (outside [locale]) means React never
 * unmounts/remounts it during locale navigation, so the
 * data-theme / .dark class set by the inline script survives
 * the full client-side transition without a white flash.
 */

import { Space_Grotesk, Geist_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Runs synchronously before first paint.
 * Reads localStorage, resolves system preference, applies
 * .dark / .light class + data-theme + color-scheme so the
 * background is correct immediately — including after a
 * client-side locale switch.
 */
const themeScript = `(function(){try{var t=localStorage.getItem('theme')||'system';var c=t==='system'?(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):t;var r=document.documentElement;r.classList.remove('light','dark');r.classList.add(c);r.setAttribute('data-theme',c);r.style.colorScheme=c;}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* Theme script must be the FIRST thing in <head> so it blocks paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}

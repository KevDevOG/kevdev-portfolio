import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['es', 'en'],
  
  // Used when no locale matches
  defaultLocale: 'es',

  // Localized pathnames for legal pages
  pathnames: {
    '/aviso-legal': {
      es: '/aviso-legal',
      en: '/legal-notice'
    },
    '/privacidad': {
      es: '/privacidad',
      en: '/privacy'
    },
    '/cookies': {
      es: '/cookies',
      en: '/cookies'
    }
  }
});

// Lightweight wrappers around Next.js' navigation APIs
// that will automatically consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);

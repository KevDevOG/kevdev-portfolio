import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match internationalized pathnames including legal pages
  matcher: ['/', '/(es|en)/:path*', '/aviso-legal', '/legal-notice', '/privacidad', '/privacy', '/cookies']
};

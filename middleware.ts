import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './i18nconfig';
 
export default createMiddleware({
  // A list of all locales that are supported
 
  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix,
  locales,
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
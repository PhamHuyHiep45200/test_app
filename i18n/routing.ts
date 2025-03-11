import { LOCALE_PAGE } from '@/app/_contants/locale.contant';
import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [LOCALE_PAGE.EN, LOCALE_PAGE.VI],
 
  // Used when no locale matches
  defaultLocale: LOCALE_PAGE.EN
});
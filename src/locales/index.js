import ar from './ar.js';
import en from './en.js';
import hi from './hi.js';

export const LOCALES = Object.freeze({
  ar,
  en,
  hi
});

export const SUPPORTED_LANGUAGES = Object.freeze([
  { code: 'ar', name: 'العربية', dir: 'rtl', nativeName: 'العربية' },
  { code: 'en', name: 'English', dir: 'ltr', nativeName: 'English' },
  { code: 'hi', name: 'हिन्दी', dir: 'ltr', nativeName: 'हिन्दी' }
]);

export function getTranslation(lang, key, fallback = '') {
  const dictionary = LOCALES[lang] || LOCALES.ar;
  return dictionary[key] || LOCALES.ar[key] || fallback || key;
}

const EASTERN_ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
const DEVANAGARI_DIGITS = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];

export function formatLocalizedNumber(num, lang = 'ar', useEasternDigits = true) {
  if (num === null || num === undefined) return '';
  const str = String(num);

  if (lang === 'ar' && useEasternDigits) {
    return str.replace(/\d/g, d => EASTERN_ARABIC_DIGITS[d]);
  }

  if (lang === 'hi' && useEasternDigits) {
    return str.replace(/\d/g, d => DEVANAGARI_DIGITS[d]);
  }

  return str;
}

// The site targets the USA only; a single locale is kept so the `locale`
// prop / lead payload field stays stable.
export const DEFAULT_LOCALE = 'en-us'

export function getLocaleFromPath() {
  return DEFAULT_LOCALE
}

export const LOCALE_CONTENT = {
  'en-us': {
    title: 'FlashFire Jobs — Land a Sponsored US Job in 90 Days',
    sub: 'Share your details and discover how our team can help you land more interviews by applying to 1,200 targeted US jobs on your behalf.',
    phonePlaceholder: '+1 (415) 555-0123',
    statusOrder: [
      'F-1 Student Visa (US)',
      'OPT / STEM OPT (US)',
      'H-1B Visa (US)',
      'Just exploring',
    ],
  },
}

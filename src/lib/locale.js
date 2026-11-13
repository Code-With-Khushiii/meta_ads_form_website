// The site targets the UK only; a single locale is kept so the `locale`
// prop / lead payload field stays stable.
export const DEFAULT_LOCALE = 'en-gb'

export function getLocaleFromPath() {
  return DEFAULT_LOCALE
}

export const LOCALE_CONTENT = {
  'en-gb': {
    title: 'FlashFire Jobs — Land a Sponsored UK Job in 90 Days',
    sub: 'Share your details and discover how our team can help you land more interviews by applying to 1,200 targeted UK jobs on your behalf.',
    phonePlaceholder: '+44 7700 900123',
    statusOrder: [
      'Student Visa (UK)',
      'Graduate Visa (UK)',
      'Skilled Worker Visa (UK)',
      'Just exploring',
    ],
  },
}

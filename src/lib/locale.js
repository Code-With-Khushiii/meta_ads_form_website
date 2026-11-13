// The site targets the UK only; a single locale is kept so the `locale`
// prop / lead payload field stays stable.
export const DEFAULT_LOCALE = 'en-gb'

export function getLocaleFromPath() {
  return DEFAULT_LOCALE
}

export const LOCALE_CONTENT = {
  'en-gb': {
    title: 'FlashFire Jobs — Land Interview Calls Faster With Your AI Copilot',
    sub: 'Your AI Copilot applies to up to 1,200 UK jobs and tracks every application, so you can focus on preparing for the interview.',
    phonePlaceholder: '+44 7700 900123',
    statusOrder: [
      'Student Visa (UK)',
      'Graduate Visa (UK)',
      'Skilled Worker Visa (UK)',
      'Just exploring',
    ],
  },
}

// Form validation for the lead wizard. Each validator returns an error
// message string, or '' when the value is acceptable.

// Phone/WhatsApp numbers: any country and any format, but digits only
// (plus an optional leading + and common separators).
export function validatePhone(raw) {
  const s = (raw || '').trim()
  if (!s) return 'Please enter your phone number.'
  if (s.length > 32) return 'Phone number must be at most 32 characters.'
  // Digits plus the usual separators only: no letters or other symbols.
  if (!/^\+?[\d\s().-]+$/.test(s)) return 'Please type numbers only (e.g. (415) 555-0123 or +1 415 555 0123). Letters are not allowed.'
  const digits = s.replace(/\D/g, '').length
  if (digits < 7 || digits > 15) return 'Please enter a valid phone number (7–15 digits).'
  return ''
}

// True for a fully typed US number, used to advance faster than for other
// countries (whose length we can't know).
export function isCompleteUsPhone(raw) {
  let t = (raw || '').replace(/[\s().-]/g, '')
  if (t.startsWith('+1')) t = t.slice(2)
  else if (t.startsWith('001')) t = t.slice(3)
  else if (t.startsWith('1') && t.length === 11) t = t.slice(1)
  // NANP: area code and exchange both start with 2-9.
  return /^[2-9]\d{2}[2-9]\d{6}$/.test(t)
}

export function validateName(raw) {
  const s = (raw || '').trim()
  if (s.length < 2) return 'Please enter your full name.'
  if (s.length > 200) return 'Name must be at most 200 characters.'
  if (!/\p{L}{2,}/u.test(s)) return 'Please enter your real name.'
  if (/\d/.test(s)) return 'Name should not contain numbers.'
  if (!/^[\p{L}\p{M}][\p{L}\p{M}\s'.-]*$/u.test(s)) return 'Name contains invalid characters.'
  return ''
}

const DOMAIN_TYPOS = {
  'gmial.com': 'gmail.com',
  'gmai.com': 'gmail.com',
  'gmail.co': 'gmail.com',
  'gmail.con': 'gmail.com',
  'gmaill.com': 'gmail.com',
  'gnail.com': 'gmail.com',
  'hotmial.com': 'hotmail.com',
  'hotmail.con': 'hotmail.com',
  'hotmai.com': 'hotmail.com',
  'yaho.com': 'yahoo.com',
  'yahoo.con': 'yahoo.com',
  'yahooo.com': 'yahoo.com',
  'outlok.com': 'outlook.com',
  'outlook.con': 'outlook.com',
  'iclod.com': 'icloud.com',
  'icloud.con': 'icloud.com',
}

export function validateEmail(raw) {
  const s = (raw || '').trim()
  if (!s) return 'Please enter your email address.'
  if (s.length > 320) return 'Email must be at most 320 characters.'
  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/.test(s) || s.includes('..')) {
    return 'Please enter a valid email address.'
  }
  const domain = s.split('@')[1].toLowerCase()
  if (DOMAIN_TYPOS[domain]) return `Did you mean ${s.split('@')[0]}@${DOMAIN_TYPOS[domain]}?`
  return ''
}

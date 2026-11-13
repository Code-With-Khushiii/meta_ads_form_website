const universities = [
  {
    name: 'Massachusetts Institute of Technology',
    domain: 'mit.edu',
    wordmark: ['MIT'],
    color: '#a31f34',
  },
  {
    name: 'Stanford University',
    domain: 'stanford.edu',
    wordmark: ['Stanford', 'University'],
    color: '#8c1515',
  },
  {
    name: 'Harvard University',
    domain: 'harvard.edu',
    wordmark: ['HARVARD', 'UNIVERSITY'],
    color: '#a51c30',
  },
  {
    name: 'Carnegie Mellon University',
    domain: 'cmu.edu',
    wordmark: ['Carnegie Mellon', 'University'],
    color: '#c41230',
  },
  {
    name: 'UC Berkeley',
    domain: 'berkeley.edu',
    wordmark: ['UC Berkeley'],
    color: '#003262',
  },
]

function getLogoUrl(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
}

function getLineStyle(line) {
  if (line === 'UNIVERSITY OF') {
    return { fontSize: '11px', fontWeight: 700, lineHeight: 1, letterSpacing: '0.03em' }
  }
  return { fontSize: '22px', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.02em' }
}

export default function Trust() {
  return (
    <section style={{ padding: '36px 24px', textAlign: 'center', background: '#fff' }}>
      <p style={{
        fontSize: '20px', fontWeight: 500, color: '#9d9d9d',
        marginBottom: '28px', lineHeight: 1.4,
      }}>
        Trusted by students and graduates from top US universities.
      </p>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '32px 72px',
        margin: '0 auto',
      }}>
        {universities.map(u => (
          <div
            key={u.name}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '10px', color: u.color, opacity: 0.9, whiteSpace: 'nowrap',
            }}
          >
            <img
              src={getLogoUrl(u.domain)}
              alt=""
              onError={e => { e.currentTarget.style.display = 'none' }}
              width={44}
              height={44}
              style={{ width: 44, height: 44, objectFit: 'contain', opacity: 0.9 }}
            />
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', fontFamily: 'Georgia, serif' }}>
              {u.wordmark.map(line => (
                <span key={line} style={getLineStyle(line)}>
                  {line}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

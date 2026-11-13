const universities = [
  {
    name: 'University of Oxford',
    domain: 'ox.ac.uk',
    wordmark: ['UNIVERSITY OF', 'OXFORD'],
    color: '#002147',
  },
  {
    name: 'University of Cambridge',
    domain: 'cam.ac.uk',
    wordmark: ['UNIVERSITY OF', 'CAMBRIDGE'],
    color: '#5f8f78',
  },
  {
    name: 'Imperial College London',
    domain: 'imperial.ac.uk',
    wordmark: ['Imperial College', 'London'],
    color: '#003e74',
  },
  {
    name: 'UCL',
    domain: 'ucl.ac.uk',
    wordmark: ['UCL'],
    color: '#500778',
  },
  {
    name: 'University of Edinburgh',
    domain: 'www.ed.ac.uk',
    wordmark: ['UNIVERSITY OF', 'EDINBURGH'],
    color: '#041e42',
  },
]

function getLogoUrl(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`
}

function getLineStyle(line) {
  if (line === 'UNIVERSITY OF') {
    return { fontSize: '7px', fontWeight: 700, lineHeight: 1, letterSpacing: '0.03em' }
  }
  return { fontSize: '14px', fontWeight: 700, lineHeight: 0.9, letterSpacing: '-0.02em' }
}

export default function Trust() {
  return (
    <section style={{ padding: '36px 24px', textAlign: 'center', background: '#fff' }}>
      <p style={{
        fontSize: '20px', fontWeight: 500, color: '#9d9d9d',
        marginBottom: '28px', lineHeight: 1.4,
      }}>
        Trusted by students and graduates from top UK universities.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        alignItems: 'center',
        gap: '24px 40px',
        margin: '0 auto',
      }}>
        {universities.map(u => (
          <div
            key={u.name}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              gap: '8px', color: u.color, opacity: 0.9, whiteSpace: 'nowrap',
            }}
          >
            <img
              src={getLogoUrl(u.domain)}
              alt=""
              onError={e => { e.currentTarget.style.display = 'none' }}
              width={28}
              height={28}
              style={{ width: 28, height: 28, objectFit: 'contain', opacity: 0.9 }}
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

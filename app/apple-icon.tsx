import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #c94a18 0%, #8f2a08 100%)',
          borderRadius: '36px',
          border: '6px solid #f4c465',
          color: '#fff9f0',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1 }}>S</div>
        <div
          style={{
            fontSize: 16,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: '#f4c465',
            marginTop: 4,
            fontFamily: 'sans-serif',
            fontWeight: 700,
          }}
        >
          SHANKAR
        </div>
      </div>
    ),
    { ...size }
  )
}

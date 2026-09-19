import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ongama Solange | Software Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '72px', background: '#11253d', color: '#ffffff', fontFamily: 'Arial' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px', color: '#70bce0', fontSize: 28, fontWeight: 700 }}>
          <div style={{ width: 54, height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid #70bce0', borderRadius: 27 }}>OS</div>
          ONGAMA SOLANGE
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ color: '#70bce0', fontSize: 22, letterSpacing: 5 }}>IT GRADUATE / SOFTWARE DEVELOPER</div>
          <div style={{ marginTop: 22, fontSize: 76, lineHeight: 1.05, fontWeight: 700 }}>Building software</div>
          <div style={{ color: '#70bce0', fontSize: 76, lineHeight: 1.05, fontWeight: 700 }}>with purpose.</div>
        </div>
        <div style={{ color: '#b8cbd5', fontSize: 24 }}>Flutter &amp; Web Developer  /  Gqeberha, South Africa</div>
      </div>
    ),
    { ...size },
  );
}

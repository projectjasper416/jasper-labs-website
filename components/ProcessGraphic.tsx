import React from 'react';

/** Four small, original diagrams built around the logo's parallel-line language. */
export default function ProcessGraphic({ kind }: { kind: number }) {
  return <svg className="process-graphic" viewBox="0 0 260 100" fill="none" aria-hidden="true">
    {kind === 0 && <g stroke="currentColor" strokeWidth="2">{Array.from({length:25},(_,i) => <path key={i} d={`M${10+i*10} ${50-(8+Math.abs(Math.sin(i*.48))*26)}v${2*(8+Math.abs(Math.sin(i*.48))*26)}`} opacity={i>7&&i<18?1:.25}/>)}</g>}
    {kind === 1 && <g stroke="currentColor" strokeWidth="2"><path d="M0 23h63q24 0 24 24v8q0 24 24 24h149M0 40h52q18 0 18 18v12q0 26 26 26h164M0 6h70q34 0 34 34v6q0 16 16 16h140"/><rect x="160" y="47" width="40" height="49" fill="var(--paper)"/><path d="M171 72h17m-6-6 6 6-6 6"/></g>}
    {kind === 2 && <g stroke="currentColor"><path d="M25 10h50v62H25zM34 21h29M34 29h23M34 37h29M94 25h50v62H94zM103 36h29M103 44h23M103 52h29" strokeWidth="1.5"/><path d="M77 43h14M146 57h30" strokeDasharray="3 3"/><circle cx="205" cy="45" r="25" strokeWidth="2"/><path d="m223 64 23 24M193 45h24m-12-12v24" strokeWidth="2"/></g>}
    {kind === 3 && <g stroke="currentColor" strokeWidth="1.5"><path d="M12 90h238" opacity=".25"/>{[35,57,45,70,60,90,81].map((h,i)=><rect key={i} x={20+i*31} y={92-h} width="15" height={h-4} fill="currentColor" opacity={i===5?1:.15+i*.07} stroke="none"/>)}<path d="m16 66 39-15 30 7 35-28 30 8 32-31 43 9"/></g>}
  </svg>;
}

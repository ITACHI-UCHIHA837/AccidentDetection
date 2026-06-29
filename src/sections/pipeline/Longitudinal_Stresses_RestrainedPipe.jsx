// // react-bootstrap
// import Table from 'react-bootstrap/Table';
// //import '../../in'
// // project-imports
// import MainCard from 'components/MainCard';
// import Range from '../../components/Range';
// import Userinput from '../../components/Userinput';
// import { Card, Container } from 'react-bootstrap';
// import { useState } from 'react';
// import classes from './desi.module.scss'

// // ==============================|| BASIC TABLE - HOVER TABLE ||============================== //
// // 
// // 
// // 
// export default function Longitudinal_Stresses_RestrainedPipe({pipeinput ,onChange,result}) {
//   const [bg,setbg] = useState('')

        
//   return (
//     <MainCard
//       style={{innerHeight:'10px' }}
//       className="table-card"
//       title="Input-Designe data"  
//       subheader={<p className="mb-0"></p>
//       }
//     >



//       <Container>
//       <Card className={ `${classes.cen}`}>

//         <Card className={` ${classes.box} ${pipeinput.size.value /pipeinput.wall_thik_consider < pipeinput.dia_to_wall ? classes.bggreen:classes.bgred}`}>
//             {"D/t (actual)="+pipeinput.size.value /pipeinput.wall_thik_consider}<br/>
//             {"D/t (allowable)="+pipeinput.dia_to_wall}

//         </Card>
//         <Card className={classes.p}>
        
//           {pipeinput.size.value /pipeinput.wall_thik_consider < pipeinput.dia_to_wall ? "✅pass" :"❌Fail"}
        
        
//         </Card>
//       </Card>
//       </Container>
//     </MainCard>
//   );
// }



// FormulaCard.jsx

// import { Card } from 'react-bootstrap';

// export default function FormulaCard({
//   title,           // e.g. "Hoop stress"
//   formula,         // e.g. "σ = (P × D) / (2 × t)"
//   variables,       // [{ symbol, description, value, unit }]
//   result,          // { value, unit }
//   reference        // { label, source } e.g. { label: "ASME B31.3 §304.1.2", source: "https://..." }
// }) {
//   const hasResult = result?.value !== undefined && result?.value !== null && !isNaN(result?.value);

//   return (
//     <Card className="mb-3" style={{
//       border: '0.5px solid var(--color-border-tertiary)',
//       borderRadius: 'var(--border-radius-lg)',
//       background: 'var(--color-background-primary)'
//     }}>

//       {/* Title */}
//       {title && (
//         <Card.Header style={{
//           background: 'var(--color-background-secondary)',
//           borderBottom: '0.5px solid var(--color-border-tertiary)',
//           padding: '8px 14px',
//           fontSize: '13px',
//           fontWeight: 500,
//           color: 'var(--color-text-primary)'
//         }}>
//           {title}
//         </Card.Header>
//       )}

//       <Card.Body style={{ padding: '12px 14px' }}>

//         {/* Formula display */}
//         <div style={{
//           fontFamily: 'var(--font-mono)',
//           fontSize: '15px',
//           fontWeight: 500,
//           color: 'var(--color-text-primary)',
//           background: 'var(--color-background-secondary)',
//           border: '0.5px solid var(--color-border-tertiary)',
//           borderRadius: 'var(--border-radius-md)',
//           padding: '10px 14px',
//           marginBottom: '12px',
//           letterSpacing: '0.02em'
//         }}>
//           {formula}
//         </div>

//         {/* Variable substitution */}
//         {variables?.length > 0 && (
//           <div style={{ marginBottom: '12px' }}>
//             {variables.map(({ symbol, description, value, unit }) => (
//               <div key={symbol} style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'baseline',
//                 padding: '4px 0',
//                 borderBottom: '0.5px solid var(--color-border-tertiary)',
//                 fontSize: '13px'
//               }}>
//                 <span style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
//                   <span style={{
//                     fontFamily: 'var(--font-mono)',
//                     fontWeight: 500,
//                     color: 'var(--color-text-primary)',
//                     minWidth: '28px'
//                   }}>
//                     {symbol}
//                   </span>
//                   <span style={{ color: 'var(--color-text-secondary)' }}>
//                     {description}
//                   </span>
//                 </span>
//                 <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-primary)' }}>
//                   {value ?? '—'} <span style={{ color: 'var(--color-text-secondary)' }}>{unit}</span>
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Result */}
//         {hasResult && (
//           <div style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             background: 'var(--color-background-success)',
//             border: '0.5px solid var(--color-border-success)',
//             borderRadius: 'var(--border-radius-md)',
//             padding: '8px 14px',
//             marginBottom: '10px'
//           }}>
//             <span style={{ fontSize: '13px', color: 'var(--color-text-success)', fontWeight: 500 }}>
//               Result
//             </span>
//             <span style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 500, color: 'var(--color-text-success)' }}>
//               {typeof result.value === 'number' ? result.value.toFixed(2) : result.value}
//               {' '}
//               <span style={{ fontSize: '13px', fontWeight: 400 }}>{result.unit}</span>
//             </span>
//           </div>
//         )}

//         {/* Reference */}
//         {reference && (
//           <div style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
//             Ref:{' '}
//             {reference.source
//               ? <a href={reference.source} style={{ color: 'var(--color-text-info)' }}>{reference.label}</a>
//               : reference.label
//             }
//           </div>
//         )}

//       </Card.Body>
//     </Card>
//   );
// }


// // FormulaCard.jsx
// import { Card } from 'react-bootstrap';

// export default function FormulaCard({
//   title,           // e.g. "Hoop stress"
//   formula,         // e.g. "σ = (P × D) / (2 × t)"
//   variables,       // [{ symbol, description, value, unit }]
//   result,          // { value, unit }
//   reference        // { label, source } e.g. { label: "ASME B31.3 §304.1.2", source: "https://..." }
// }) {
//   const hasResult = result?.value !== undefined && result?.value !== null && !isNaN(result?.value);

//   return (
//     <Card className="mb-3" style={{
//       border: '0.5px solid var(--color-border-tertiary)',
//       borderRadius: 'var(--border-radius-lg)',
//       background: 'var(--color-background-primary)'
//     }}>

//       {/* Title */}
//       {title && (
//         <Card.Header style={{
//           background: 'var(--color-background-secondary)',
//           borderBottom: '0.5px solid var(--color-border-tertiary)',
//           padding: '8px 14px',
//           fontSize: '13px',
//           fontWeight: 500,
//           color: 'var(--color-text-primary)'
//         }}>
//           {title}
//         </Card.Header>
//       )}

//       <Card.Body style={{ padding: '12px 14px' }}>

//         {/* Formula display */}
//         <div style={{
//           fontFamily: 'var(--font-mono)',
//           fontSize: '15px',
//           fontWeight: 500,
//           color: 'var(--color-text-primary)',
//           background: 'var(--color-background-secondary)',
//           border: '0.5px solid var(--color-border-tertiary)',
//           borderRadius: 'var(--border-radius-md)',
//           padding: '10px 14px',
//           marginBottom: '12px',
//           letterSpacing: '0.02em'
//         }}>
//           {formula}
//         </div>

//         {/* Variable substitution */}
//         {variables?.length > 0 && (
//           <div style={{ marginBottom: '12px' }}>
//             {variables.map(({ symbol, description, value, unit }) => (
//               <div key={symbol} style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'baseline',
//                 padding: '4px 0',
//                 borderBottom: '0.5px solid var(--color-border-tertiary)',
//                 fontSize: '13px'
//               }}>
//                 <span style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
//                   <span style={{
//                     fontFamily: 'var(--font-mono)',
//                     fontWeight: 500,
//                     color: 'var(--color-text-primary)',
//                     minWidth: '28px'
//                   }}>
//                     {symbol}
//                   </span>
//                   <span style={{ color: 'var(--color-text-secondary)' }}>
//                     {description}
//                   </span>
//                 </span>
//                 <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-text-primary)' }}>
//                   {value ?? '—'} <span style={{ color: 'var(--color-text-secondary)' }}>{unit}</span>
//                 </span>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Result */}
//         {hasResult && (
//           <div style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             background: 'var(--color-background-success)',
//             border: '0.5px solid var(--color-border-success)',
//             borderRadius: 'var(--border-radius-md)',
//             padding: '8px 14px',
//             marginBottom: '10px'
//           }}>
//             <span style={{ fontSize: '13px', color: 'var(--color-text-success)', fontWeight: 500 }}>
//               Result
//             </span>
//             <span style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', fontWeight: 500, color: 'var(--color-text-success)' }}>
//               {typeof result.value === 'number' ? result.value.toFixed(2) : result.value}
//               {' '}
//               <span style={{ fontSize: '13px', fontWeight: 400 }}>{result.unit}</span>
//             </span>
//           </div>
//         )}

//         {/* Reference */}
//         {reference && (
//           <div style={{ fontSize: '12px', color: 'var(--color-text-tertiary)' }}>
//             Ref:{' '}
//             {reference.source
//               ? <a href={reference.source} style={{ color: 'var(--color-text-info)' }}>{reference.label}</a>
//               : reference.label
//             }
//           </div>
//         )}

//       </Card.Body>
//     </Card>
//   );
// }


// FormulaCard.jsx
import { Card } from 'react-bootstrap';

export default function FormulaCard({
  title,
  formula,
  variables,
  result,
  reference
}) {
  const hasResult = result?.value !== undefined && result?.value !== null && !isNaN(result?.value);

  return (
    <Card className="mb-5" style={{
      border: '0.5px solid #e5e7eb',
      borderRadius: '12px',
      background: '#ffffff',
      overflow: 'hidden'
    }}>

      {title && (
        <Card.Header style={{
          background: '#f9fafb',
          borderBottom: '0.5px solid #e5e7eb',
          padding: '8px 14px',
          fontSize: '13px',
          fontWeight: 500,
          color: '#111827'
        }}>
          {title}
        </Card.Header>
      )}

      <Card.Body style={{ padding: '12px 14px' }}>

        {/* Formula */}
        <div style={{
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
          fontSize: '15px',
          fontWeight: 500,
          color: '#111827',
          background: '#f9fafb',
          border: '0.5px solid #e5e7eb',
          borderRadius: '8px',
          padding: '10px 14px',
          marginBottom: '12px',
          letterSpacing: '0.02em'
        }}>
          {formula}
        </div>

        {/* Variables */}
        {variables?.length > 0 && (
          <div style={{ marginBottom: '12px' }}>
            {variables.map(({ symbol, description, value, unit }, i) => (
              <div key={symbol} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                padding: '5px 0',
                borderBottom: i === variables.length - 1 ? 'none' : '0.5px solid #e5e7eb',
                fontSize: '13px'
              }}>
                <span style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                  <span style={{
                    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                    fontWeight: 500,
                    color: '#111827',
                    minWidth: '28px'
                  }}>
                    {symbol}
                  </span>
                  <span style={{ color: '#6b7280' }}>
                    {description}
                  </span>
                </span>
                <span style={{
                  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                  color: '#111827'
                }}>
                  {value ?? '—'}
                  {unit && (
                    <span style={{ color: '#6b7280', marginLeft: '4px' }}>{unit}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Result */}
        {hasResult && (
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#f0fdf4',
            border: '0.5px solid #86efac',
            borderRadius: '8px',
            padding: '8px 14px',
            marginBottom: '10px'
          }}>
            <span style={{ fontSize: '13px', color: '#15803d', fontWeight: 500 }}>
              Result
            </span>
            <span style={{
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              fontSize: '16px',
              fontWeight: 500,
              color: '#15803d'
            }}>
              {typeof result.value === 'number' ? result.value.toFixed(2) : result.value}
              {result.unit && (
                <span style={{ fontSize: '13px', fontWeight: 400, marginLeft: '4px' }}>
                  {result.unit}
                </span>
              )}
            </span>
          </div>
        )}

        {/* Reference */}
        {reference && (
          <div style={{ fontSize: '12px', color: '#9ca3af' }}>
            Ref:{' '}
            {reference.source
              ? <a href={reference.source} style={{ color: '#2563eb', textDecoration: 'none' }}>{reference.label}</a>
              : reference.label
            }
          </div>
        )}

      </Card.Body>
    </Card>
  );
}
import { Form } from 'react-bootstrap';
// import '../sections/pipeline/inde.scss'
export default function Userinput({
  label,
  type = "number",   // "text" or "number"
  value,
  onChange,
  placeholder = "",
  unit = ""
}) {
  return (
//     <Form.Group className="mb-2">

//       {/* 🔹 Label */}
//       {label && (
//         <Form.Label style={{ fontSize: '12px', fontWeight: 600 }}>
//           {label}
//           {unit && (
// <span>

//         <span style={{ fontSize: '12px', color: '#1b67ff', marginLeft:'11px'}}>
//           {unit}={value}
//           </span>
//         <span style={{ fontSize: '12px', color: '#000000', marginLeft:'11px'}}>
//          inch={(value/25.4).toFixed(3)}</span>
// </span>
//         )}
        
//         </Form.Label>

// )}

//       {/* 🔹 Input + Unit */}
//       <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      

//         <Form.Control
//           type={type}
//           size="sm"
//           step="0.1"
//           value={value}
//           placeholder={placeholder}
//           onChange={(e) => {
//             const val =
//               type === "number"
//                 ? parseFloat(e.target.value)
//                 : e.target.value;

//             onChange(val);
//           }}
//           />

//         {/* 🔹 Unit Display */}
     

//       </div>

//     </Form.Group>

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 <Form.Group className="mb-2 mt-3 custom-input">
<hr />
  {label && (
    <Form.Label className="custom-label">
      {label}

      {unit && (
        <span className="unit-info">
          <span className="metric">
            {unit} = {value}
          </span>

          <span className="inch">
            inch = {value ? (value / 25.4).toFixed(3) : 0}
          </span>
        </span>
      )}
    </Form.Label>
  )}
  <div className="input-wrapper">
    <Form.Control
      type={type}
      size="sm"
      step="0.1"
      value={value ?? ""}
      placeholder={placeholder}
      onChange={(e) => {
        const val =
          type === "number"
            ? e.target.value === "" ? "" : parseFloat(e.target.value)
            : e.target.value;
        onChange(val);
      }}
      className="custom-control"
    />
  </div>
</Form.Group> 
  );
}
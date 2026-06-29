// import { Form } from 'react-bootstrap';

// export default function Dropdown({  options, value, onChange }) {
//   return (
//     <Form.Group className="mb-2">
//       {/* <Form.Label style={{ fontSize: '12px' }}>{label}</Form.Label> */}

//       <Form.Select
//         size="sm"
//         value={options.value}
//         onChange={onChange}
//       >
//         {options.map((item) => (
  
  //            <option key={item.index} value={item.value}>
//               {item.Psi || item.inch ?<>{item.label}-{item.inch}-{item.value}{item.Psi}</>:<>{item.label}-{item.value}</>}
//               {/* {?<>{item.label}=={item.inch}----{item.value}</>:null} */}
        
//             </option>
//             ))}
//           {/* {item.label}{item.inch}   --      {item.value}{item.Psi} */}
//           {/* {<>{item.label}--{item.value}</>} */}
//       </Form.Select>
//     </Form.Group>
    
// );
// }
////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////// 
import { Form } from 'react-bootstrap';

export default function Dropdown({ options, value, onChange ,label}) {
  const selectStyle = {
  backgroundColor: '#0f1c2e',
  color: '#cbd5e1',
  border: '1px solid #1e293b',
  borderRadius: '10px',
  padding: '10px 14px',
  fontSize: '14px',
  boxShadow: '0 0 0 1px rgba(30, 41, 59, 0.5)',
};
// const selectStyle = {
  //   backgroundColor: '#0f1c2e',
  //   color: '#cbd5e1',
  //   border: '1px solid #1e293b',
  //   borderRadius: '8px',
  //   padding: '8px 12px',
  //   fontSize: '14px',
  // };
  
  const labelStyle = {
    color: '#cbd5e1',
    fontSize: '13px',
    marginBottom: '6px',
  };

  return (
    <Form.Group className="mb-2">
      <hr />
      <Form.Label style={labelStyle}>{label}</Form.Label>
      {/* <Form.Label style={{ fontSize: '12px' }}>{label}</Form.Label> */}
    
      <Form.Select
        size="sm"
        value={options.value}
        onChange={onChange}
        style={selectStyle}
      >
        <option value="1">Select</option>

        {options.map((item, index) => (
           <option key={index} value={item.value}>          
               {item.Psi || item.inch ?<>{item.label}-{item.inch}-{item.value}{item.Psi}</>:<>{item.label}-{item.value}</>}
                {/* {?<>{item.label}=={item.inch}----{item.value}</>:null} */}       
            </option>
          // <option key={index} value={item.value}>
          //   {item.Psi || item.inch
          //     ? `${item.label}-${item.inch}-${item.value}${item.Psi}`
          //     : `${item.label}-${item.value}`}
          // </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}











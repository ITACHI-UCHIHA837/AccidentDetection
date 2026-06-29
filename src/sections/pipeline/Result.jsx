import React from "react";
import "./Result.scss";
import { Container, Row, Col } from 'react-bootstrap';
import { BarChart3, ShieldCheck, Calculator, FileText, ShieldX } from "lucide-react";


export default function Result({pipeinput,result}) {
  console.log(pipeinput);
  console.log(result);
  const rows = [
  // { label: "Required Thickness (t_req)", unit: "mm" , resl:`${pipeinput.grade}`  ,formula:"t_min = P×D / (2×S×F×E×T)"},
  { label: "Minimum Thickness (t_min)", unit: "mm", formula:"t_min = P×D / (2×S×F×E×T)", resl:`${result.t_min.toFixed(3)}` },
  { label: "Minimum Thickness (t_min) with Corrosion Allowance (A)", unit: "mm",formula:"CA= t_min +C" ,resl:`${result.C_A.toFixed(3)}` },
  { label: "wall Thickness consider (t)", unit: "mm",formula:"t " ,resl:`${result.t.toFixed(3)}` },
  { label: "Diameter to wall thickness -D/t (allowable)", unit: "MPa" ,formula:"D/t " ,resl:`${result.D_t.toFixed(3)}` },
  { label: "Diameter to wall thickness ratio)-D/t (actual)", unit: "MPa",formula:"D/t " ,resl:`${result.dia_to_wall_actual.toFixed(3)}` },
  { label: "Utilization Ratio", unit: "%" ,formula:"Utilization Ratio = (D/t) actual / (D/t) allowable" ,resl:`${result.Utilization_taka}` },
];

  
  return (
    <div className="summary-card">
      
      {/* HEADER */}
      <div className="header">
        <BarChart3 size={20} />
        <h2>RESULTS SUMMARY</h2>
      </div>

      {/* ROWS */}
      <div className="container">
        {rows.map((item, i) => (<>
                 <div key={i} className="value" id="alin">
                   <div className="lable ">
                    
                        {item.label}
                          <div className="cen ">{item.formula}</div>
                        </div>

                      
                      <div  className="value" >{item.resl}-{item.unit}</div>
                 </div>
        </>
        ))}
      </div>
      {/* <div className="rows">
        {rows.map((item, i) => (<>
                    <div key={i} className="row">
                     <span>{item.label}</span>
                      <span  className="value" >{item.resl}-{item.unit}</span>
                      <span>{item.formula}</span>
                 </div>
        </>
        ))}
      </div> */}

      {/* STATUS BOX */}

{result?.Utilization_Ratio === "pass"? 
      <div className="status-box">
        <ShieldCheck size={28} />
        <div>
          <h3>PASSED</h3>
          <p>Enter the required data to perform ASME code calculation</p>
        </div>
      </div>:
       <div className="status-box-RED">
        <ShieldX size={28} />
        <div>
          <h3>FAILED</h3>
          <p>Enter the required data to perform ASME code calculation</p>
        </div>
        </div>
}

      {/* BUTTON */}
      {/* <button className="calculate-btn">
        <span>CALCULATE</span>
        <Calculator size={18} />
      </button> */}

      {/* SECOND BUTTON */}
      <button className="secondary-btn">
        <span>View Detailed Report</span>
        <FileText size={18} />
      </button>

    </div>
  );
}



// import React, { useState } from "react";
// import "./Result.scss";
// import { BarChart3, ShieldCheck, Calculator, FileText, Loader2 } from "lucide-react";

// const defaultData = {
//   t_req: null,
//   t_min: null,
//   t: null,
//   CA: null,
//   S_allow: null,
//   ratio: null,
// };

// export default function Result({ data = defaultData, onCalculate }) {
//   const [loading, setLoading] = useState(false);

//   const handleCalculate = async () => {
//     if (loading) return;
//     setLoading(true);

//     // simulate API / calculation
//     await new Promise((res) => setTimeout(res, 1500));

//     onCalculate && onCalculate();
//     setLoading(false);
//   };

//   const rows = [
//     ["Required Thickness (t_req)", data.t_req, "mm"],
//     ["Minimum Thickness (t_min)", data.t_min, "mm"],
//     ["Actual Thickness (t)", data.t, "mm"],
//     ["Corrosion Allowance (CA)", data.CA, "mm"],
//     ["Allowable Hoopstress (S_allow)", data.S_allow, "MPa"],
//     ["Utilization Ratio", data.ratio, "%"],
//   ];

//   const isReady = Object.values(data).some(v => v !== null);

//   return (
//     <div className="summary-card neon-border">

//       {/* HEADER */}
//       <div className="header">
//         <BarChart3 size={20} />
//         <h2>RESULTS SUMMARY</h2>
//       </div>

//       {/* ROWS */}
//       <div className="rows">
//         {rows.map(([label, value, unit], i) => (
//           <div key={i} className="row">
//             <span>{label}</span>
//             <span className="value">
//               {value !== null ? `${value} ${unit}` : `— ${unit}`}
//             </span>
//           </div>
//         ))}
//       </div>

//       {/* STATUS */}
//       <div className={`status-box ${isReady ? "active" : ""}`}>
//         <ShieldCheck size={28} />
//         <div>
//           <h3>{isReady ? "READY" : "READY TO CALCULATE"}</h3>
//           <p>
//             {isReady
//               ? "Values loaded. You can calculate now."
//               : "Enter the required data to perform ASME calculation"}
//           </p>
//         </div>
//       </div>

//       {/* CALCULATE BUTTON */}
//       <button
//         className={`calculate-btn ${loading ? "loading" : ""}`}
//         onClick={handleCalculate}
//       >
//         <span>{loading ? "Calculating..." : "CALCULATE"}</span>

//         {loading ? (
//           <Loader2 className="spin" size={18} />
//         ) : (
//           <Calculator size={18} />
//         )}
//       </button>

//       {/* SECOND BUTTON */}
//       <button className="secondary-btn">
//         <span>View Detailed Report</span>
//         <FileText size={18} />
//       </button>

//     </div>
//   );
// }
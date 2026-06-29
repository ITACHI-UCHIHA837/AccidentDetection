
// import React from "react";
// import "./quickaction.scss";
// import { FolderOpen, Save, RotateCcw, Download, TouchpadIcon } from "lucide-react";

// const actions = [
//   {
//     title: "Load Previous",
//     subtitle: "Continue where you left",
//     icon: FolderOpen,
//     gradient: "pink",
//   },
//   {
//     title: "Save Project",
//     subtitle: "Save current inputs",
//     icon: Save,
//     gradient: "blue",
//   },
//   {
//     title: "Reset All",
//     subtitle: "Clear all fields",
//     icon: RotateCcw,
//     gradient: "purple",
//   },
//   {
//     title: "Export Report",
//     subtitle: "Download PDF/Excel",
//     icon: Download,
//     gradient: "orange",
//   },
// ];

// export default function QuickActions() {
//   return (
//     <div className="quick-actions-container">
      
//       <h2 className="title">QUICK ACTIONS</h2>

//       <div className="grid">
//         {actions.map((action, index) => {
//           const Icon = action.icon;
//           return (
//             <div key={index} className={`card ${action.gradient}`}>
//             <div className="inner-card">
//                 <div className="icon-box">
//                   <Icon size={20} />
//                 </div>

//                 <div>
//                   <h3>{action.title}</h3>
//                   <p>{action.subtitle}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import React from "react";
import "./quickaction.scss";
import {
  FolderOpen,
  Save,
  RotateCcw,
  Download
} from "lucide-react";
import  {downloadPDF} from "./pdf";

export default function QuickActions({save ,mongocommit,reset}) {

const actions = [
  {
    title: "Load Previous",
    subtitle: "Continue where you left",
    icon: FolderOpen,
    gradient: "pink",
    action: () => {
      alert("Loading previous project...");
      // your code here
    }
  },

  {
    title: "Save Project",
    subtitle: "Save current inputs",
    icon: Save,
    gradient: "blue",
    // action: () => {save} 
    action: save 
    // action: mongocommit 
    
  },

  {
    title: "Reset All",
    subtitle: "Clear all fields",
    icon: RotateCcw,
    gradient: "purple",
    action: reset
 
  },

  {
    title: "Export Report",
    subtitle: "Download PDF/Excel",
    icon: Download,
    gradient: "orange",
    action: downloadPDF
  }
];




  return (
    <div className="quick-actions-container">
      <h2 className="title">QUICK ACTIONS</h2>

      <div className="grid">
        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <div
              key={index}
              className={`cardbounce ${action.gradient}`}
              onClick={action.action}
            >
              <div className="inner-card">
                <div className="icon-box">
                  <Icon size={20}/>
                </div>

                <div>
                  <h3>{action.title}</h3>
                  <p>{action.subtitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}



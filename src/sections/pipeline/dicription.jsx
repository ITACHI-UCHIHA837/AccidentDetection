
// import { Card } from 'react-bootstrap';
//import MainCard from '../../components/MainCard';

// function Dicription() {
//   return (<MainCard>
//         <h6>dadsassd</h6>
 


//     <Card className="h-100 shadow-sm">
//       <Card.Body>

//         {/* Title */}
//         <h5 className="fw-bold mb-3">
//           Wall Thickness — Internal Pressure — Gas Service
//         </h5>

//         {/* Description */}
//         <p className="text-muted mb-3">
//           Calculates minimum required wall thickness based on internal pressure using ASME B31.8 / API standards.
//         </p>

//         {/* Details */}
//         <ul className="small">
//           <li>Uses Barlow formula (thin wall)</li>
//           <li>Switches to Lamé formula for thick wall</li>
//           <li>Includes corrosion allowance (CA)</li>
//           <li>Includes mill tolerance</li>
//         </ul>

//       </Card.Body>
//     </Card>
//             </MainCard>


//     );
// }
// export default Dicription;


import { Card, Table } from 'react-bootstrap';
import Userinput from '../../components/Userinput';

export default function Dicription({pipeinput,onChangehandel}) {
  return (
    

    <Card className="shadow-sm border-0 g-2">

      {/* Header */}
      <Card.Header className="py-2 px-2 bg-light">
        <h6 className="mb-0">
          <span className="badge bg-secondary me-2">Z1</span>
          DESCRIPTION
        </h6>
      </Card.Header>

      {/* Body */}
      <Card.Body className="p-2">

        <div style={{ fontSize: '13px', fontWeight: 600 , color:"black" }}>
          Wall Thickness — Internal Pressure — Gas Service
        </div>

        <div className="text-muted mt-1 mb-3" style={{ fontSize: '12px' }}>
                          {/* <Userinput
                          label="projectname"
                          type="string"
                          value={pipeinput.projname}
                          // onChange={(val) => onChange('projname', val)}
                          onChange={onChange}
                              /> */}
        Minimum wall thickness per Barlow (thin-wall) or Lamé (thick-wall, D/t&lt;30). Adds CA and mill tolerance
        </div>
            <Userinput
            label="Project name"
            placeholder='Untitled'
            type='text'
            value={pipeinput.projname}
            onChange={(val) => onChangehandel('projname', val)}
                />

        <div  className='mb-3' style={{ fontSize: '13px', fontWeight: 600 ,color:"black"}}>
        Input Variables
        </div>
        <div>P= Design pressure</div>
        <div>D= Outside diameter</div>
        <div>S= SMYS (steel)</div>
        <div>F= Design_factor </div>
        <div>E= Joint_factor </div>
        <div>T= Temp. derating</div>
        <div>CA= Corrosion allow.</div>
        <div className='mb-3 mt-3' style={{ fontSize: '13px', fontWeight: 600 ,color:"black"}}>
        Output Variables
        </div>
       <div>t_min = Bare minimum</div>
       <div>t_sel = Selected (nom.)</div>
       <div>σ_H   =Hoop stress</div>
       <div>UC    =Utilisation</div>
       <div>MAOP  = Max op. pressure</div>
        
            
               
             
       </Card.Body>
    </Card>
  );
}

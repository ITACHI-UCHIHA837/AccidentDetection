
import { Card } from 'react-bootstrap';
import MainCard from '../../components/MainCard';
import { useEffect } from 'react';

function Calculate({piplineinput}) {
    const result1 = {
        
        treq : piplineinput.projname
        
    }
    
    console.log(result1);
    
    useEffect((piplineinput)=>{

    })
   
//   {
//         projname:"",
//         size: { label: 'select size', value: 1 },
//         grade: 1,
//         class: 1,
//         pressure: 1,
//         CA: 1,
//         menufecture:1,
//         temp:1,
//         ambi_temp:1,
//         install_temp:1,
//         desi_temp:1,
//         desi_mini_temp:1,
//         fil_ban_rad:1,
//         els_ban_rad:1,
//         dia_to_wall:1,
//       wall_thik_consider:1.00
//       }
// console.log(piplineinput);



  return (<MainCard>
        <h6>dadsassd</h6>
 


    <Card className="h-100 shadow-sm">
      <Card.Body>

        {/* Title */}
        <h5 className="fw-bold mb-3">
          Wall Thickness — Internal Pressure — Gas Service
        </h5>

        {/* Description */}
        <p className="text-muted mb-3">
          Calculates minimum required wall thickness based on internal pressure using ASME B31.8 / API standards.
        </p>

        {/* Details */}
        <ul className="small">
          <li>Uses Barlow formula (thin wall)</li>
          <li>Switches to Lamé formula for thick wall</li>
          <li>Includes corrosion allowance (CA)</li>
          <li>Includes mill tolerance</li>
        </ul>

      </Card.Body>
    </Card>
            </MainCard>


    );
}
export default Calculate;


// import { Card } from 'react-bootstrap';
// import MainCard from '../../components/MainCard';

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


import { BluetoothOff } from 'lucide-react';
import { Badge, Button, ButtonToolbar, Card, Stack, Table } from 'react-bootstrap';
import BasicButtonGroup from '../components/basic/button/BasicButtonGroup';

export default function Dicription({pipeinput,result,commit,datacommit,mongocommit}) {
  return (
    <Card className="shadow-sm border-0 g-2">

      {/* Header */}
      <Card.Header className="py-2 px-2 " style={{background:'#86EFAC'}}>
        <h6 className="mb-0">
          <span className="badge bg-secondary me-2">Z4</span>
          Result
        </h6>
      </Card.Header>

      {/* Body */}
      <Card.Body className="p-2">

        {/* <Stack direction="horizontal" gap={3} style={{ fontSize: '13px', fontWeight: 600 , color:"black",display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div className='p-3'>t_min</div>
          <div className='p-3'>{result?<>{result.t_min}</>:null}</div>
        </Stack> */}
        <Stack direction="horizontal" style={{ fontSize: '13px', fontWeight: 600 , color:"black",display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div className='p-3 xl-2'>diameter</div>
          <div className='p-3 xl-2'>{pipeinput?<>{pipeinput.size.value}</>:null}</div>
        </Stack>
        <Stack direction="horizontal"  style={{ fontSize: '13px', fontWeight: 600 , color:"black",display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <div className='p-3  xl-2'>t</div>
          <div className='p-3  xl-2'>{pipeinput?<>{pipeinput.wall_thik_consider}</>:null}</div>
        </Stack>
        <Stack direction="horizontal"  style={{ fontSize: '13px', fontWeight: 600 , color:"black",display:'flex',alignItems:'center',justifyContent:'space-between'  }}>
          <div className='p-3  xl-2'>D/t(allowable)</div>
          <div className='p-3  xl-2'>{pipeinput?<>{pipeinput.dia_to_wall }</>:null}</div>
        </Stack>
        <Stack direction="horizontal" gap={3} style={{ fontSize: '13px', fontWeight: 600 , color:"black",display:'flex',alignItems:'center',justifyContent:'space-between'  }}>
          <div className='p-3'>D/t (actual)</div>
          <div className='p-3'>{pipeinput?<>{(pipeinput.size.value/pipeinput.wall_thik_consider).toFixed(2)}</>:null}</div>
         
        </Stack>
         <Stack direction="horizontal" gap={3} style={{ fontSize: '13px', fontWeight: 600 , color:"black",display:'flex',alignItems:'center',justifyContent:'center', marginBottom:'10px' }}>
           {pipeinput.size.value/pipeinput.wall_thik_consider>pipeinput.dia_to_wall?<><Badge className='px-5' style={{fontSize: '13px', fontWeight: 600 ,padding:'12px' }} bg="light-success">PASS</Badge></>:<><Badge className='px-5' style={{fontSize: '13px', fontWeight: 600 }} bg="light-danger">FAIL</Badge></>}
           </Stack>
         <Stack direction="horizontal" gap={3} style={{ fontSize: '13px', fontWeight: 600 , color:"black",display:'flex',alignItems:'center',justifyContent:'center'  }}>
           {/* <Button onClick={commit } variant="dark" className="btn-shadow" >commit</Button>
           <Button onClick={datacommit} variant="dark" className="btn-shadow" >commit</Button> */}
         </Stack>
         <Stack direction="horizontal" gap={1} style={{ fontSize: '13px', fontWeight: 600 , color:"black",display:'flex',alignItems:'center',justifyContent:'center'  }}>
          <Button onClick={mongocommit} variant="dark" className="btn-shadow" >SAVE</Button>
        </Stack>
        {/*
        <Stack direction="horizontal" gap={3} style={{ fontSize: '13px', fontWeight: 600 , color:"black",display:'flex',alignItems:'center',justifyContent:'space-between'  }}>
          <div className='p-3'>t_min</div>
          <div className='p-3'>{result?<>{result.t_min}</>:null}</div>
        </Stack> */}

    
               
             
       </Card.Body>
    </Card>
  );
}

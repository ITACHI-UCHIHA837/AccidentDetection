// react-bootstrap
import Table from 'react-bootstrap/Table';
//import '../../in'
// project-imports
import MainCard from 'components/MainCard';
import Range from '../../components/Range';
import Userinput from '../../components/Userinput';
import { Card, Container } from 'react-bootstrap';
import { useState } from 'react';
import classes from './desi.module.scss'

// ==============================|| BASIC TABLE - HOVER TABLE ||============================== //
// 
// 
// 
export default function Inpudesign({pipeinput ,onChange}) {
  const [bg,setbg] = useState('')

        
  return (
    <MainCard
      style={{innerHeight:'10px' }}
      className="table-card"
      title="Input-Designe data" 

      subheader={
        <p className="mb-0">
        
        </p>
      }
    >
      <Table responsive hover>
        <thead>
          {/* <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr> */}
        </thead>
        <tbody>
          <tr>
            <td  colSpan={1}>                  
               <Range
          label="Ambient temp."
          min={0}
          max={100}
          step={0.01}
          defaultValue={pipeinput.ambi_temp}
          precision={2}
          unit='ºC'
          toconvert={'ºF'}
           onChange={(val)=>  onChange('ambi_temp',Number(val))}
            />
            </td>
          
            <td colSpan={4}>
              <Userinput
                label="Field Bend Radius in term of Diameter"
                type="number"
                value={pipeinput.fil_ban_rad}
                onChange={(val) => onChange('fil_ban_rad', val)}
                    />
                    </td>
            
          </tr>
          <tr rowSpan={4}>
            <td>  
              
              <Range
          label="install temp."
          min={0}
          max={100}
          step={0.01}
          defaultValue={pipeinput.install_temp}
          precision={2}
          unit='ºC'
          toconvert={'ºF'}
           onChange={(val)=>  onChange('install_temp',Number(val))}
            /></td>
       
            <td> 
                 <Userinput
                label="Elastic Bend Radius in term of Diameter"
                type="number"
                value={pipeinput.els_ban_rad}
                onChange={(val) => onChange('els_ban_rad', val)}
                    /></td>
            
            
          </tr>
          <tr>
            <td><Range
          label="designe temp."
          min={0}
          max={100}
          step={0.01}
          defaultValue={pipeinput.desi_temp}
          unit='ºC'
          toconvert={'ºF'}
          precision={2}
           onChange={(val)=>  onChange('desi_temp',Number(val))}
            /></td>
           
            <td>    <Userinput
                label="Diameter to wall thickness ratio(allowable)"
                type="number"
                value={pipeinput.dia_to_wall}
                onChange={(val) => onChange('dia_to_wall', val)}
                    /></td>
           
            </tr>
          <tr>
            <td>
              <Range
          label="designe MINIMUM temp."
          min={0}
          max={100}
          step={0.01}
          defaultValue={pipeinput.desi_mini_temp}
          precision={2}
          unit='ºC'
          toconvert={'ºF'}
           onChange={(val)=>  onChange('desi_mini_temp',Number(val))}
            /></td>
          
            <td>    
              <Userinput
                label="Wall thikness consider"
                type="number"
                value={pipeinput.wall_thik_consider}
                unit='mm'
                onChange={(val) => onChange('wall_thik_consider', val)}
                    /></td>
         
            </tr>
        </tbody>
      </Table>
      <Container>
      <Card className={ `${classes.cen}`}>
                  <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#fdf0f0',
         //   background: '#f0fdf4',
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
            </span>
          </div>

{/* 
 <span style={{ fontSize: '13px', color: '#15803d', fontWeight: 500 }}>
              Result
            </span>
            <span style={{
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
              fontSize: '16px',
              fontWeight: 500,
              color: '#15803d'
            }}></span> */}
        

        <Card className={` ${classes.boxgreenn} ${pipeinput.size.value /pipeinput.wall_thik_consider < pipeinput.dia_to_wall ? classes.boxgreenn:classes.boxred}`}>
            {"D/t (actual)="+pipeinput.size.value /pipeinput.wall_thik_consider}<br/>
            {"D/t (allowable)="+pipeinput.dia_to_wall}

        </Card>
        <Card className={classes.p}>
        
          {pipeinput.size.value /pipeinput.wall_thik_consider < pipeinput.dia_to_wall ? "✅pass" :"❌Fail"}
        
        
        </Card>
      </Card>
      </Container>
    </MainCard>
  );
}

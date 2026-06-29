
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Dicription from '../../sections/pipeline/dicription';
import Input_field from "../../sections/pipeline/Input_field";
import Equations from '../../sections/pipeline/Equations';
import Calculation from '../../sections/pipeline/Calculation';
import "../../sections/pipeline/desi.module.scss";
import QuickActions from '../../sections/pipeline/QuickActions';
import Result from '../../sections/pipeline/Result';
import Inde from '../../sections/pipeline/Inde';
import AIBar from '../../sections/pipeline/AIBar';
import { Sidebar } from 'lucide-react';

//import FormulaCard from './components/FormulaCard';

// Inside your component, derive the result




export default function PipelinePage() {
  console.log(Sidebar);
  
const mongocommit = async()=>{ 
  const token = sessionStorage.getItem("token");
  if (!token) {
    alert("Please login first");   // ❌ not logged in
    return;
  }
       const payload = {
             size: pipeinput.size.value,
             D_T_allo:pipeinput.dia_to_wall,
              wall_consi:pipeinput.wall_thik_consider,
              projname:pipeinput.projname || "untitled"
      };
      try {
          const ews = await fetch(`${import.meta.env.VITE_API_URL}/store`,{
            method:"POST",
            headers:{
              "Content-Type": "application/json",
               aut: `Bearer ${token}`,           
            },
               body: JSON.stringify({payload})
          });
           if(!token) {
    alert("pleas login first");
    return;
  }
      //  console.log(result);
              const dara = await ews.json();
               console.log(dara);
                 alert("save success");         
            } catch (error) {
        console.log("error in front "+error);       
      }
    }

const save = async()=>{ 
  const token = sessionStorage.getItem("token");
  if (!token) {
    alert("Please login first");   // ❌ not logged in
    return;
  }
  const resultload={
    t_min:calculationResult.t_min,
    C_A:calculationResult.C_A,
    t:calculationResult.t,
    D_t:calculationResult.D_t,
    dia_to_wall_actual:calculationResult.dia_to_wall_actual,
    Utilization_Ratio:calculationResult.Utilization_Ratio,
    Utilization_taka:calculationResult.Utilization_taka

  }
       const payload = {
              size: pipeinput.size.value,
              projname:pipeinput.projname || "untitled",
              D_T_allo:pipeinput.dia_to_wall,
              wall_consi:pipeinput.wall_thik_consider,
              grade: pipeinput.grade,
              class_id: pipeinput.class,
              pressure: pipeinput.pressure,
              CA: pipeinput.CA,
              menufecture:pipeinput.menufecture,
              consi_wall_thik:pipeinput.wall_thik_consider, 
              temp:pipeinput.temp,
              ambi_temp:pipeinput.ambi_temp,
              install_temp:pipeinput.install_temp,
              desi_temp:pipeinput.desi_temp,
              desi_mini_temp:pipeinput.desi_mini_temp,
              fil_ban_rad:pipeinput.fil_ban_rad,
              els_ban_rad:pipeinput.els_ban_rad,
                 



            };
            try {
              console.log("token in save");
              const ews = await fetch(`${import.meta.env.VITE_API_URL}/savee`,{
          // const ews = await fetch("http://localhost:8000/api/calculations/savee",{
            method:"POST",
            headers:{
              "Content-Type": "application/json",
               aut: `Bearer ${token}`,           
            },
               body: JSON.stringify({payload,resultload})
          });
           if(!token) {
    alert("pleas login first");
    return;
  }
      //  console.log(result);
              const dara = await ews.json();
               console.log(dara);
                 alert("save success");         
            } catch (error) {
        console.log("error in front "+error);       
      }
    }

 const storedata= async(resultyy) => {

   const storeddata = {
        tmin:resultyy.t_min,
        hoop: resultyy.hoop_stress,
        CA:resultyy.C_A,
      };
      console.log(resultyy);
              try {
                const res = await fetch("http://localhost:8080/add-user",{
                  method:"POST",
                      headers: {
                   "Content-Type": "application/json",
                  },
                  body: JSON.stringify(storeddata),
                });
               const data = await res.json();
               console.log(data);
              } catch (error) {
                console.log("Eroor in sending",error);
                
              }

 }

  // 🔥 MOVE STATE HERE
  const [pipeinput, setpipeinput] = useState({
    projname:"",
    size: { label: 'select size', value: 1 },
    grade: 1,
    class: 1,
    pressure: 1,
    CA: 1,
    menufecture:1,
    temp:1,
    ambi_temp:1,
    install_temp:1,
    desi_temp:1,
    desi_mini_temp:1,
    fil_ban_rad:1,
    els_ban_rad:1,
    dia_to_wall:1,
    dia_to_wall_actual:1,
    wall_thik_consider:1.00
  });

  // 🔥 HANDLE INPUT CHANGE
  const handleChange = (name, value) => {
    if(value === ""|| value === null) value = 1; // treat empty input as 0
      setpipeinput((prev) => ({
      ...prev,
      [name]: value
    }
    
  ));
};
const reset = () => {
  setpipeinput({
    projname:"",
    size: pipesizedata[0],//{ label: 'select size', value: 1 },
    grade: 1,
    class: 1,
    pressure: 1,
    CA: 1,
    menufecture:1,
    temp:1,
    ambi_temp:1,
    install_temp:1,
    desi_temp:1,
    desi_mini_temp:1,
    fil_ban_rad:1,
    els_ban_rad:1,
    dia_to_wall:1,
    dia_to_wall_actual:1,
    wall_thik_consider:1.00
  });
};
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

const calculationResult = {
  t_min:( pipeinput.pressure * pipeinput.size.value) / (20 * pipeinput.grade * pipeinput.class * 1.0 * 1.0 * 1.0), 
  C_A: pipeinput.CA+pipeinput.pressure * pipeinput.size.value / (20 * pipeinput.grade * pipeinput.class * 1.0 * 1.0 * 1.0), // example formula
  t:pipeinput.wall_thik_consider,
  D_t:pipeinput.dia_to_wall,
  dia_to_wall_actual:pipeinput.size.value/pipeinput.wall_thik_consider,
  Utilization_Ratio: pipeinput.size.value/pipeinput.wall_thik_consider > pipeinput.dia_to_wall? "fail":"pass",
  Utilization_taka: ((pipeinput.size.value/pipeinput.wall_thik_consider )/ pipeinput.dia_to_wall * 100).toFixed(2) + "%"
};


console.log(calculationResult);



/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// 🔥 API CALL (AUTO)
// const [result, setResult] = useState("null");
// useEffect(() => {
  //   const sendData = async () => {
    
    //     const payload = {
      //       size: pipeinput.size.value,
      //       grade: pipeinput.grade,
      //       class_id: pipeinput.class,
  //       pressure: pipeinput.pressure,
  //       CA: pipeinput.CA,
  //       menufecture:pipeinput.menufecture,
  //       consi_wall_thik:pipeinput.wall_thik_consider, 
  //       projname:pipeinput.projname,
  //       temp:pipeinput.temp,
  //       ambi_temp:pipeinput.ambi_temp,
  //       install_temp:pipeinput.install_temp,
  //       desi_temp:pipeinput.desi_temp,
  //       desi_mini_temp:pipeinput.desi_mini_temp,
  //       fil_ban_rad:pipeinput.fil_ban_rad,
  //       els_ban_rad:pipeinput.els_ban_rad,
  //       dia_to_wal:pipeinput.dia_to_wall,   
    
  //     };

  //     console.log("Sending:", payload);
  //     try {
  //       const res = await fetch('http://localhost:8000/api/calculations/calculate', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({payload})
  //       });
        
  //       const data = await res.json();
        
  //       console.log("Result:", data);
  //       setResult(data);
        
  //     } catch (error) {
  //       console.log("erro front"+error);
        
  //     }
      
  //   };
    
  //   sendData();
  // }, [pipeinput]);
  
  //   console.log(result);
  // useEffect(() => {
  //   console.log(pipeinput);
  // });


  return (
    <Container>
     <Container fluid className="p-1">
      {/* <Row className="g-1">
        <Col md={3}>
          <Dicription  pipeinput={pipeinput}  onChangehandel={handleChange}/>
        </Col>
        <Col md={4}>      
          <Input_field 
            pipeinput={pipeinput}
            onChange={handleChange}
            result={result}
            />
        </Col>
        <Col md={3}>
          <Equations result={result} inputvalue={ pipeinput} />
        </Col>
        <Col md={2}>
          <Calculation 
          pipeinput={pipeinput}
          result={result} 
          datacommit = {()=>{storedata(result)}}
          mongocommit = {()=>{mongocommit()}}
          commit={
            async ()=>{const data = {grade: pipeinput.grade,};
            console.log("comitresult:");
             const committ= await fetch('http://localhost:8000/commit',
             { method: "POST",
              headers: {"Content-Type": "application/json"},
               body: JSON.stringify(data)}) 
            //  const comitdata = await committ.json();
          }}
          />
        </Col>    
      </Row>
    </Container> */}
                {/* <Calculate piplineinput ={pipeinput}/> */}
           {/* <Inpudesign onChange={handleChange} pipeinput={pipeinput} result={result}/> */}
          {/* <Longitudinal_Stresses_RestrainedPipe onChange={handleChange} pipeinput={pipeinput} result={result} /> */}
            {/* //<FormulaCard/> */}
         
        {/* <FormulaCard
          title="Calculations - Longitudinal Stresses (Restrained Pipe)"
          //  formula="σ = (P × D) / (2 × t)"
          variables={[
            { symbol:'SP1',description:' Longitudinal Stress due to Internal Pressure '},
            { symbol:'ST', description:' Longitudinal Stress due to Thermal Expansion'},
            { symbol:'ST2',description:' Longitudinal Stress due to Thermal Expansion(Considering Minimum Design Temp.)'},
            { symbol:'SX', description:' Stress due to Axial Loading' },
            { symbol:'SB', description:' Nominal Bending Stress ' },
            // { symbol: 'P',  description: 'Internal pressure',  value: P,  unit: 'MPa' },
            // { symbol: 'D',  description: 'Outside diameter',   value: D,  unit: 'mm'  },
            // { symbol: 't',  description: 'Wall thickness',     value: t,  unit: 'mm'  },
            ]}
            result={{ value: hoopStress, unit: 'MPa' }}
            reference={{ label: 'ASME B31.3 §304.1.2', source: 'https://www.asme.org' }}/> */}
         
         
            <Container fluid className="p-1">
              <Row className="g-1">
                   <Col md={12}>
                    <Inde   pipeinput={pipeinput}
                       onChange={handleChange}
                      />
                  </Col>
                   <Col md={12}>
                    <Result pipeinput={pipeinput} result={calculationResult} />
                  </Col>
                  <Col md={12}>
                    <QuickActions save={save}  reset={reset} mongocommit = {()=>{mongocommit()}}/>
               </Col>
               <Col md={12}>
               </Col>
                 <AIBar/>
   
         
      </Row>
      </Container>
      </Container>
           
      
     
    </Container>
  );
}




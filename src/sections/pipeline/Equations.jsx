
import { Card, CardBody, Table } from 'react-bootstrap';
//import StyleSheet from 'react-nativ'

export default function Equations({result,inputvalue}) {
  return (
    <Card className="shadow-sm border-0 g-2 " style={{background:'#2275e7'}}>

      {/* Header */}
      <Card.Header className="py-2 px-2 " style={{background:'#2275e7'}}>
        <h6 className="mb-0" style={{background:'#2275e7'}}>
          <span className="badge bg-secondary me-2" >Z3</span>
          Equations
        
        </h6>
      </Card.Header>

      {/* Body */}
      <Card.Body className="p-2" style={{background:'#93C5FD'}}>

        <div 
        style={{ fontSize: '12px', fontWeight: 600 , color:"black" }}>
         Min-Wall Thickness — Barlow
        </div>

        <div className="text-muted mt-1 mb-1" 
        style={{ display:'flex',fontSize: '12px', justifyContent:"center",alignContent:"center"}}>
        t_min = P×D / (2×S×F×E×T)
      
        </div>
         <div className="text-muted mt-1 mb-1" 
         style={{ display:'flex',fontSize: '12px', justifyContent:"center",alignContent:"center" ,fontWeight: 800}}>
        t_min = {inputvalue.pressure}X{inputvalue.size.value}/{"("+"             " +"2" +"         "+"X"+"10"}X{"         " +inputvalue.grade+"         " }X{"         " +inputvalue.class+"         "+inputvalue.menufecture }{")"}
       
      
        </div>
        <div  
        style={{ fontSize: '13px', fontWeight: 600 ,color:"black"  ,display:'flex',justifyContent:"center",alignContent:"center"}}>
             {result ? 
          <div>
            <div>t_min: {result.t_min}</div>
          
           
          </div>: <></>}
        </div>
        
            
               
             
       </Card.Body> 
         <Card.Body className="p-2" style={{background:'#93C5FD'}}>

        <div 
        style={{ fontSize: '12px', fontWeight: 600 , color:"black" }}>
         Add CA
        </div>

        <div className="text-muted mt-1 mb-1" 
        style={{ display:'flex',fontSize: '12px', justifyContent:"center",alignContent:"center"}}>
       T_C = T_min+CA
      
        </div>
         <div className="text-muted mt-1 mb-1" 
         style={{ display:'flex',fontSize: '12px', justifyContent:"center",alignContent:"center" ,fontWeight: 800}}>
        {result ? <>T_C = {result.t_min}+{result.C_A}</>:null}
      
        </div>
        <div  
        style={{ fontSize: '13px', fontWeight: 600 ,color:"black"  ,display:'flex',justifyContent:"center",alignContent:"center"}}>
             {result ? 
          <div>
            
            <div>CA: {result.C_A}</div>
           
          </div>: <></>}
        </div>
        
            
               
             
       </Card.Body>  
       <Card.Body className="p-2" style={{background:'#93C5FD'}}>

        <div 
        style={{ fontSize: '12px', fontWeight: 600 , color:"black" }}>
         Mill Tolerance
        </div>

        <div className="text-muted mt-1 mb-1" 
        style={{ display:'flex',fontSize: '12px', justifyContent:"center",alignContent:"center"}}>
       
       T_req=t / (1 - mill_tol)
      
        </div>
         <div className="text-muted mt-1 mb-1" 
         style={{ display:'flex',fontSize: '12px', justifyContent:"center",alignContent:"center" ,fontWeight: 800}}>
        {result? <>T_req = {result.C_A}/{"0.875"}</>:null}</div>
    
        <div style={{ fontSize: '13px', fontWeight: 600 ,color:"black"  ,display:'flex',justifyContent:"center",alignContent:"center"}}>
             {result ? <div>
            <div>mill: {result.millTole}</div>
          </div>: <></>}
        </div> 
       </Card.Body>  



               <Card.Body className="p-2" style={{background:'#93C5FD'}}>

        <div 
        style={{ fontSize: '12px', fontWeight: 600 , color:"black" }}>
          <div>Hoopstress</div>
                  
        </div>

        <div className="text-muted mt-1 mb-1" 
        style={{ display:'flex',fontSize: '12px', justifyContent:"center",alignContent:"center"}}>
        
        σ_H = P × D / (20 × t(wall thickness consider)-A(corrosion allowance) )
      
        </div>
         <div className="text-muted mt-1 mb-1" 
         style={{ display:'flex',fontSize: '12px', justifyContent:"center",alignContent:"center" ,fontWeight: 800}}>
        {result? <> σ_H= {inputvalue.pressure+"X"+inputvalue.size.value+"/(20("+ inputvalue.wall_thik_consider +"-"+ inputvalue.CA +")"} </>:null}
        </div>
        <div>
          
         <div style={{ fontSize: '13px', fontWeight: 600 ,color:"black"  ,display:'flex',justifyContent:"center",alignContent:"center"}}>
          {result ? <div>
          <div>Hoopstress: {result.hoop_stress}</div>
          </div>: <></>}
        </div>
        </div>
         {/* </Card.Body>  
         <Card.Body style={{background:'#93C5FD'}}> */}
         <div  className='mt-1' style={{ fontSize: '12px', fontWeight: 600 , color:"black" }}>AllowableHoopstress</div>

        <div className="text-muted mt-1 mb-1" 
        style={{ display:'flex',fontSize: '12px', justifyContent:"center",alignContent:"center"}}>
        
        σ_allow=S × F × E × T
      
        </div>
         <div className="text-muted mt-1 mb-1" 
         style={{ display:'flex',fontSize: '12px', justifyContent:"center",alignContent:"center" ,fontWeight: 800}}>
        {result? <>σ_allow= {inputvalue.grade+"X"+inputvalue.class+"X"+inputvalue.menufecture+"X"} </>:null}
      
        </div>
        <div  
        style={{ fontSize: '13px', fontWeight: 600 ,color:"black"  ,display:'flex',justifyContent:"center",alignContent:"center"}}>
             {result ? 
          <div>
            
       
       </div>: <></>}
        </div> 
       </Card.Body>  





       <Card.Body className="p-2" style={{background:'#93C5FD'}}>
        <div 
        style={{ fontSize: '12px', fontWeight: 600 , color:"black" }}>
          Utilisation Ratio
    
        </div>

        <div className="text-muted mt-1 mb-1" 
        style={{ display:'flex',fontSize: '12px', justifyContent:"center",alignContent:"center"}}>
       T_C = T_min+CA
      
        </div>
         <div className="text-muted mt-1 mb-1" 
         style={{ display:'flex',fontSize: '12px', justifyContent:"center",alignContent:"center" ,fontWeight: 800}}>
        {result? <>T_req = {result.C_A}/{"0.875"}</>:null}
      
        </div>
        <div  
        style={{ fontSize: '13px', fontWeight: 600 ,color:"black"  ,display:'flex',justifyContent:"center",alignContent:"center"}}>
             {result ? 
          <div>
            
            <div>CA: {result.C_A}</div>
           
          </div>: <></>}
        </div> 
       </Card.Body>  

    </Card>
  );
}

  
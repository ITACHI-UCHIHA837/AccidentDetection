

import { useState ,useEffect} from 'react';
import { Card, Table } from 'react-bootstrap';
import Dropdown from '../../components/Dropdown';
import Range from '../../components/Range';
import Userinput from '../../components/Userinput';

export const  pipesizedata = [
{label:'NPS',DN:50	 , inch:2.375 , value:	60.33},
{label:'NPS',DN:80	 , inch:3.5	,   value: 88.9},
{label:'NPS',DN:100, inch:4.5	  , value: 114.3},
{label:'NPS',DN:150, inch:6.625	, value: 168.3},
{label:'NPS',DN:200, inch:8.625	, value: 219.1},
{label:'NPS',DN:250, inch:10.75	, value: 273.1},
{label:'NPS',DN:300, inch:12.75	, value: 323.9},
{label:'NPS',DN:350, inch:14	    , value: 355.6},
{label:'NPS',DN:400, inch:16	    , value: 406.4},
{label:'NPS',DN:450, inch:18	    , value: 457.0},
{label:'NPS',DN:500, inch:20	    , value: 508.0},
{label:'NPS',DN:550, inch:22	    , value: 559.0},
{label:'NPS',DN:600, inch:24	    , value: 610.0},
{label:'NPS',DN:650, inch:26	    , value: 660.0},
{label:'NPS',DN:700, inch:28	    , value: 711.0},
{label:'NPS',DN:750, inch:30	    , value: 762.0},
{label:'NPS',DN:800, inch:32	    , value: 813.0},
{label:'NPS',DN:850, inch:34	    , value: 864.0},
{label:'NPS',DN:900, inch:36	    , value: 914.0},
{label:'NPS',DN:950, inch:38	    , value: 965.0},
{label:'NPS',DN:1000, inch:40	  , value:1016.0},
{label:'NPS',DN:1050, inch:42	  , value:1067.0},
{label:'NPS',DN:1100, inch:44	  , value:1118.0},
{label:'NPS',DN:1150, inch:46	  , value:1168.0},
{label:'NPS',DN:1200, inch:48	  , value:1219.0},
{label:'NPS',DN:1300, inch:52	  , value:1321.0},
{label:'NPS',DN:1400, inch:56	  , value:1422.0},
{label:'NPS',DN:1500, inch:60	  , value:1524.0},
{label:'NPS',DN:1600, inch:64	  , value:1626.0},
{label:'NPS',DN:1700, inch:68	  , value:1727.0},
{label:'NPS',DN:1800, inch:72	  , value:1829.0},
{label:'NPS',DN:1900, inch:76	  , value:1930.0},
{label:'NPS',DN:2000, inch:80	  , value:2032.0},



  { label: 'select size', value: 1 },

];
export const pipegradedata = [
  // { label: 'select grade', value: 0 },
{label:'API 5L Gr B',value:	245 ,Psi:	35500},
{label:'API 5L X42	'	,value:290	,Psi:42100},
{label:'API 5L X46	'	,value:320	,Psi:46400},
{label:'API 5L X52	'	,value:360	,Psi:52200},
{label:'API 5L X56	'	,value:390	,Psi:56600},
{label:'API 5L X60	'	,value:415	,Psi:60200},
{label:'API 5L X65	'	,value:450	,Psi:65300},
{label:'API 5L X70	'	,value:485	,Psi:70300},
{label:'API 5L X80	'	,value:555	,Psi:80500},
]
export const pipeclassdata = [
{ label: 'select class', value: 0.1 },
{label:'Class 1, Div 1'	,	value:0.80},
{label:'Class 1, Div 2'	,	value:0.72},
{label:'Class 2',  value:0.60},
{label:'Class 3',  value:0.50},
{label:'Class 4',  value:0.40},
];

export const pipemenufactredata=[
{label:'Seamless	                 ', 	value:1.00},
{label:'Electric Resistance Welded',		value:1.00},
{label:'Electric Flash Welded	    ',    value:1.00},
{label:'Submerged Arc Welded		    ',  value:1.00},
{label:'Furnace Butt Welded		     ',   value: 0.60}
];
export default function Input_field({pipeinput, onChange, result}) {
  /// FOr display iputs////
// useEffect(() => {
//   console.log(pipeinput);
// });
console.log(result);

  return (

    <Card className="shadow-sm border-0 g-2" style={{ background: "#FEF9C3", borderRadius: '10px' }}>

      {/* Header */}
      <Card.Header className="py-2 px-2 " style={{ background: "#FDE68A" }}>
        <h6 className="mb-0">
          <span className="badge bg-secondary me-2">Z2</span>
          INPUT
        </h6>
      </Card.Header>

      {/* Body */}
      <Card.Body className="p-2   ">

        <span className='col-xl-2' style={{ fontSize: '12px', fontWeight: 600, color: "black" }}>
          Pipe Size — 
          </span>
          
          <span>
           {pipeinput.size.label} ({pipeinput.size.value})
        </span>

        <div className='mb-2 ' style={{ background: "white" }}>

          <Dropdown
            label="Material Grade"
            options={pipesizedata}
            precision={3}
            value={pipeinput.size.value}
            onChange={(e) => 
              // onChange ( 'size',Number(e.target.value))
       
                    {
                    onChange('size',e.target.vlue)
                          const selected = pipesizedata.find(
                          (item) => item.value === Number(e.target.value));
                          onChange('size',selected)
                         }
                         }
                         />  
        </div>


        <div className='pb-2 mb-3' style={{ background: "white", borderRadius: '10px' }}>

          <div style={{ fontSize: '13px', fontWeight: 600, color: "black" }}>
            Outside Diameter(FIX)
          </div>
          <div style={{  display:'flex',justifyContent:'center', alignItems:'center',color:'darkblue' ,fontSize:'14px'} }>
            {pipeinput.size.value}mm
          </div>
          <div style={{  display:'flex',justifyContent:'center', alignItems:'center',color:'red' ,fontSize:'22px'}} >
            {pipeinput.size.label} 
          </div>
        </div>


        <div style={{ fontSize: '12px', fontWeight: 600, color: "black" }}>
          <span>
            Steel-grade  smyp MPa
          </span>
          <span className="ms-1" style={{ fontSize: '10px', fontWeight: 100, color: "black" }}>
            grade
          </span>

        </div>
          <Dropdown
            label="Material Grade"
            options={pipegradedata}
            value={pipeinput.grade}
            onChange={(e) =>  onChange('grade',Number(e.target.value))}
          />
  

          <Range
            label="Design Pressure"
            min={1}
            max={500}
            step={0.01}
            defaultValue={pipeinput.pressure}
            unit="bar"
            toconvert={'Psi'}
            onChange={(val)=>onChange('pressure',Number(val))}
          />       
          {/* <div>{val}</div> */}
          <Range
          label="Corrosion Allow."
          min={0}
          max={10}
          step={0.01}
          defaultValue={pipeinput.CA}
          precision={2}
          unit='mm'
          toconvert={'inch'}
          onChange={(val)=>  onChange('CA',Number(val))}
            />
          <Userinput
                        label="Diameter to wall thickness ratio(allowable)"
                        type="number"
                        value={pipeinput.dia_to_wall}
                        onChange={(val) => onChange('dia_to_wall', val)}
                            />
      {/* <div style={{ fontSize: '12px', fontWeight: 600, color: "black" }}>
          <span>
            pipe class
          </span>
         

        </div> */}
            {/* <Dropdown
            label="Location calss"
            options={pipeclassdata}
            value={pipeinput.class}
            onChange={(e) =>  onChange('class',Number(e.target.value))}
          /> */}
               <Userinput
                label="Wall thikness consider"
                type="number"
                value={pipeinput.wall_thik_consider}
                unit='mm'
                onChange={(val) => onChange('wall_thik_consider', val)}
                    />
            {/* <Dropdown
            label="Pipe Manufacturing Process"
            options={pipemenufactredata}
            value={pipeinput.menufecture}
            onChange={(e) =>  onChange('menufecture',Number(e.target.value))}
          /> */}
          <div>
         {result ? 
          <div>
            <div>t_min: {result.t_min}</div>
            <div>Status: {result.status}</div>
          </div>:<></>
          
        //  {result && (
        //   <div>
        //     <div>t_min: {result.t_min}</div>
        //     <div>Status: {result.status}</div>
        //   </div>
}
          </div>

      </Card.Body>
    </Card>
  );
}

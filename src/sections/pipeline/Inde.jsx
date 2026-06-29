import React from "react";
import "./inde.scss";
// import  Form } from "react-bootstrap";
import Dropdown from '../../components/Dropdown';
import { FileText, ChevronDown, Pencil } from "lucide-react";
import Range from "../../components/Range";
import Userinput from "../../components/Userinput";
import { pipesizedata, pipegradedata, pipeclassdata,pipemenufactredata } from "../pipeline/Input_field"
import DualUnitInput from "../../components/DualUnitInput";
//mport Userinput from "../../components/Userinput";


export default function Inde({ pipeinput, onChange }) {
  // console.log(pipesizedata);
 
  return (
    <div className="input-card">

      {/* HEADER */}
      <div className="input-header">
        <FileText size={18} />
        <h2>INPUT DATA</h2>
      </div>

      {/* GRID */}
      <div className="input-grid">

        {/* COLUMN 1 */}
        <div className="section1" >
          <h3>Project Information</h3>

          {/* <label>Project Name</label> */}


          <div className="input-with-icon">
            <Userinput
              label="Project name"
              placeholder='Untitled'
              type='text'
              value={pipeinput.projname}
              onChange={(val) => onChange('projname', val)}
            />
            {/* <Pencil size={12} /> */}
          </div>

          <hr />

          <h3>Design Conditions</h3>

          {/* <div className="simple-input">
            <input />
          </div> */}


          {/* <div className="simple-input">
            <input />
          </div> */}
          <div className="variables">
            <h4>Input Variables</h4>
            <ul>
              <li>P = Design pressure</li>
              <li>D = Outside diameter</li>
              <li>S = SMYS (steel)</li>
              <li>E = Joint factor</li>
              <li>F = Design factor</li>
              <li>T = Temperature</li>
              <li>Y = Coefficient</li>
            </ul>
          </div>



        </div>

        {/* COLUMN 2 */}
        <div className="section2">
          <h3>Pipe Details</h3>
          
            

        
               
          <div className="simple-input">
            {/* <input placeholder="Select standard size" /> */}

            <Dropdown
              label="Material Grade"
              options={pipesizedata}
              precision={3}
              value={pipeinput.size.value}
              onChange={(e) =>
              // onChange ( 'size',Number(e.target.value))

              {
                onChange('size', e.target.vlue)
                const selected = pipesizedata.find(
                  (item) => item.value === Number(e.target.value));
                onChange('size', selected)
              }
              } />


          </div>


          {/* <label>Steel Grade (SMYS)</label> */}
          <div className="simple-input highlight">
            {/* <input placeholder="Select size" /> */}
            
            <Dropdown
              label="Material Grade"
              options={pipegradedata}
              value={pipeinput.grade}
              onChange={(e) => onChange('grade', Number(e.target.value))}
            />
          </div>

          {/* <label>Wall Thickness (t)</label> */}

          {/* <label>Design Pressure (P)</label> */}
                 {/* <Userinput
              label="Designe Pressure (P)"
              type="number"
              value={pipeinput.pressure}
              unit="mm"
              onChange={(val) => onChange('pressure', Number(val))}
            /> */}
    
 
                  
     <DualUnitInput label="Designe pressure"
        value={pipeinput.pressure}
        step={0.1}
       unitLeft= "bar"
        unitRight="psi"
         onChange={(val) => onChange('pressure', Number(val))}
        />
     <DualUnitInput label="Corrosion Allow"
        value={pipeinput.CA}
        step={0.1}
       unitLeft= "mm"
        unitRight="inch"
         onChange={(val) => onChange('CA', Number(val))}
        />
     <DualUnitInput label="Designe MINIMUM temp"
        value={pipeinput.desi_mini_temp}
        step={0.1}
       unitLeft= "ºC"
        unitRight="ºF"
         onChange={(val) => onChange('desi_mini_temp', Number(val))}
        />
     <DualUnitInput label="desi_temp"
        value={pipeinput.desi_temp}
        step={0.1}
       unitLeft= "mm"
        unitRight="inch"
         onChange={(val) => onChange('desi_temp', Number(val))}
        />
     <DualUnitInput label="Install temp."
          value={pipeinput.install_temp}
         step={0.1}
           unitLeft= "mm"
          unitRight="inch"
         onChange={(val) => onChange('install_temp', Number(val))}
        />
     <DualUnitInput label="Ambient temp."
        value={pipeinput.ambi_temp}
        step={0.1}
       unitLeft= "mm"
        unitRight="inch"
         onChange={(val) => onChange('ambi_temp', Number(val))}
        />
      

         {/* <label>Corrosion allow</label> */}
          {/* <div className="simple-input">
     <Range
          label="Designe MINIMUM temp."
          min={0}
          max={100}
          step={0.01}
          defaultValue={pipeinput.desi_mini_temp}
          precision={2}
          unit='ºC'
          toconvert={'ºF'}
           onChange={(val)=>  onChange('desi_mini_temp',Number(val))}
            />
          </div>
          <div className="simple-input">
               <Range
          label="Designe temp."
          min={0}
          max={100}
          step={0.01}
          defaultValue={pipeinput.desi_temp}
          unit='ºC'
          toconvert={'ºF'}
          precision={2}
           onChange={(val)=>  onChange('desi_temp',Number(val))}
            />

          </div>
          <div className="simple-input">
                <Range
          label="Install temp."
          min={0}
          max={100}
          step={0.01}
          defaultValue={pipeinput.install_temp}
          precision={2}
          unit='ºC'
          toconvert={'ºF'}
           onChange={(val)=>  onChange('install_temp',Number(val))}
            />
          </div>
          <div className="simple-input">
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
       
          </div>
          */}
        </div>




        {/* COLUMN 3 */}
        <div className="section3">
          <h3>Additional Inputs</h3>
        <Dropdown
            label="Location class"
            options={pipeclassdata}
            value={pipeinput.class}
            onChange={(e) => onChange('class', Number(e.target.value))}
          />
             <label>Joint Factor (E)</label>
              <Dropdown
            label="Pipe Manufacturing Process"
            options={pipemenufactredata}
            value={pipeinput.menufecture}
            onChange={(e) =>  onChange('menufecture',Number(e.target.value))}
          />
           <div className="simple-input">


            <Userinput
              label="Diameter to wall thickness ratio(allowable)"
              type="number"
              value={pipeinput.dia_to_wall}
              unit="mm"
              onChange={(val) => onChange('dia_to_wall', val)}
            />
            {/* <input defaultValue="0.00" /> */}
            {/* <span className="unit">mm <ChevronDown size={14} /></span> */}
            </div>
              {/* <label>Mill Tolerance</label> */}
              {/* <input placeholder="Select mill tolerance" /> */}
            <div className="simple-input">
            <Userinput
              label="Wall thikness consider"
              type="number"
              value={pipeinput.wall_thik_consider}
              unit='mm'
              onChange={(val) => onChange('wall_thik_consider', val)}
            />
          </div>

           

               <Userinput
                label="Field Bend Radius in term of Diameter"
                type="number"
                unit="mm"
                value={pipeinput.fil_ban_rad}
                onChange={(val) => onChange('fil_ban_rad', val)}
                    />

                    
       
         <Userinput
                       label="Elastic Bend Radius in term of Diameter"
                       type="number"
                       unit='mm'
                       value={pipeinput.els_ban_rad}
                       onChange={(val) => onChange('els_ban_rad', val)}
                           />

                           {/* <Datainput  label="Etesr"
                       type="number"
                       unit='mm'
                       value={pipeinput.els_ban_rad}
                       onChange={(val) => onChange('els_ban_rad', val)}/>
 */}

          {/* <Range label="install temp."
          min={0}
          max={100}
          step={0.01}
          defaultValue={pipeinput.install_temp}
          precision={2}
          unit='ºC'
          toconvert={'ºF'}
           onChange={(val)=>  onChange('install_temp',Number(val))}/> */}

          {/* <input className="simple-input" defaultValue="1.00" /> */}
        </div>

      </div>
    </div>
  );
}
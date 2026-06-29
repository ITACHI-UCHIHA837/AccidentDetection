import React from "react";

const calpage = ({ formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="input-card">
      <h3 className="section-title">📄 INPUT DATA</h3>

      <div className="input-grid">

        {/* PROJECT INFO */}
        <div className="input-col">
          <h4>Project Information</h4>

          <label>Project Name</label>
          <input
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="Enter project name"
          />

          <h4>Design Conditions</h4>

          <label>Design Pressure (P)</label>
          <div className="row">
            <input
              type="number"
              name="pressure"
              value={formData.pressure}
              onChange={handleChange}
            />
            <span className="unit">bar</span>
          </div>

          <label>Design Temperature (T)</label>
          <div className="row">
            <input
              type="number"
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
            />
            <span className="unit">°C</span>
          </div>

          {/* Variables */}
          <div className="variables">
            <p><span>P</span> = Design pressure</p>
            <p><span>D</span> = Outside diameter</p>
            <p><span>S</span> = SMYS (steel)</p>
            <p><span>F</span> = Design factor</p>
            <p><span>E</span> = Joint factor</p>
            <p><span>T</span> = Temperature</p>
          </div>
        </div>

        {/* PIPE DATA */}
        <div className="input-col">
          <h4>Pipe Details</h4>

          <label>Pipe Size</label>
          <select name="pipeSize" onChange={handleChange}>
            <option>Select standard size</option>
          </select>

          <label>Outside Diameter (OD)</label>
          <input
            name="diameter"
            placeholder="Select size"
            value={formData.diameter}
            onChange={handleChange}
          />

          <label>Wall Thickness (t)</label>
          <input
            name="thickness"
            placeholder="Select thickness"
            value={formData.thickness}
            onChange={handleChange}
          />

          <label>Steel Grade (SMYS)</label>
          <select name="grade" onChange={handleChange}>
            <option>Select material grade</option>
          </select>
        </div>

        {/* ADDITIONAL INPUTS */}
        <div className="input-col">
          <h4>Additional Inputs</h4>

          <label>Corrosion Allowance (CA)</label>
          <div className="row">
            <input
              type="number"
              name="ca"
              value={formData.ca}
              onChange={handleChange}
            />
            <span className="unit">mm</span>
          </div>

          <label>Mill Tolerance</label>
          <select name="millTol" onChange={handleChange}>
            <option>Select mill tolerance</option>
          </select>

          <label>Joint Factor (E)</label>
          <input
            type="number"
            name="jointFactor"
            value={formData.jointFactor}
            onChange={handleChange}
          />

          <label>Design Factor (F)</label>
          <input
            type="number"
            name="designFactor"
            value={formData.designFactor}
            onChange={handleChange}
          />
        </div>

      </div>
    </div>
  );
};

export default calpage;
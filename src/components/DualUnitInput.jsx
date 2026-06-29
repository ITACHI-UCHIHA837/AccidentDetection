import { useState } from "react";
import { useRef } from "react";

export default function DualUnitInput({
  label,
 value = 0,
  step = 0.1,
  min = -100,
  unitLeft = "mm",
  unitRight = "inch",
  onChange,

}) {
  
  const convert = (value, from, to) => {
    if (from === to) return value;

  // length conversion
  if (from === "mm" && to === "inch") return (value / 25.4).toFixed(3);
  if (from === "inch" && to === "mm") return (value * 25.4).toFixed(3);

  // pressure (optional future)
  if (from === "bar" && to === "psi") return (value * 14.5038).toFixed(3);
  if (from === "psi" && to === "bar") return (value / 14.5038).toFixed(3);

  if (from === "ºC" && to === "ºF") return (value *9/5+32).toFixed(3);
  if (from === "ºF" && to === "ºC") return (((value-32)*5)/9).toFixed(3);

  return value;
};
const [leftVal, setLeftVal] = useState(value);
const [rightVal, setRightVal] = useState(convert(value, unitLeft, unitRight));

const timeoutRef = useRef(null);

const triggerChange = (val) => {
  if (!onChange) return;

  clearTimeout(timeoutRef.current);

  timeoutRef.current = setTimeout(() => {
    onChange(val);
  }, 500); // adjust (200–500ms)
};


const clamp = (val) => {
  if (isNaN(val)) return 0;
  return val < min ? min : val;
};

const handleLeftChange = (val) => {
  let num = clamp(parseFloat(val));

  setLeftVal(num);
  setRightVal(+convert(num, unitLeft, unitRight));

  triggerChange(num);
};

const handleRightChange = (val) => {
  let num = clamp(parseFloat(val));

  const converted = clamp(+convert(num, unitRight, unitLeft));

  setRightVal(num);
  setLeftVal(converted);

  triggerChange(converted);
};

// const handleLeftChange = (val) => {
//   const num = parseFloat(val) || 0;

//   setLeftVal(num);
//   setRightVal(+convert(num, unitLeft, unitRight));

//   // ✅ only send LEFT value
//   onChange && onChange(num);
//     triggerChange(num);
// };

// const handleRightChange = (val) => {
//   const num = parseFloat(val) || 0;

//   const converted = +convert(num, unitRight, unitLeft);

//   setRightVal(num);
//   setLeftVal(converted);

//   // ✅ still send LEFT value (converted)
//   onChange && onChange(converted);
//     triggerChange(converted);
// };


  // const handleLeftChange = (val) => {
  //   const num = parseFloat(val) || 0; 
  //   setLeftVal(num);
  //   setRightVal(+convert(num, unitLeft, unitRight));
  // };

  // const handleRightChange = (val) => {
  //   const num = parseFloat(val) || 0;
  //   setRightVal(num);
  //  setLeftVal(+convert(num, unitRight, unitLeft));
  // };

const increase = () => {
  const newVal = +(leftVal + step).toFixed(3);
  handleLeftChange(newVal);
};

const decrease = () => {
  const newVal = leftVal - step < min ? min : leftVal - step;
  handleLeftChange(+newVal.toFixed(3));
};

  // const increase = () => {
  //   handleLeftChange((leftVal + step).toFixed(3));
  // };

  // const decrease = () => {
  //   const newVal = leftVal - step < min ? min : leftVal - step;
  //   handleLeftChange(newVal.toFixed(3));
  // };

  return (
    <>
      <div className="dual-wrapper">
        <label className="label" >{label}</label>

        <div className="dual-container">
          {/* LEFT */}
          <div className="input-box">
            <input
              type="number"
              value={leftVal}
              onChange={(e) => handleLeftChange(e.target.value)}
            />
            <span className="unit">{unitLeft}</span>

            <div className="arrows">
              <button onClick={increase}>▲</button>
              <button onClick={decrease}>▼</button>
            </div>
          </div>

          <span className="arrow">→</span>

          {/* RIGHT */}
          <div className="input-box">
            <input
              type="number"
              value={rightVal}
              onChange={(e) => handleRightChange(e.target.value)}
            />
            <span className="unit">{unitRight}</span>
             <div className="arrows">
              <button onClick={increase}>▲</button>
              <button onClick={decrease}>▼</button>
            </div>
          </div>
        </div>
      </div>

      {/* Styles inside same file */}
      <style>{`
      .label{
      
      font-size: 140px;
      font-Weight: 600;
      // color:#fff;
      }
        .dual-wrapper {
          color: #fff;
          margin-bottom: 16px;
          font-family: sans-serif;
        }

        .dual-wrapper label {
          font-size: 14px;
          margin-bottom: 6px;
          display: block;
        }

        .dual-container {
        margin-top:10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .input-box {
          display: flex;
          align-items: center;
          background: #0f1b2a;
          border: 1px solid #2a3b52;
          border-radius: 8px;
          padding: 6px 10px;
          position: relative;
        }

        .input-box.secondary {
          background: #2a3442;
        }

        .input-box input {
          background: transparent;
          border: none;
          color: #fff;
          width: 80px;
          outline: none;
          font-size: 14px;

          /* remove default arrows */
          -moz-appearance: textfield;
        }

        .input-box input::-webkit-outer-spin-button,
        .input-box input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .unit {
          margin-left: 6px;
          font-size: 12px;
          opacity: 0.7;
        }

        .arrows {
          display: flex;
          flex-direction: column;
          margin-left: 6px;
        }

        .arrows button {
          background: transparent;
          border: none;
          color: #9ccfff;
          font-size: 10px;
          cursor: pointer;
          padding: 0;
          line-height: 10px;
        }

        .arrows button:hover {
          color: #4db8ff;
        }

        .arrow {
          opacity: 0.6;
        }
      `}</style>
    </>
  );
}
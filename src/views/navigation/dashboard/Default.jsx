// react-bootstrap
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// project-imports
import SalesPerformanceCard from 'components/cards/dashboard/SalesPerformanceCard';
import {  RecentUsersCard } from 'sections/dashboard/default';
import UsersMap from 'sections/dashboard/UsersMap'
import Button from 'react-bootstrap/Button';
import AhmedabadMap from '../../../sections/dashboard/Ahmmap'
import FreeRoutingMap from '../../../sections/dashboard/Freemap'

// ===============================|| SALES PERFORMANCE CARD - DATA ||============================== //
import React, { useEffect } from "react";
import { useState } from 'react';


// ===============================|| STAT INDICATOR CARD - DATA ||============================== //

const statIndicatorData = [
  { icon: 'ph ph-lightbulb-filament', value: '235', label: 'TOTAL IDEAS', iconColor: 'text-success' },
  { icon: 'ph ph-map-pin-line', value: '26', label: 'TOTAL LOCATION', iconColor: 'text-primary' }
];

// ===============================|| SOCIAL STATS CARD - DATA ||============================== //

const socialStatsData = [
  {
    icon: 'ti ti-brand-facebook-filled text-primary',
    count: '12,281',
    percentage: '+7.2%',
    color: 'text-success',
    stats: [
      {
        label: 'Target',
        value: '35,098',
        progress: {
          now: 60,
          className: 'bg-brand-color-1'
        }
      },
      {
        label: 'Duration',
        value: '3,539',
        progress: {
          now: 45,
          className: 'bg-brand-color-2'
        }
      }
    ]
  },
  {
    icon: 'ti ti-brand-twitter-filled text-info',
    count: '11,200',
    percentage: '+6.2%',
    color: 'text-primary',
    stats: [
      {
        label: 'Target',
        value: '34,185',
        progress: {
          now: 40,
          className: 'bg-success'
        }
      },
      {
        label: 'Duration',
        value: '4,567',
        progress: {
          now: 70
        }
      }
    ]
  },
  {
    icon: 'ti ti-brand-google-filled text-danger',
    count: '10,500',
    percentage: '+5.9%',
    color: 'text-primary',
    stats: [
      {
        label: 'Target',
        value: '25,998',
        progress: {
          now: 80,
          className: 'bg-brand-color-1'
        }
      },
      {
        label: 'Duration',
        value: '7,753',
        progress: {
          now: 50,
          className: 'bg-brand-color-2'
        }
      }
    ]
  }
];
  //  import { useEffect } from "react";
    // import maplibregl from "maplibre-gl";
    // import "maplibre-gl/dist/maplibre-gl.css";

// ================================|| DASHBOARD - DEFAULT ||============================== //

export default function DefaultPage() {


    // try {
  //   const res =await fetch(`http://localhost:8000/api/calculations/deleteCalculation/${id}`,
  //     {
  //       method:'DELETE',
  //       "Content-Type": "application/json",   
  //     }
  //    setrecent((prev) => prev.filter((item) => item._id !== id));
  // } catch (error) {
  //  console.log("acant delet" + error); 
  // } 
  // }
  
  //   )
  const [reload, setReload] = useState(false);
useEffect(() => {
  getdat();
}, [reload]);
  const [totali,settotal]=useState("");
  const [pass,setpass]=useState("");
  const [fail,setfail]=useState("");
  const [name,setname]=useState("");
  const [recent,setrecent]=useState([]);

  
  const getdat = async()=>{
    const token = sessionStorage.getItem("token")
    if (!token) return;
    try {
      const ews = await fetch(`${import.meta.env.VITE_API_URL}/stats`,
      // const ews = await fetch("http://localhost:8000/api/calculations/stats",
        {
          method: "GET",
          headers: {
            aut: `Bearer ${token}`
          }
        }
      );
      const data =await ews.json();
      console.log(data);
      console.log(data.passed);
   
       setfail(data.failed);
       setpass(data.passed);
       settotal(data.total);
       setrecent(data.recent);
    } catch (error) {
      console.log("error in the front"+error);
      
    }
    
  };
  
 // getdat();
  



 let avg = (pass/totali*100).toFixed(2);
 if (isNaN(avg)) {
  avg = 0.00;
}




  const salesPerformanceData = [
  { title: 'Total', icon: 'ph ph-arrow-up text-success', amount: `${totali|| 0}`, progress: { now: `${totali}`, className: 'bg-brand-color-1' } },
  { title: 'PASS', icon: 'ph ph-arrow-up text-success', amount: `${pass || 0}`, progress: { now: `${pass}`, className: 'bg-brand-color-1' } },
  { title: 'FAIL', icon: 'ph ph-arrow-down text-success', amount: `${fail || 0 }`, progress: { now: `${fail}`, className: 'bg-brand-color-1' } },
  { title: 'AVG', icon: 'ph ph-arrow-up text-success', amount: `${ avg }`, progress: { now: `${ avg  }`, className: 'bg-brand-color-1' } }
];

/**
 * Generates a random GPS coordinate within Ahmedabad city limits.
 * Useful for testing mapping and dispatch algorithms.
 */
function getRandomAhmedabadLocation() {
  // Approximate bounding box for Ahmedabad
  const bounds = {
    southLat: 22.9200, // Roughly Narol/Vatva area
    northLat: 23.1400, // Roughly Chandkheda/Zundal area
    westLng: 72.4800,  // Roughly Bopal/Science City area
    eastLng: 72.6800   // Roughly Odhav/Vastral area
  };

  // Generate random numbers within those ranges
  const randomLat = Math.random() * (bounds.northLat - bounds.southLat) + bounds.southLat;
  const randomLng = Math.random() * (bounds.eastLng - bounds.westLng) + bounds.westLng;

  // Return formatted to 5 decimal places (standard for GPS accuracy)
  console.log("Accident Detected at:", randomLat.toFixed(5));
  console.log("Accident Detected at:", randomLng.toFixed(5));
  return {
    lat: parseFloat(randomLat.toFixed(5)),
    lng: parseFloat(randomLng.toFixed(5))
  };
}

// --- Example Usage ---



// Output: Accident Detected at: { lat: 23.03142, lng: 72.54119 }

  //  useEffect(() => {
  //   const fetchData = async () => {
  //     const token = sessionStorage.getItem("token");
  //     console.log(token);
  //     const res = await fetch("http://localhost:8000/api/calculations/dashbord", {
  //       headers: {
  //         Authorization: `Bearer ${token}`
  //       }
  //     });
      // edffa
      
  //     const data = await res.json();
  //     console.log(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <Row>
      {/* row - 1 */}
      {salesPerformanceData.map((item, index) => (
        <Col key={index} md={3
          // index === 1 ? 12 : 1
          } xl={3}>
          <SalesPerformanceCard {...item} />
        </Col>
      ))}

      {/* row - 2 */}
      <Col md={8} xl={12}>
<RecentUsersCard recent={recent} triggerReload={() => setReload(prev => !prev)}/>
      </Col>
      <Col md={6} xl={4}>
        <>
          {/* <EarningChart />
          <StatIndicatorCard data={statIndicatorData} /> */}
        </>
      </Col>

      {/* row - 3 */}
       {/* {socialStatsData.map((item, index) => ( }
        <Col key={index} md={index === 0 ? 12 : 6} xl={4}>
           <SocialStatsCard {...item} /> 
        </Col>
      ))} */}

      {/* row - 4 */}
      <Col md={6} xl={4}>
        {/* <RatingCard /> */}
      </Col>
      <Col md={1} xl={12}>
        {/* <RecentUsersCard /> */}
        <UsersMap /> 
        <FreeRoutingMap /> 
   
      </Col>
      <Col md={6} xl={8}>
        {/* <RecentUsersCard /> */}
      {/* <Progressbar /> */}
        {/* <dicription/> */}
        <Button variant="light-primary" onClick={()=>getRandomAhmedabadLocation()}>make coordinate</Button>
      </Col>
    </Row>
  );
}

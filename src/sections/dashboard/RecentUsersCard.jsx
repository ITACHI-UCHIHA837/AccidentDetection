// react-bootstrap
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import Table from 'react-bootstrap/Table';
import "../pipeline/Result.scss";
// project-imports
import MainCard from 'components/MainCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan , faDownload} from '@fortawesome/free-solid-svg-icons';
// assets
import Image1 from 'assets/images/user/avatar-1.png';
import Image2 from 'assets/images/user/avatar-2.png';
import Image3 from 'assets/images/user/avatar-3.png';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
// import { useParams } from "react-router-dom";
//import { param } from '../../../../bck/routes/calculationRoutes';
//import { loguser } from '../../../../bck/controllers/authenticationcontroller';

// ===============================|| RECENT USERS CARD - DATA ||============================== //


const recentUsersData = [
  {
    image: Image1,
    projectname: 'Isabella Christensen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '11 MAY 12:56',
    iconClass: 'text-success',
    badge1: 'Reject',
    badge2: 'Approve'
  },
  {
    image: Image2,
    projectname: 'Mathilde Andersen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '11 MAY 10:35',
    iconClass: 'text-danger',
    badge1: 'Reject',
    badge2: 'Approve'
  },
  {
    image: Image3,
    projectname: 'Karla Sorensen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '9 MAY 17:38',
    iconClass: 'text-success',
    badge1: 'Reject',
    badge2: 'Approve'
  },
  {
    image: Image1,
    projectname: 'Ida Jorgensen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '19 MAY 12:56',
    iconClass: 'text-danger',
    badge1: 'Reject',
    badge2: 'Approve'
  },
  {
    image: Image1,
    projectname: 'Albert Andersen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '21 July 12:56',
    iconClass: 'text-success',
    badge1: 'Reject',
    badge2: 'Approve'
  },
  {
    image: Image1,
    projectname: 'Albert Andersen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '21 July 12:56',
    iconClass: 'text-success',
    badge1: 'Reject',
    badge2: 'Approve'
  },
  {
    image: Image1,
    projectname: 'Albert Andersen',
    desc: 'Lorem Ipsum is simply dummy text of…',
    date: '21 July 12:56',
    iconClass: 'text-success',
    badge1: 'Reject',
    badge2: 'Approve'
  }
];

// ==========================|| RECENT USERS CARD ||========================== //

export default function RecentUsersCard({recent, triggerReload}) {


  const [calculations, setCalculations] = useState([]);
  useEffect(() => {
  if (recent) {
    setCalculations(recent);
  }
}, [recent]);



const handeldelet = async(id)=>{
      const token =sessionStorage.getItem("token");
       const confirmDelete = window.confirm("Are you sure?");
  if (!confirmDelete) return;
  try {
    console.log("trying:"+id);
  const res=  await fetch(`${import.meta.env.VITE_API_URL}/${id}`,
  // const res=  await fetch(`http://localhost:8000/api/calculations/${id}`,
      {
        method:'delete',
      headers:{
        aut:`Bearer ${token}`
      }});

      const data = await res.json();
      if(!res.ok){
        alert(data.message);
        return;
      }
       setCalculations(prev => prev.filter(item => item._id !== id));
      triggerReload();
      // setCalculations((react) => react.filter(item => item._id !== id));
    console.log("deleting");
    
    //  setData((prev) => prev.filter((item) => item._id !== id));
  } catch (error) {
   console.log("recant delet" , error); 
  } 
  }

//  const recentdata = recent.recent 
//  console.log(recentdata);
    


return (
    <MainCard  title="Recent calculation" className="Recent-Users table-card" bodyClassName="p-0">
      <Table responsive hover className="mb-0">
         <tbody>  
           
           {
             
             
             
             calculations?<>
             {calculations.length > 0 && calculations.map((user, index) => (
            //  {calculations.map((user, index) => (
              
              // <tr className= "status-box" key={index} >
              // <tr className= {user.result=='FAIL'? "status-box-RED" : "status-box"} key={index} >
                
     
              <tr className="Recent-Users table-card  " key={index} style={user.result.Utilization_Ratio=='pass'?
              { 
                  background:' rgba(0, 255, 120, 0.05)',
                  border: '1px solid  rgba(0, 255, 120, 0.4)',
                  borderRadius: '12px'
                }:{ 
                  
                  // display: 'flex',
                  //gap: '12px',
                  //  padding: '14px',
                  borderRadius: '12px',
                   // margin: '15px 0',
                  background: 'rgba(255, 0, 0, 0.05)',
                  color: '#c5222',
                  border: '1px solid rgba(255, 0, 0, 0.4)',
                //  background:'rgb(232.4, 252.8, 247.7)' , Border: '5px solid rgb(253.9, 236.1, 234.9)'
              }}>
            <td>
             <Button variant="light-danger" className="btn-icon" onClick={()=>handeldelet(user._id)}>
  <FontAwesomeIcon icon={faTrashCan} />
</Button>      
              
           
            {/* <Image src={user.image} width="40px" /> */}
            {/* <p className="m-0">{user.result}</p> */}
            </td>
            <td>
            <h6 className="mb-1">{user.payload.projname}</h6>
                {/* <p className="m-0">{user.result}</p> */}
                {/* <p className="m-0">{user.createdAt}</p> */}
                <p>{new Date(user.createdAt).toLocaleString()}</p>
                </td>
                <td>
                <div className="d-flex align-items-center gap-3">
                  <i className={`ti ti-circle-filled f-10 ${user.result.Utilization_Ratio=='pass'?`text-success`: `text-danger`}`} />
                  {(user.result.Utilization_Ratio+"" || "00").slice(0,10)}
                </div>
              </td>
              <td>
             
              <Button variant="light-info" className="btn-icon" onClick={() => {
                const blob = new Blob([JSON.stringify(user.result)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `${user.payload.projname}_result.json`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              } }>
                  <FontAwesomeIcon icon={faDownload} />
                </Button>
                <Badge bg="brand-color-1" className="me-2 f-12">
                </Badge>
                <Badge bg="brand-color-1" className="me-2 f-12">
                  {user.badge2}
                  </Badge>
                  </td>
                </tr>
              ))}
              </>:null}
 </tbody> 
<div className="mt-1"></div>

          
       
      </Table>
    </MainCard>
  );
}

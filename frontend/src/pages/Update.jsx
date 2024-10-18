import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import edimage from "../images/editimg.jpg";
import delimage from "../images/delimg.jpg";
import { useNavigate } from "react-router-dom";
const Update=()=>{
    const[mydata,setMydata]=useState([]);
    const navigate=useNavigate();
    const loadData=()=>{
        let api="http://localhost:8000/employee/update";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setMydata(res.data);
        })
      }
        useEffect(()=>{
            loadData();
        },[]) 
    
    const myrecDel=(id)=>{
    let api="http://localhost:8000/employee/delete";
    axios.post(api,{id:id}).then((res)=>{
      alert("Data Deleted!!");
      loadData();
    })
  }
    const myrecEdit=(id)=>{
      navigate(`/edit`);
    }
        const ans=mydata.map((key)=>{
          return(
            <>
            <tr>
              <td>{key.empno}</td>
              <td>{key.empname}</td>
              <td>{key.designation}</td>
              <td>{key.salary}</td>
              <td>
                <a href="#" onClick={()=>{myrecEdit(key._id)}}>
                 <img src={edimage} width="30" height="30" />
                </a>
               <a href="#" onClick={()=>{myrecDel(key._id)}}>
                  <img src={delimage} width="30" height="30" />
               </a>
              </td>
            </tr>
            </>
          )
        })
      
    
    
    return(
        <>
        <h1>Update Employee Record</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Employee no.</th>
          <th>Employee Name</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
    )
}
export default Update;
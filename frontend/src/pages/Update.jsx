import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from "axios";

const Update=()=>{
    const[mydata,setMydata]=useState([]);
    const loadData=()=>{
        let api="http://localhost:8000/employee/update";
        axios.get(api).then((res)=>{
            console.log(res.data);
            setMydata(res.data);
        })

        useEffect(()=>{
            loadData();
        },[]) 
    }
    const ans= mydata.map((key)=>{
      return(
          <>
          <tr>
              <td>{key.empno}</td>
              <td>{key.empname}</td>
              <td>{key.designation}</td>
              <td>{key.salary}</td>
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
          <th>Designatiom</th>
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
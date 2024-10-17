
import { useState } from "react";
import axios from "axios"
import Table from 'react-bootstrap/Table';
const Search=()=>{
    const[empno,setEmpno]=useState("");
    const [mydata,setMydata]=useState([]);

    const handleSubmit=()=>{
        let api="http://localhost:8000/employee/search";
        axios.post(api,{empno:empno}).then((res)=>{
            setMydata(res.data)
        })
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
        <h1>Search Employee Record</h1>
        Enter Employee No.<input type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}}/>
        <button onClick={handleSubmit}>Search</button>
        <br></br>
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
export default Search;
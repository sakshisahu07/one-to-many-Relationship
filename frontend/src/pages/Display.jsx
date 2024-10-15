




import { useState,useEffect } from "react";
import axios from "axios";
const Display=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData=async()=>{
        let api="http://localhost:8000/employee/display";
        const response=await axios.get(api);
        setMydata(response.data);
        console.log(response.data)
    }
    useEffect(()=>{
        loadData();
    },[])

    const ans=mydata.map((key)=>{
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
        <h1>Display Employee Record</h1>
        <table>
            <tr>
                <th>Employee No.</th>
                <th>Employee Name</th>
                <th>Designation</th>
                <th>Salary</th>
            </tr>
            {ans}
        </table>
        </>
    )
}
export default Display;
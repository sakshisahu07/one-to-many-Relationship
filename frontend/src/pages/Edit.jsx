


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const Edit=()=>{
    const {empid}=useParams();
    const [mydata,setMydata]=useState({})
    const loadData=()=>{
        let api="http://localhost:8000/employee/edit";
        axios.post(api,{id:empid}).then((res)=>{
            console.log(res.data);
            setMydata(res.data);
        })
    }
    useEffect(()=>{
        loadData();
    },[])
    return(
        <>
        <h1>Edit Employeee Record</h1>
        Edit Emp no<input type="text" value={mydata.empno}/>
        <br/>
        Edit Emp name<input type="text" value={mydata.empname}/>
        <br/>
        Edit Designation<input type="text" value={mydata.designation}/>
        <br/>
        Edit Salary<input type="text" value={mydata.salary}/>

        </>
    )
}
export default Edit;

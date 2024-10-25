


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

    const handleInput=(e)=>{  
        let name=e.target.value
        let value=e.target.value;
        setMydata(values=>({...values,[name]:value}));
        console.log(mydata);
    }
    const handleSubmit=()=>{
        let api="http://localhost:8000/employee/editsave";
        axios.post(api,mydata).then((res)=>{
            alert("Data Updates")
        })
    }
    return(
        <>
        <h1>Edit Employeee Record</h1>
        Edit Emp no<input type="text" name="empno" value={mydata.empno} onChange={handleInput} />
        <br/>
        Edit Emp name<input type="text" name="empname" value={mydata.empname}onChange={handleInput} />
        <br/>
        Edit Designation<input type="text" name="designation" value={mydata.designation}onChange={handleInput} />
        <br/>
        Edit Salary<input type="text" name="salary" value={mydata.salary}onChange={handleInput} />
        <br></br>
        <button onClick={handleSubmit}>Edit Save</button>
        </>
    )
}
export default Edit;



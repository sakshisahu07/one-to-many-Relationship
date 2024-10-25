import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";


const Login=()=>{
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handleSubmit=async()=>{
        let api="http://localhost:8000/employee/login";
        const res= await axios.post(api,{email:email, password:password});
        console.log(res.data);
        localStorage.setItem("name",res.data[0].name)
        localStorage.setItem("email",res.data[0].email);

    }
    return(
        <>
        <h1>Login Page!!</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  value={password} onChange={(e)=>{setPassword(e.target.value)}} /> 
      </Form.Group>
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Login
      </Button>
    </Form>
        </>
    )
}
export default Login;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from "axios";
const Insert=()=>{
const[input,setInput]=useState({});

    const handleInput=(e)=>{
        let name=e.target.name
        let value=e.target.value
        setInput(values=>({...values,[name]:value}))

    }
        const handleSubmit=()=>{
            let api="http://localhost:8080/employee/insert";
            axios.post(api,input).then((res)=>{
                console.log(res);
                alert("Data Save!!!");
            })
        }
    
    return(
        <>
        <h1>Insert PAGE</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email username</Form.Label>
        <Form.Control type="text" name='username' value={input.username} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email email</Form.Label>
        <Form.Control type="email" name='email' value={input.email} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Firstname</Form.Label>
        <Form.Control type="text"name='fname' value={input.fname} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Secondname</Form.Label>
        <Form.Control type="text"  name='sname' value={input.sname} onChange={handleInput} />
      </Form.Group>     
      <Button onClick={handleSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        
        </>
    )
}
export default Insert;
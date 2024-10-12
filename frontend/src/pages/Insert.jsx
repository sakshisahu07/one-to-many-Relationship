
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState ,useEffect} from 'react';


const Insert=()=>{
  const [empno,setEmpno]=useState("");
  const [name,setName]=useState("");
  const [city,setCity]=useState("");
  const [sal,setSal]=useState("");

  const submitHandle=()=>{
    let inputval={empno:empno, name:name ,city:city, sal:sal}
    console.log(inputval);
  }
    return(
        <>
        <h1>Insert Employee Record</h1>
        <Form className='formSize'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Number</Form.Label>
        <Form.Control type="text" value={empno} onChange={(e)=>{setEmpno(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Name</Form.Label>
        <Form.Control type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Designation</Form.Label>
        <Form.Control type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Salary</Form.Label>
        <Form.Control type="text"  value={sal} onChange={(e)=>{setSal(e.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={submitHandle}>
        Submit
      </Button>
      </Form>
        </>
    )
}
export default Insert;
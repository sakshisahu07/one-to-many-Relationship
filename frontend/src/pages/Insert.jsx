
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Insert=()=>{
    return(
        <>
        <h1>Insert Employee Record</h1>
        <Form className='formSize'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Number</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Name</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Designation</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Employee Salary</Form.Label>
        <Form.Control type="text"  />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
        </>
    )
}
export default Insert;
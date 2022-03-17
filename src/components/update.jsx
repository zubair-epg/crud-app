import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from '@mui/material/Container';
import { useState } from 'react';
import axios from 'axios';

export default function Update() {


const [firstName , setFirstName] = useState('');
const [lastName , setLastName] = useState('');
const [checkBox , setCheckbox] = useState('');


 
const postData = () =>{
axios.post(`https://623241cd6f4ffe00fb85929b.mockapi.io/crud`,{
    firstName,
    lastName
})

    console.log(firstName)
    console.log(lastName)
    
}

 var data = axios.get('https://623241cd6f4ffe00fb85929b.mockapi.io/crud')
console.log(data)


  return (
      <Container max-width="sm">

    
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" placeholder="Enter firstName" onChange={(e) => setFirstName(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="text" placeholder="Enter LastName" onChange={(e) => setLastName(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" onClick={postData} >
    Submit
  </Button>
</Form>
      </div>
     
     
    </Box>
    </Container>
  );
}
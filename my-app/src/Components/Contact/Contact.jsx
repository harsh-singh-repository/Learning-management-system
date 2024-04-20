import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {VStack,Container,Heading, FormLabel,Input, Box, Button, Textarea} from '@chakra-ui/react';

const Contact = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");

  return (
    <>
       <Container h={"92vh"}>
          <VStack h={"full"} justifyContent={"center"} spacing={'16'}>
            <Heading children={"Contact Us"}/>

            <form style={{width:"100%"}}>
                  <Box my={'4'}>
                  <FormLabel htmlFor='Name' children='Enter Name'/>
                   <Input
                     required
                     id='name'
                     value = {name}
                     onChange= {(e) => setName(e.target.value)}
                     type="text"
                     placeholder='Your Name'
                     focusBorderColor='green'
                     />
                  </Box>

                  <Box my={'4'}>
                  <FormLabel htmlFor='email' children='Enter Email'/>
                   <Input
                     required
                     id='email'
                     value = {email}
                     onChange= {(e) => setEmail(e.target.value)}
                     type="email"
                     placeholder='abc@email.com'
                     focusBorderColor='green'
                     />
                  </Box>
                  
                  <Box my={'4'}>
                  <FormLabel htmlFor='message' children='Enter Message'/>
                   <Textarea
                     required
                     id='message'
                     value = {message}
                     onChange= {(e) => setMessage(e.target.value)}
                     type="text"
                     placeholder='Your Message'
                     focusBorderColor='green'
                     />
                  </Box>

                  <Button my="4" colorScheme='green' type='submit' variant={"solid"}>
                     Send Mail
                  </Button>

                  <Box my="4">
                     Request For Course? <Link to='/request'>
                        <Button variant={"link"} colorScheme='green'>
                            Click
                        </Button>{" "}
                        </Link>
                            here
                  </Box>
               </form>
          </VStack>
       </Container>
    </>
  )
}

export default Contact
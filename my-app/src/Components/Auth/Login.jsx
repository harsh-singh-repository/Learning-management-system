import { HStack,VStack,Container,Heading, FormLabel,Input, Box, Button} from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
  return (
    <>
        <Container height={'95vh'}>
            <VStack height={"full"} justifyContent={"center"} spacing={"16"}>
                <Heading children={"Welcome to Tech Panda"}/>
               
               <form style={{width:"100%"}}>
                  <Box my={'4'}>
                  <FormLabel htmlFor='email' children='email Addresss'/>
                   <Input
                     required
                     id='email'
                     value = {email}
                     onChange= {(e) => setEmail(e.target.value)}
                     type="email"
                     placeholder='abc@gmail.com'
                     focusBorderColor='green'
                     />
                  </Box>

                  <Box my={'4'}>
                  <FormLabel htmlFor='password' children='Enter Password'/>
                   <Input
                     required
                     id='password'
                     value = {password}
                     onChange= {(e) => setPassword(e.target.value)}
                     type="password"
                     placeholder='Enter your password'
                     focusBorderColor='green'
                     />
                  </Box>

                  <Box>
                     <Link to='/forgetpassword'>
                        <Button fontSize={'sm'} variant={'link'}>
                            Forget Password
                        </Button>
                     </Link>
                  </Box>

                  <Button my="4" colorScheme='green' type='submit' variant={"solid"}>
                     Login
                  </Button>

                  <Box my="4">
                     New User? <Link to='/register'>
                        <Button variant={"link"} colorScheme='green'>
                            Sign Up
                        </Button>{" "}
                        </Link>
                            Link
                  </Box>
               </form>
            </VStack>

        </Container>
    </>
  )
}

export default Login;
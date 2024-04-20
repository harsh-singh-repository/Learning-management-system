import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {

     const [name,setName] = useState("");
     const [email,setEmail] = useState("");

  return (
       <>
           <Container py={"16"} minH={"90vh"}>
            <form>
               <Heading children={"Update Pofile"} my={"16"} textAlign={["center","left"]}/>
               <VStack spacing={"8"}> 
               <Input
                required
                id="old password"
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
                focusBorderColor="green"
              />


               <Input
                required
                id="newpassword"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="text"
                placeholder="New Password"
                focusBorderColor="green"
              />
  
             <Button w={"full"} colorScheme='green' type='submit'>Update Profile</Button>

               </VStack>
            </form>
       </Container>
       </>
  )
}

export default UpdateProfile
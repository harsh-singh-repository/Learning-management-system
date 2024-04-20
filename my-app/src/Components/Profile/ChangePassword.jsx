import { Container, Heading, VStack,Input, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {

    const [oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");

  return (
    <>
       <Container py={"16"} minH={"90vh"}>
            <form>
               <Heading children={"Change Password"} my={"16"} textAlign={["center","left"]}/>
               <VStack spacing={"8"}> 
               <Input
                required
                id="old password"
                value={oldPassword}
                onChange={e => setOldPassword(e.target.value)}
                type="password"
                placeholder="Old Password"
                focusBorderColor="green"
              />


               <Input
                required
                id="newpassword"
                value={newPassword}
                onChange={e => setNewPassword(e.target.value)}
                type="password"
                placeholder="New Password"
                focusBorderColor="green"
              />
  
             <Button w={"full"} colorScheme='green' type='submit'>Change Password</Button>

               </VStack>
            </form>
       </Container>
    </>
  )
}

export default ChangePassword
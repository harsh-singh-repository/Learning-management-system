import { Container, Heading, VStack,FormLabel,Input, Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password,setPassword] = useState();
    //  const params = useParams();

  return (
    <>
       <Container padding={"16"} height={"90vh"}>
           <form>
              <Heading children="Reset Password" my={"16"} textAlign={["center","left"]}/>
                 <VStack spacing={"8"}>
                     <Input
                           required
                           id="password"
                           value={password}
                           onChange={e => setPassword(e.target.value)}
                           type="password"
                           placeholder="New Password"
                           focusBorderColor="green"
                    />

                    <Button type='submit' w={"full"} colorScheme='whatsapp'>
                           Reset Password
                    </Button>        
                 </VStack>
           </form>
       </Container>
    </>
  )
}

export default ResetPassword;
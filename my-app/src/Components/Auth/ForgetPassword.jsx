import { Container, Heading, VStack,FormLabel,Input, Button} from '@chakra-ui/react'
import React, { useState } from 'react'

const ForgetPassword = () => {
    const [email,setEmail] = useState();
     

  return (
    <>
       <Container padding={"16"} height={"90vh"}>
           <form>
              <Heading children="Forget Password" my={"16"} textAlign={["center","left"]}/>
                 <VStack spacing={"8"}>
                     <Input
                           required
                           id="email"
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                           type="email"
                           placeholder="abc@gmail.com"
                           focusBorderColor="green"
                    />

                    <Button type='submit' w={"full"} colorScheme='whatsapp'>
                           Send reset Link
                    </Button>        
                 </VStack>
           </form>
       </Container>
    </>
  )
}

export default ForgetPassword
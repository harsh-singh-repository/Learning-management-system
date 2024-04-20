import { Container, Heading,VStack,Box,Text, Button} from '@chakra-ui/react';
import {RiCheckboxCircleFill} from "react-icons/ri"
import React from 'react'
import { Link } from 'react-router-dom';

const PaymentSucces = () => {
  return (
    <>
      <Container h={"90vh"} p="16">
        <Heading my={"8"} textAlign ={"center"}>
            You have two pro pack
        </Heading>


        <VStack boxShadow={"lg"} pb={"16"} alignItems={"center"} borderRadius="lg">
            <Box w={"full"} bg={"green.900"} p={"4"} css={{borderRadius:"8px 8px 0 0"}}>
                <Text color={"white"}>
                    Payment Success
                </Text>
            </Box>

            <Box p={"4"}>
               <VStack textAlign={"center"} px={"8"} mt={"4"} spacing={"8"}>
                    <Text>
                      Congrutulations you're a pro member now.You have access to premium content.
                    </Text>

                    <Heading fontSize={"2xl"}>
                        <RiCheckboxCircleFill/>
                    </Heading>
               </VStack>
            </Box>

            <Link>
                <Button variant={"ghost"}>Go to profile</Button>
            </Link>

            <Heading size={"xs"}>
              Reference : sfhuhfuhfushfu
            </Heading>
        </VStack>
      </Container>
    </>
  )
}

export default PaymentSucces
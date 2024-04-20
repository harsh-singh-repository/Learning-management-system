import { Avatar, Box, Button, Container, HStack, Heading, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import data from '../../Assets/docs/TermsAndCondition'
import samplevideo from "./../../Assets/videos/sample.mp4"
import { Link } from 'react-router-dom'
import {RiSecurePaymentFill} from "react-icons/ri"

const TandC = ({termsAndCondition}) =>{
  return(
    <>
       <Box>
          <Heading size={'md'} children={"Terms and Condition"} textAlign={['center','left']} my={"4"}/>

          <Box h={'sm'} p={"4"} overflowY={"scroll"}>
            <Text letterSpacing={"widest"} textAlign={["center",'left']} fontFamily={"heading"}>
                {termsAndCondition}
            </Text>

            <Heading my={"4"} size={"xs"} children="Refund only applicable for cancelation in 7 days"/>
          </Box>

        </Box>
    </>
  )
}

const Founder = ()=>{
    return (
        <Stack direction={['column','row']} spacing={['4','16']} padding={'8'}>
          
           <VStack>
              <Avatar boxSize={['40','48']}/>
              <Text children={'Co-Founder'} opacity={"0.7"}/>
           </VStack>

           <VStack justifyContent={'center'} alignItems={['center','flex-start']}>
            <Heading children={"Harsh"} size={['md','xl']}/>
            <Text children={"Harsh, fondly known as the Doctor-programmer, is the driving force behind  Tech Panda. With a background in machine learning and a passion for making education accessible."}/>
           </VStack>
        </Stack>
    )
}

const VideoPlayer = () =>{
    return (
        <>
            <Box>
                <video src={samplevideo} autoPlay controls controlsList='nodownload nofullscreen nofullscreen' disablePictureInPicture disableRemotePlayback loop></video>
            </Box>
        </>
    )
}

const About = () => {
  return (
    <>
      <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
         <Heading children={'About Us'} textAlign={['center','left']}/>
         <Founder/>

         <Stack m="8" direction={["column",'row']} alignItems={'center'}>
            <Text fontFamily={"cursive"} m={"8"} textAlign={['center','left']}>
            At UnlockSkills EdTech, we believe that learning should be a journey, not a destination. Our founders are committed to creating a platform that not only imparts knowledge but also inspires a lifelong love for learning.
            </Text>

            <Link to="/subscribe">
              <Button variant={"ghost"} colorScheme='green'>
                Check Out Our plans
              </Button>
            </Link>
         </Stack>
         <VideoPlayer/>
         <TandC termsAndCondition={data}/>
         <HStack my={"4"} padding={"4"}>
            <RiSecurePaymentFill/>
            <Heading size={"xs"} children={"Payment is Secured by Razor Pay"} 
            fontFamily={"sans-serif"} textTransform={"uppercase"}/>

         </HStack>
      </Container>
    </>
  )
}

export default About
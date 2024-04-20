import React, { useState } from 'react'
import { Grid,Box, Heading,Text, VStack} from '@chakra-ui/react';
import samplevideo from "./../../Assets/videos/sample.mp4"

const CoursePage = () => {
  const [lectureNumber,setLectureNumber] = useState(0);

  const lectures = [
    {
    _id:"sasaasaa",
    title:"Sample1",
    description:"sample sefce nafds faf",
    video:{
      url:'sasdsa',
    }
  },
    {
    _id:"sasaasaa",
    title:"Sample2",
    description:"sample sefce nafds faf",
    video:{
      url:'sasdsa',
    }
  },
    {
    _id:"sasaasaa",
    title:"Sample3",
    description:"sample sefce nafds faf",
    video:{
      url:'sasdsa',
    }
  }
]
  return (
    <>
      <Grid minH={"90vh"} templateColumns={['1fr',"3fr 1fr"]}>
          <Box>
            <video src={samplevideo} autoPlay controls controlsList='nodownload nofullscreen nofullscreen' disablePictureInPicture disableRemotePlayback></video>

            <Heading children={`#${lectureNumber+1} ${lectures[lectureNumber].title}`} margin={"4"}/>
            <Heading children={"Description"} margin={"4"}/>
            <Text children={lectures[lectureNumber].description} margin={"4"}/>
          </Box>

          <VStack>
            {
              lectures.map((element,index)=>(
                <button key={element._id}
                onClick={()=>setLectureNumber(index)}
                style={{
                  width:"100%",
                  padding:"1rem",
                  textAlign:"center",
                  margin:0,
                  borderBottom:"1px solid rgba(0,0,0,0.2)"
                }}
               >
                  <Text noOfLines={1}>
                    #{index + 1} {element.title}
                  </Text>
                </button>
              ))
            }
          </VStack>
      </Grid>
    </>
  )
}

export default CoursePage;
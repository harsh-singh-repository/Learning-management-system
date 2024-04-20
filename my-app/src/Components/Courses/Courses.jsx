import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Artificial from './../../Assets/images/Artificial intelligence-amico.png';
import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

const addToPlaylistHandler = () =>{
    console.log("Add to playlist");
}

const Course = (
  views,
  title,
  imgSrc,
  id,
  creator,
  description,
  lectureCount
) => {
  return (
    <>
      <VStack className="courses" alignItems={['center', 'flex']}>
        <Image src={Artificial} boxSize={'60'} objectFit={'contain'} />
        <Heading textAlign={['center', 'left']}
          maxW={'200px'}
          noOfLines={'3'}
          maxW={'200px'}>Sample</Heading>
        <Text children={description} noOfLines={2}>Sample</Text>
        <HStack>
            <Text fontWeight={"bold"} textTransform="uppercase">Creator</Text>
            <Text fontFamily={"body"} textTransform="uppercase">Harsh Singh</Text>
        </HStack>

        <Heading textAlign={"Center"} size={'xs'} children={`Lecture - ${lectureCount}`}/>
        <Heading size={'xs'} children={`Views - ${views}`} textTransform={"uppercase"}/>

        <Stack direction={['column','row']} alignItems={'center'}>
           <Link to={`/courses/${id}`}>
             <Button variant={"solid"} colorScheme='whatsapp'>Watch Now</Button>
           </Link>

           <Button variant={'ghost'} colorScheme='whatsapp' onClick={()=>addToPlaylistHandler(id)}>
            Add To Playlist
           </Button>
        </Stack>
      </VStack>
    </>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState();
  const [category, setCategory] = useState();

  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Structure and Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

  return (
    <>
      <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
        <Heading children="All courses" m={'8'} />

        <Input
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          placeholder={'Search....'}
          type="text"
          focusBorderColor="green.500"
        />

        <HStack
          overflowX={'auto'}
          paddingY={'8'}
          css={{
            '::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {categories.map((item, index) => (
            <Button key={index} minW={'60vh'} onClick={() => setCategory(item)}>
              <Text children={item} />
            </Button>
          ))}
        </HStack>

        <Stack
          direction={['column', 'row']}
          flexWrap={'wrap'}
          justifyContent={['flex-start', 'space-evenly']}
          align={['center', 'flex-start']}
        >

          <Course
            description={'Sample'}
            views={23}
            imgSrc={'Sample'}
            creator={'Sample Boy'}
            lectureCount={34}
          />

        </Stack>
      </Container>
    </>
  );
};

export default Courses;

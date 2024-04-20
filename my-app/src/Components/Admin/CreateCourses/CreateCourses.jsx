import React, { useState } from 'react';
import {
  Grid,
  Container,
  Heading,
  VStack,
  Input,
  Select,
  Image,
  Button,
} from '@chakra-ui/react';
import SideBar from '../Dashbord/SideBar.jsx';

const CreateCourses = () => {
  const [title, setTitle] = useState('');
  const [description, setDiscription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [img, setImg] = useState('');
  const [imgPrev, setImgPrev] = useState('');

  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Structure and Algorithm',
    'App Development',
    'Data Science',
    'Game Development',
  ];

const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: 'green',
    backgroundColor: 'white',
  };

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImgPrev(reader.result);
      setImg(file);
    };
  };

  return (
    <>
      <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
        <Container py={'16'}>
          <Heading
            textTransform={'uppercase'}
            children={'Create Course'}
            my={'16'}
            textAlign={['center', 'left']}
          />

          <VStack m={'auto'} spacing={'8'}>
            <Input
              required
              id="course"
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text"
              placeholder="Title"
              focusBorderColor="green.200"
            />

            <Input
              required
              id="course"
              value={description}
              onChange={e => setDiscription(e.target.value)}
              type="text"
              placeholder="Description"
              focusBorderColor="green.200"
            />

            <Input
              required
              id="course"
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              type="text"
              placeholder="Creator Name"
              focusBorderColor="green.200"
            />

            <Select
              focusBorderColor="green.200"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">Category</option>

              {categories.map(item => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </Select>

            <Input
              accept="image/*"
              required
              type="file"
              focusBorderColor="green.500"
              css={{
                '&::file-selector-button': fileUploadCss,
                color: 'green',
              }}
              onChange={changeImageHandler}
            />

            {imgPrev && (
              <Image src={imgPrev} boxSize={'64'} objectFit={'contain'} />
            )}
            <Button w="full" colorScheme="whatsapp">
              Create Course
            </Button>
          </VStack>
        </Container>

        <SideBar />
      </Grid>
    </>
  );
};

export default CreateCourses;

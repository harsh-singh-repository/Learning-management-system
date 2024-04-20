import {
  HStack,
  VStack,
  Container,
  Heading,
  FormLabel,
  Input,
  Box,
  Button,
  Avatar,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: 'green',
    backgroundColor: 'white',
}

const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [imgPrev, setImgPrev] = useState();
  const [img, setImg] = useState();

  const changeImageHandler = (e)=>{
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () =>{
        setImgPrev(reader.result);
        setImg(file);
      }
  }

  return (
    <>
      <Container height={'95vh'} my={'10rem'}>
        <VStack height={'full'} justifyContent={'center'} spacing={'69'}>
          <Heading children={'Registration'} textTransform={'uppercase'} />

          <form style={{ width: '100%' }}>
            <Box my={'4'} display={'flex'} justifyContent={'center'}>
              <Avatar src={imgPrev} size={'2xl'} />
            </Box>

            <Box my={'4'}>
              <FormLabel htmlFor="name" children="Name" />
              <Input
                required
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
                focusBorderColor="green"
              />
            </Box>

            <Box my={'4'}>
              <FormLabel htmlFor="email" children="email Addresss" />
              <Input
                required
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="abc@gmail.com"
                focusBorderColor="green"
              />
            </Box>

            <Box my={'4'}>
              <FormLabel htmlFor="password" children="Enter Password" />
              <Input
                required
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                focusBorderColor="green"
              />
            </Box>

            <Box my={'4'}>
              <FormLabel htmlFor="chooseAvatar" children="Choose Avtar" />
              <Input
                required
                id="chooseAvatar"
                accept="image/*"
                type={'file'}
                focusBorderColor="green"
                css={fileUploadStyle}
                onChange={changeImageHandler}
              />
            </Box>

            <Button my="4" colorScheme="green" type="submit" variant={'solid'}>
              Sign Up
            </Button>

            <Box my="4">
              Alredy SignUp?{' '}
              <Link to="/login">
                <Button variant={'link'} colorScheme="green">
                  login here
                </Button>{' '}
              </Link>
              Link
            </Box>
          </form>
        </VStack>
      </Container>
    </>
  );
};

export default Register;

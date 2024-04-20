import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  Grid,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  Input,
  ModalFooter,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const CourseModel = ({
  isOpen,
  onClose,
  courseId,
  deleteButtonHandler,
  addLectureHandler,
  courseTitle,
  lectures = [],
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');

  const fileUploadCss = {
    cursor: 'pointer',
    marginLeft: '-5%',
    width: '110%',
    border: 'none',
    height: '100%',
    color: 'green',
    backgroundColor: 'white',
  };

  const changeVideoHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };

  const handleClose = ()=>{
    setTitle("");
    setDescription("");
    setVideoPrev("");
    onClose();
  }

  return (
    <>
      <Modal isOpen={isOpen} size={'full'} onClose={handleClose} scrollBehavior='outside'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{courseTitle}</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody p={'16'}>
            <Grid templateColumns={['1fr', '3fr 1fr']} gap={'5'}>
              <Box py={['0', '16']}>
                <Box my={'5'}>
                  <Heading children={courseTitle} />
                  <Heading children={`${courseId}`} size={'sm'} opacity={0.4} />
                </Box>

                <Heading children={'Lectures'} size={'lg'} />
                <VideoCard
                  title="React Intro"
                  description="This is a intro lecture where you will know the basic of react"
                  num={1}
                  lectureId={'ufheuwhfuehwfu'}
                  courseId={courseId}
                  deleteButtonHandler={deleteButtonHandler}
                />
              </Box>

              <Box>
                <form
                  onSubmit={e =>
                    addLectureHandler(e, courseId, title, description, video)
                  }
                >
                  <VStack spacing={'4'}>
                    <Heading
                      children={'Add Lectures'}
                      size={'md'}
                      textTransform={'uppercase'}
                    />
                    <Input
                      focusBorderColor="green.400"
                      placeholder="Title"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                    />

                    <Input
                      focusBorderColor="green.400"
                      placeholder="Description"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    />

                    
            <Input
              accept="video/mp4"
              required
              type="file"
              focusBorderColor="green.500"
              css={{
                '&::file-selector-button': fileUploadCss,
                color: 'green',
              }}
              onChange={changeVideoHandler}
            />

            {videoPrev && (
                <video controlsList='nodownload' controls src={videoPrev}></video>
            )}

            <Button w={'full'} colorScheme='whatsapp' type='submit'>Uplaod</Button>

                  </VStack>
                </form>
              </Box>
            </Grid>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleClose}>
             Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

function VideoCard({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteButtonHandler,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      my={'8'}
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5)'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size={'sm'} children={`${num} ${title}`} />
        <Text children={description} />
      </Box>

      <Button
        color={'green.600'}
        onClick={() => deleteButtonHandler(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}

export default CourseModel;

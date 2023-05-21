import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />

      <Container minH={'100vh'} maxW={'container.xl'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w="fit-content"
          borderBottom={'2px solid'}
          margin="auto"
        >
          Services
        </Heading>

        <Stack
          h="full"
          p="4"
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            maxime expedita velit officiis ducimus deleniti eligendi eos rerum
            iure dolorum ab atque, nostrum quas laboriosam consequuntur
            reiciendis, nihil adipisci quasi. Similique enim in alias et cum sed
            culpa, pariatur doloribus voluptatum porro fugit saepe repellat
            eaque quibusdam unde necessitatibus beatae possimus? Nemo aliquid
            aspernatur harum sit fugit asperiores expedita dolorem, cum optio
            obcaecati corrupti animi ratione hic cumque. Quas quis ea cupiditate
            ullam molestiae, corrupti reiciendis ipsa odit accusantium tenetur
            alias a optio. Itaque modi sed aperiam libero mollitia delectus at!
            Facilis error dolorem ipsa necessitatibus aut ducimus dolor
            incidunt!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h={"full"} w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch into future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img2} h={"full"} w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Gaming is future
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img3} h={"full"} w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>

    <Box w="full" h={'100vh'}>
      <Image src={img4} h={"full"} w={"full"} objectFit={"cover"}/>
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Nightlife is Fun
      </Heading>
    </Box>
  </Carousel>
);

export default Home;

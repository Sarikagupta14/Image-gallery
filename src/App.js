import { Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const App = () => {
  const imgs = [
    {
      id: 0,
      value: 
      "https://thumbs.dreamstime.com/b/creative-burst-painter-s-mind-face-paint-series-composition-colorful-portrait-young-woman-hair-association-creativity-174166503.jpg",
       
    },
    {
      id: 1,
      value:
        "https://img.freepik.com/premium-photo/portrait-african-woman-with-tropical-flowers-ai-generated_103740-2460.jpg",
    },
    {
      id: 2,
      value:
        "https://img.freepik.com/premium-photo/digital-painting-trending-woman-art-pop-image-effect-creative-digital-illustration-painting_743855-3748.jpg?w=2000",
    },
    {
      id: 3,
      value:
        "https://zenbreeze.com/cdn/shop/products/prtrlfdynght2_grande.jpg?v=1623943759",
    },
    {
      id: 4,
      value:
       
        "https://img.freepik.com/premium-photo/generative-ai-inside-human-head-is-abstract-fantasy-universe-your-mind-inspiration-horizo_137321-2600.jpg?w=2000",
      },
  ];

  const [sliderData, setSliderData] = useState(imgs[0]);
  const [val, setVal] = useState(0);
  const handleClick = (index) => {
    const slider = imgs[index];
    setSliderData(slider);
  };
  // setCurrent(current === images.length - 1 ? 0 : current + 1);
  const handleNext = () => {
    let index = val === imgs.length - 1 ? 0 : val + 1;
    setVal(index);
    const slider = imgs[index];
    setSliderData(slider);
  };
  const handlePrev = () => {
    let index = val === 0 ? imgs.length - 1 : val - 1;
    setVal(index);
    const slider = imgs[index];
    setSliderData(slider);
  };
  return (
    <Flex
      w={"100%"}
      h={"100%"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={"#DEEFED"}
    >
      <Text
        color={"black"}
        textDecoration={"underline"}
        textDecorationColor={"orange"}
        fontFamily={"cursive"}
        p={"10px"}
        fontSize={"35px"}
        fontWeight={"bold"}
      >
        Image Gallery
      </Text>

      {/* Zoom in and out property using Zoom in pan-pinch library */}
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={100}
        defaultPositionY={200}
      >
        <TransformComponent>
          <Image src={sliderData.value} h={"30rem"} w={"40rem"} />
        </TransformComponent>
      </TransformWrapper>

      {/* Buttons for left and right movement of slides */}
      <Flex w={{base:'100%',md:'100%',lg:"50%"}} justifyContent={"space-between"} mt={"10px"}>
        {/* Left button */}
        <Button
          border={"1px solid teal"}
          
          onClick={handlePrev}
        >
          <ChevronLeft size={40} />
        </Button>

        {/* Button showing Clicked image of total images */}
        <Button
          bgColor={"gray.100"}
          mt={"10px"}
         
          border={"1px solid gray"}
        >
          {sliderData.id + 1}/{imgs.length}
        </Button>

        {/* Right button */}
        <Button border={"1px solid teal"} onClick={handleNext}>
          <ChevronRight size={40} />
        </Button>
      </Flex>

      {/* Mapping of images */}
     
      <Flex direction={{base:'column',md:'column',lg:"row"}} mt={"10px"} justifyContent={'center'} alignItems={'center'}>
        {imgs.map((data, i) => (
          <Image
            _hover={{ border: "2px solid gray", transform: "scale(1.2)" }}
            p={"10px"}
            cursor={"pointer"}
            src={data.value}
            onClick={() => handleClick(i)}
            height={{base:'30%',md:'30%',lg:"70"}}
            width={{base:'60%',md:'60%',lg:"100"}}
            alt=""
          />
        ))}
      </Flex>
  
    </Flex>
  );
};

export default App;

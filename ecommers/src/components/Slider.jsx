
// import React from 'react'
// import styled from 'styled-components'
// import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
// import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

// const Container=styled.div`
// width:100%;
// height:100vh;
// background-color:grey;
// position:relative;
// `
// const Arrow=styled.div`
// color:skyblue;
// height:150px;
// display:flex;
// align-items:center;
// justify-content:center;
// position:absolute;
// top:0;
// bottom:0;
// margin:auto;
// cursor:pointer;
// right:${props=>props.direction==="right" && "500px"};
// left:${props=>props.direction==="left" && "95%"};
// color:${props=>props.direction==="righ" && "pink"};

// `
// const Wrapper=styled.div`
//   height:100%;
  
// `
// const SliderContainer=styled.div`
//   width:100%;
//   display:flex;
  
//   height:100vh;
  
// `
// const ImageContainer=styled.div`
// flex:1;
// width:100%
// height:100%
// overflow: hidden;
// `
// const Image=styled.img`
// width:100%;
// height:100%;
// object-fit: cover;

// `
// const Info=styled.div`
// flex:1;
// padding:5px;
// display:flex;
// flex-direction:column;
// justify-content:center;
// align-items:center;
// `
// const Title=styled.h1`
// font-size:15px;
// `
// const Discription=styled.p`
// font-size: 26px; /* Font size */
//   line-height: 1.5; /* Line height for better readability */
//   margin-bottom: 20px; /* Spacing at the bottom of each paragraph */
//   color: #333; /* Text color *

// `
// const Button=styled.button`
// margin:20px;
// display: inline-block;
// padding: 10px 20px;
// font-size: 16px;
// text-align: center;
// text-decoration: none;
// border-radius: 5px;
// background-color: #3498db; /* Background color */
// color: #fff; /* Text color */
// border: 2px solid #2980b9; /* Border color */
// box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Box shadow */
// transition: background-color 0.3s ease, transform 0.1s ease; /* Transition effect */
// cursor: pointer;
// ;
// `




// const Slider = () => {
//   return (
//     <Container>
       
//         <Wrapper>
//         <SliderContainer>
//           <ImageContainer><Image src="https://img.freepik.com/free-/pair-man-woman-wearing-glasses-carried-lots-paper-bags-shopping_1150-27736.jpg?size=626&ext=jpg&ga=GA1.2.1398323447.1696488260&semt=ais"/>
//           </ImageContainer>
//           <Info>
//           <Title>SUMMER SALE</Title>
//           <Discription>Don`t Compromise on Fashion....ITS NOW AND FOR EVER </Discription>
//            <Button>SHOW NOW</Button>
//           </Info>
//         </SliderContainer>
//         </Wrapper>

//         <Arrow  direction="left">
//             <ArrowCircleLeftRoundedIcon/> 
//         </Arrow>

//         <Arrow direction="Right">
//         <ArrowCircleRightRoundedIcon/>
//         </Arrow>
      
//     </Container>
//   )
// }

// export default Slider
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';
import { SliderItems } from '../data';
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: grey;
  position: relative;
  display:flex;
  overflow-hidden;
 
  
  
`;

const Arrow = styled.div`
  color: skyblue;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  right: ${(props) => props.direction === "right" && "500px"};
  left: ${(props) => props.direction === "left" && "95%"};
  color: ${(props) => props.direction === "righ" && "pink"};
  
`;

const Wrapper = styled.div`

  height: 100%;
  display:flex;
  transition:all 1.5s ease; 
  transform:translateX(${(props) => props.slideindex*-100}vw) 
`;

const SliderContainer = styled.div`
  width: 100vw;
  display: flex;
  height: 100vh;
  background-color: #${props=>props.bg}
`;

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill; /* Fit the entire image within the container */
  object-position: center; 
`;

const Info = styled.div`
  flex: 1;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${(props) => props.fontSize || "15px"};
  color: ${(props) => props.color || "#333"};
  transition: font-size 0.5s ease, color 0.5s ease;
`;

const Discription = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
  color: #333;
`;

const Button = styled.button`
  margin: 20px;
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  background-color: #3498db;
  color: #fff;
  border: 2px solid #2980b9;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, transform 0.1s ease;
  cursor: pointer;
`;

const Slider = () => {
    const [slideindex,setslideindex]=useState(0);
    const handleClick =(direction)=>{
      if(direction==="left")
        {
          setslideindex(slideindex>0 ? slideindex-1:2)
          console.log("left clicked")
        }
      else
      {
        setslideindex(slideindex<2 ? slideindex+1:0)
        console.log("Right clicked")
      }
      
    }
  const [titleStyle, setTitleStyle] = useState({
    fontSize: "15px",
    color: "#333",
  });

  useEffect(() => {
    const changeTitleStyle = () => {
      // Generate random color and size values
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      const randomSize = `${Math.floor(Math.random() * 30) + 15}px`; // Random size between 15 and 44

      // Update title style with new values
      setTitleStyle({
        fontSize: randomSize,
        color: randomColor,
      });
    };

    const intervalId = setInterval(changeTitleStyle, 1000); // Change styles every 5 seconds

    return () => {
      clearInterval(intervalId); // Clear the interval on component unmount
    };
  }, []);

  return (
    <Container>
      <Wrapper slideindex={slideindex}>
        {SliderItems.map((item)=>(
        <SliderContainer bg={item.bg} key={item.id}>
          <ImageContainer>
            <Image src={item.image } />
          </ImageContainer>
          <Info>
            <Title fontSize={titleStyle.fontSize} color={titleStyle.color}>{item.title}</Title>
            <Discription>Don't Compromise on Fashion....IT'S NOW AND FOREVER </Discription>
            
            <Button>SHOW NOW</Button>
          </Info>
        </SliderContainer>
        ))}  
      </Wrapper>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowCircleLeftRoundedIcon />
      </Arrow>

      <Arrow direction="Right"  onClick={()=>handleClick("Right")}>
        <ArrowCircleRightRoundedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;

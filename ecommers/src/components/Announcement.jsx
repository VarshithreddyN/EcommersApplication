// import React from 'react'
// import styled from 'styled-components'
// const Container=styled.div`
// color:vilolet;
// font:bold;
// background-color:red
// `


// const Announcement = () => {
//   return (
//     <div>
      
//         <Container> WE ARE IN 50% OFF SALE</Container>
//     </div>
//   )
// }

// export default Announcement
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: violet;
  font-weight: bold;
  display:flex;
  justify-content:center;
  background-color: ${props => props.bgColor};
  transition: background-color 0.5s ease; /* Add a smooth transition effect */
`;

const colors = ['red', 'blue', 'green', 'orange', 'purple','grey'];

const Announcement = () => {
  const [bgColorIndex, setBgColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 1000); // Change color every 5 seconds

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <div>
      <Container bgColor={colors[bgColorIndex]}>
        WE ARE IN 50% OFF SALE
      </Container>
    </div>
  );
}

export default Announcement;

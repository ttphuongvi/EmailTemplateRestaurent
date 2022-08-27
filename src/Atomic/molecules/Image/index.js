import styled from "@emotion/styled";
import React from "react";

import Box from "../../atoms/Box";

const ImageStyles = styled("img")({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  objectFit: "cover",
  zIndex: -1
});

const Image = (props) => {
  // const ratioIamge = ${calc(`${props.ratio}` * 100%)};
  //   const ratioImage = { paddingTop: calc(1 / `${props.ratio}`) };
  const numberReal = (1 / parseFloat(props.ratio, 10)) * 100;
  return (
    <Box
      component={"div"}
      sx={{
        position: "relative",
        paddingTop: `calc(${numberReal}%)`
      }}
    >
      <ImageStyles alt="" src={props.src}></ImageStyles>
    </Box>
  );
};

export default Image;

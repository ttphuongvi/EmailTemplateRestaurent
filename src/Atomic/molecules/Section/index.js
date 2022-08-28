import React from 'react';
import Stack from '../../atoms/Stack';
import Typography from '../../atoms/Typography';
import PropTypes from 'prop-types';
import StyledBox from "../../molecules/StyledBox";
import Box from '../../atoms/Box';

const Section = ({caption, subtitle,  content}) => {
  return ( 
    <StyledBox sx={{ backgroundColor: "rgba(0,0,0,.8)" }}>
    <Stack justifyContent="center" alignItems="center" spacing={1}>
    <Typography
    variant='caption'
      sx={(theme) => ({
        textTransform: "uppercase",
        color: theme.palette.text.darkCaption,
        paddingBottom: theme.spacing(1),
        borderBottom: `2px solid ${theme.palette.primary.main}`
      })}
    >
     {caption}
    </Typography>
    <Typography
      variant="subtitle"
      sx={(theme) => ({  color: theme.palette.text.darkSubtitle})}
    >
     {subtitle}
    </Typography>   
   <Box >
   {content}
   </Box>
        
  </Stack>
  </StyledBox>
  )
}

Section.prototype ={
caption: PropTypes.string,
subtitle: PropTypes.string,
content: PropTypes.node,
dark: PropTypes.string,
};

export default Section;
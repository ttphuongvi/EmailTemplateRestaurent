import React from "react";
import PropTypes from "prop-types";
import AtomCaption from "../../atoms/Text/AtomCaption";
import AtomTitle from "../../atoms/Text/AtomTitle";
import AtomContent from "../../atoms/Text/AtomContent";

const HeadingSection = ({ caption, title, content, dark }) => {
  return (
    <div>
      <AtomCaption dark={dark ? true : false}>{caption}</AtomCaption>

      <AtomTitle dark={dark ? true : false}>{title}</AtomTitle>

      <AtomContent dark={dark ? true : false}>{content}</AtomContent>
    </div>
  );
};
export default HeadingSection;
HeadingSection.prototype = {
  caption: PropTypes.any,
  title: PropTypes.any,
  content: PropTypes.any,
  dark: PropTypes.bool,
};

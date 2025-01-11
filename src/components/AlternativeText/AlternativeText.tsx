import React from "react";

interface Props {
  text: string;
}

const AlternativeText: React.FC<Props> = ({ text }) => {
  return (
    <div>{text}</div>
    //   Order is empty! Please add some item
  );
};

export default AlternativeText;

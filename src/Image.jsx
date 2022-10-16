import React from "react";

const Image = ({ url }) => {
  const altUrl =
    "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132__340.png";

  return (
    <div>
      <img src={url} alt={altUrl} width="250px" height="250px" />
    </div>
  );
};

export default Image;

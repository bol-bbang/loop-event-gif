import React, { useEffect, useState } from "react";
import Image from "./Image";

const Gif = ({ image_array, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(
      () =>
        setCount((cnt) => {
          if (cnt === image_array.length - 1) {
            return 0;
          } else {
            return cnt + 1;
          }
        }),
      delay
    );

    return () => clearTimeout(timeout);
  }, [count]);

  return (
    <div>
      <Image count={count} url={image_array[count]} />
    </div>
  );
};

export default Gif;
